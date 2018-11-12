import loadBlocks from './block';
import {Dropdown} from './dropdown';
import {pack} from './packer';

const Blockly = require('blockly');
Blockly.BlockSvg.START_HAT = true;
Blockly.Field.prototype.maxDisplayLength = 20;

function setCollapsedAll(block, isCollapsed) {
  let nextBlock = block;

  do {
    nextBlock = nextBlock.getNextBlock();
    if(nextBlock) nextBlock.setCollapsed(isCollapsed);
  } while(nextBlock);
}

class Application {
  constructor(container) {
    if(typeof container === 'string') {
      container = document.getElementById(container) || document.querySelector(container);
    }
    this.container = container;
  }

  async initWorkspace(options) {
    if(this.workspace) this.workspace.dispose();
    const {config} = options;
    delete options.config;

    const {externals, toolbox, toolboxSrc, blockXml, preload_res, scriptsBefore, scriptsAfter} = await loadBlocks(config);
    options.toolbox = toolbox;

    this.toolboxSrc = toolboxSrc;
    this.preload_res = preload_res;
    this.externals = externals;
    this.scriptsBefore = scriptsBefore;
    this.scriptsAfter = scriptsAfter;

    const workspace = Blockly.inject(this.container, options);

    Blockly.Xml.domToWorkspace(blockXml.documentElement,
      workspace);

    workspace.getAllBlocks().forEach((block) => {
      const parent = block.getParent();
      if(!parent) { // is root block
        const isCollapsed = block.isCollapsed();
        if(isCollapsed) setCollapsedAll(block, true);
      }
    });

    let lastClickedTime = null;
    workspace.addChangeListener((event) => {
      if(event.type === Blockly.Events.UI && event.element === 'click') {
        const clickedTime = Date.now();
        if(lastClickedTime && clickedTime - lastClickedTime <= 300) {
          lastClickedTime = null;
          const block = workspace.getBlockById(event.blockId);
          const isCollapsed = block.isCollapsed();
          const parent = block.getParent();
          if(!parent) {
            setCollapsedAll(block, !isCollapsed);
          }
          block.setCollapsed(!isCollapsed);
        }
        lastClickedTime = clickedTime;
      }
      if(event.type === Blockly.Events.CHANGE && event.element === 'collapsed') {
        const block = workspace.getBlockById(event.blockId);
        const parent = block.getParent();
        if(!parent) {
          const isCollapsed = event.newValue;
          setCollapsedAll(block, isCollapsed);
        }
      }
    });

    this.workspace = workspace;
    return workspace;
  }

  get xml() {
    if(!this.workspace) return '';
    const {workspace, preload_res, scriptsBefore, scriptsAfter, toolboxSrc, externals} = this;
    const xml = Blockly.Xml.workspaceToDom(workspace);
    pack(xml);
    let code = xml.innerHTML;
    if(preload_res) {
      const resources = [];
      preload_res.forEach((res) => {
        if(Array.isArray(res)) {
          resources.push(`<resource type="texture_packer" texture="${res[0]}" data="${res[1]}"/>`);
        } else if(res.id === res.src) {
          resources.push(`<resource type="image" src="${res.src}"/>`);
        } else {
          resources.push(`<resource type="image" src="${res.src}" id="${res.id}"/>`);
        }
      });
      code = `<preload>${resources.join('')}</preload>${code}`;
    }
    if(scriptsBefore) {
      code = `${scriptsBefore.map(({src}) => `<script src="${src}"/>`).join('')}${code}`;
    }
    if(scriptsAfter) {
      code = `${code}${scriptsAfter.map(({src}) => `<script src="${src}"/>`).join('')}`;
    }
    if(externals) {
      const modules = externals.map((eb) => {
        return `<module src="${eb}"/>`;
      });
      code = `<externals>${modules.join('')}</externals>${code}`;
    }
    code = `<xml toolbox="${toolboxSrc}">${code}</xml>`;
    let indent = 0;
    return code.replace(/></g, '>\n<')
      .split(/\n/g).map((line) => {
        let ret = line;
        if(/^<\//.test(line)) {
          indent -= 2;
        }
        if(indent > 0) {
          ret = `${(new Array(indent + 1)).join(' ')}${line}`;
        }
        if(!(/(<\/\w+>|\/>)$/.test(line))) {
          indent += 2;
        }
        return ret;
      }).join('\n');
  }

  get code() {
    if(!this.workspace) return '';

    const {workspace, preload_res, scriptsBefore, scriptsAfter} = this;
    const xml = Blockly.Xml.workspaceToDom(workspace);
    // Add each top block one by one and generate code.
    const allCode = [];

    Dropdown.createFromBlockFields(xml);

    // Generate JavaScript code and run it.
    window.LoopTrap = 1e7;
    Blockly.JavaScript.INFINITE_LOOP_TRAP = `${Blockly.Generator.prototype.INDENT}if (--window.LoopTrap == 0) throw "Infinite loop.";\n`;

    Blockly.JavaScript.init(workspace);
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    allCode.push(code);

    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    if(preload_res) {
      allCode.push(`spritly.runtime.scene.preload(...${JSON.stringify(preload_res)})
  .then(() => spritly.runtime.Signal.send('START', spritly.runtime.scene));
`);
    } else {
      allCode.push("spritly.runtime.Signal.send('START', spritly.runtime.scene);\n");
    }
    const comment = `/** 
  Generated by spritly ${(new Date()).toLocaleString()};
  Usage: 
  <script src="https://unpkg.com/spritejs/dist/spritejs.min.js"></script>
  <script src="https://unpkg.com/spritly/dist/spritly-runtime.min.js"></script>
  <div id="stage" style="width:100%;height:100%;"></div>
*/`; /* eslint-enable */
    allCode.unshift(comment, 'spritly.runtime.use(spritejs);');

    if(scriptsBefore.length) {
      allCode.unshift('/* -- external scripts start -- */', ...scriptsBefore.map(({code}) => code), '/* -- external scripts end -- */');
    }
    if(scriptsAfter.length) {
      allCode.push('/* -- external scripts start -- */', ...scriptsAfter.map(({code}) => code), '/* -- external scripts end -- */');
    }
    return allCode.join('\n\n');
  }
}

export default Application;
