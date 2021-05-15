<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample04-1</h1>
    <h2>Todo List</h2>
    <div><input v-model="activeFlag" type="checkbox" /> active task only（count：{{ activeTodos.length }}）</div>
    <table style="margin: 0 auto">
      <thead>
        <tr>
          <th>id</th>
          <th>userId</th>
          <th>title</th>
          <th>completed</th>
          <th>manage</th>
        </tr>
      </thead>
      <tbody>
        <sample-04-display-todo
          v-for="todo in activeTodos"
          :key="todo.id"
          :todo="todo"
          @toggle="toggleTodo(todo.id)"
          @remove="removeTodo(todo.id)"
        />
      </tbody>
    </table>
    <h2>Add Todo</h2>
    <sample-04-add-todo @add="addTodo" />
  </div>
</template>

<script>
export default {
  async fetch({ $axios, store }) {
    if (store.getters.todos.length) return;
    const response = await $axios.get("https://jsonplaceholder.typicode.com/todos");
    store.commit("initTodos", { todos: response.data });
  },
  head() {
    return {
      title: "Sample04-1",
    };
  },
  computed: {
    activeFlag: {
      get() {
        return this.$store.getters.activeFlag;
      },
      set() {
        this.$store.commit("toggleActiveFlag");
      },
    },
    activeTodos() {
      return this.$store.getters.activeTodos;
    },
  },
  methods: {
    addTodo(addItem) {
      this.$store.commit("addTodo", { addItem });
    },
    toggleTodo(id) {
      this.$store.commit("toggleTodo", { id });
    },
    removeTodo(id) {
      const check = confirm("削除します。よろしいですか？");
      if (check) {
        this.$store.commit("removeTodo", { id });
      }
    },
  },
};
</script>
