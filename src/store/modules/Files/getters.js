import sortBy from 'lodash/sortBy';

export default {
  getFiles: (state) => {
    // sort by folders and then name
    return sortBy(state.filesById.map((id) => state.files[id]), ['type', 'name']);
  },
  getFile: (state) => (id) => {
    return state.files[id];
  },
};
