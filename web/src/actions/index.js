export const changeHeader = (text) => {
  return {
    type: 'CHANGE_HEADER',
    payload: text
  };
};

export const updateForm = (prop, value) => {
  return {
    type: 'UPDATE_FORM',
    payload: { prop: prop, value: value }
  };
};
