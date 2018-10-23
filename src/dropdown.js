const dropdowns = new Map();

export const Dropdown = {
  set(key, value) {
    const dropdown = dropdowns.get(key) || new Set();
    dropdown.add(value);
    dropdowns.set(key, dropdown);
    return dropdown;
  },
  get(key) {
    return [...(dropdowns.get(key) || [])];
  },
};
