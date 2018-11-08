const dropdowns = new Map();
const fromBlocks = [];

export const Dropdown = {
  set(key, value) {
    const dropdown = dropdowns.get(key) || new Set();
    dropdown.add(value);
    dropdowns.set(key, dropdown);
    return dropdown;
  },
  delete(key, value) {
    const dropdown = dropdowns.get(key) || new Set();
    dropdown.delete(value);
    return dropdown;
  },
  get(key) {
    return [...(dropdowns.get(key) || [])];
  },
  clear() {
    dropdowns.clear();
  },
  addBlockFields(key, type, fieldName) {
    fromBlocks.push({key, type, fieldName});
  },
  createFromBlockFields(xml) {
    fromBlocks.forEach((block) => {
      const {key, type, fieldName} = block;
      const blockFields = xml.querySelectorAll(`block[type="${type}"] > field[name="${fieldName}"]`);
      blockFields.forEach((blockField) => {
        Dropdown.set(key, blockField.textContent);
      });
    });
  },
};
