export const state = () => ({
  todos: [],
  load: true,
  activeFlag: true,
});

export const getters = {
  todos: (state) => state.todos,
  load: (state) => state.load,
  activeFlag: (state) => state.activeFlag,
  activeTodos: (state) => {
    if (state.activeFlag) {
      return state.todos.filter((todo) => todo.completed === false);
    } else {
      return state.todos;
    }
  },
};

export const mutations = {
  initTodos(state, { todos }) {
    state.todos = todos;
    state.load = false;
  },
  addTodo(state, { addItem }) {
    const { userId, title } = addItem;
    const id =
      Math.max.apply(
        null,
        state.todos.map((todo) => todo.id)
      ) + 1;
    state.todos = [
      ...state.todos,
      {
        userId,
        id,
        title,
        completed: false,
      },
    ];
  },
  toggleTodo(state, { id }) {
    state.todos.forEach((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
    });
  },
  removeTodo(state, { id }) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  toggleActiveFlag(state) {
    state.activeFlag = !state.activeFlag;
  },
};
