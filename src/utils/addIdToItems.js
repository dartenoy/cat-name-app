let idCounter = 0;

export const addIdToNames = (items) => {
  return items.map((item) => ({
    name: item,
    id: `id${idCounter++}`,
  }));
};
