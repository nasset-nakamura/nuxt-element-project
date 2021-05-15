<template>
  <div class="container">
    <logo />
    <h1 class="title">Sample01</h1>
    <h2>Todo List</h2>
    <div><input v-model="activeFlag" type="checkbox" /> active task only（count：{{ displayTodosCount }}）</div>
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
        <sample-01-display-todo
          v-for="todo in displayTodos"
          :key="todo.id"
          :todo="todo"
          @toggle="toggleTodo(todo.id)"
          @remove="removeTodo(todo.id)"
        />
      </tbody>
    </table>
    <hr />
    <h2>Add Todo</h2>
    <sample-01-add-todo @add="addTodo" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.get("https://jsonplaceholder.typicode.com/todos");
    return { todos: response.data };
  },
  data() {
    return {
      activeFlag: true,
    };
  },
  head() {
    return {
      title: "Sample01",
    };
  },
  computed: {
    displayTodos() {
      if (this.activeFlag) {
        return this.todos.filter((todo) => todo.completed === false);
      } else {
        return this.todos;
      }
    },
    displayTodosCount() {
      return this.displayTodos.length;
    },
  },
  mounted() {
    console.log({ $route: this.$route });
  },
  methods: {
    addTodo(addItem) {
      const { userId, title } = addItem;
      const id =
        Math.max.apply(
          null,
          this.todos.map((todo) => todo.id)
        ) + 1;
      this.todos = [
        ...this.todos,
        {
          userId,
          id,
          title,
          completed: false,
        },
      ];
    },
    toggleTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
      });
    },
    removeTodo(id) {
      const check = confirm("削除します。よろしいですか？");
      if (check) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      }
    },
  },
};
</script>
