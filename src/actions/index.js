export const selectLibrary = (libraryId) => {
  return {
    type: 'selected_id',
    payload: libraryId
  };
};
