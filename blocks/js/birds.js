/* global spritly */

let bird;

const STEP = 100;

function mode(rotate) {
  rotate %= 360;
  return rotate >= 0 ? rotate : (360 + rotate);
}

function turnRight() {
  const rotate = bird.attr('rotate') + 90;
  if(mode(rotate) !== 180) {
    bird.attr({scale: [1, 1]});
  }
  return bird.transition(0.3).attr({rotate}).then(() => {
    const rotate = bird.attr('rotate');
    if(mode(rotate) === 180) {
      bird.attr({scale: [1, -1]});
    }
  });
}

function turnLeft() {
  const rotate = bird.attr('rotate') - 90;
  if(mode(rotate) !== 180) {
    bird.attr({scale: [1, 1]});
  }
  return bird.transition(0.3).attr({rotate}).then(() => {
    const rotate = bird.attr('rotate');
    if(mode(rotate) === 180) {
      bird.attr({scale: [1, -1]});
    }
  });
}

function forward() {
  let rotate = bird.attr('rotate');
  rotate = mode(rotate);
  if(rotate === 0) {
    return bird.transition(0.3).attr({x: x => x + STEP});
  }
  if(rotate === 90) {
    return bird.transition(0.3).attr({y: y => y + STEP});
  }
  if(rotate === 180) {
    return bird.transition(0.3).attr({x: x => x - STEP});
  }
  if(rotate === 270) {
    return bird.transition(0.3).attr({y: y => y - STEP});
  }
}

spritly.runtime.ready((scene, {Sprite}) => {
  bird = new Sprite();

  const attr = spritly.runtime.parse_attr(bird, {
    anchor: 0.5,
    textureFrame$0: ['bird1.png', 0.2],
    textureFrame$1: ['bird2.png', 0.2],
    textureFrame$2: ['bird3.png', 0.2],
    pos: [500, 500],
  });

  bird.attr(attr);

  scene.fglayer.append(bird);
});
