export const selectLibrary = (id) => {
  return {
    type: 'SELECT_LIBRARY_ID',
    payload: id
  };
};
