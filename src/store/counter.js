export const state = () => ({
  count: 0,
});

export const getters = {
  count: (state) => state.count,
  double: (state) => state.count * 2,
};

export const mutations = {
  increment: (state) => state.count++,
  decrement: (state) => state.count--,
};
