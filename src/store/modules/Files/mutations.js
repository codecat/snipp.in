import initialState from "./initialState";

export const types = {
  SET_FILES: "SET_FILES",
  RESET: "RESET",
};

export default {
  [types.SET_FILES]: (state, files) => {
    state.files = files;
    state.filesById = Object.keys(files);
  },
  // Resets the current module
  [types.RESET]: (state) => {
    const freshState = initialState();
    Object.keys(freshState).forEach((key) => {
      state[key] = freshState[key];
    });
  },
};
