<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todos.length" v-cloak>
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone" />
        <label for="toggle-all"></label>
        <ul class="todo-list">
          <li
            v-for="todo in filteredTodos"
            class="todo"
            :key="todo.id"
            :class="{ completed: todo.completed, editing: todo == editedTodo }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.title"
              v-todo-focus="todo == editedTodo"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todos.length" v-cloak>
        <span class="todo-count">
          <strong>{{ remaining }}</strong>
          {{ remaining | pluralize }} left
        </span>
        <ul class="filters">
          <li>
            <a href="javascript:;" :class="{ selected: visibility == 'all' }" @click="updateVisbility('all')">All</a>
          </li>
          <li>
            <a href="javascript:;" :class="{ selected: visibility == 'active' }" @click="updateVisbility('active')">Active</a>
          </li>
          <li>
            <a href="javascript:;" :class="{ selected: visibility == 'completed' }" @click="updateVisbility('completed')">Completed</a>
          </li>
        </ul>
        <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
        >Clear completed</button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>
        Part of
        <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TodoItem from '@/interface/TodoItem'
import TodoStorage from '@/utils/TodoStorage'
import Filters from '@/utils/Filters'

@Component({
  filters: {
    pluralize(n: number) {
      return n === 1 ? "item" : "items";
    }
  },
  directives: {
    'todo-focus'(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
})
export default class App extends Vue {
  todos: TodoItem[] =  []
  newTodo: string = ''
  editedTodo: TodoItem | null = null
  visibility: string = 'all'
  beforeEditCache: string = ''

  get filteredTodos() {
    return ['all', 'active', 'completed'].includes(this.visibility) ? Filters[this.visibility](this.todos) : [];
  }

  get remaining() {
    return Filters.active(this.todos).length;
  }

  get allDone() {
    return this.remaining === 0;
  }

  set allDone(value: boolean) {
    this.todos.forEach(function(todo) {
      todo.completed = value;
    })
  }

  @Watch('todos', { immediate: true, deep: true })
  onHandler(todos: TodoItem[]) {
    TodoStorage.save(todos);
  }

  updateVisbility(payload: string) {
    this.visibility = payload
  }

  addTodo(): void {
    var value = this.newTodo && this.newTodo.trim();
    if (!value) {
      return;
    }
    this.todos.push({
      id: TodoStorage.uid++,
      title: value,
      completed: false
    });
    this.newTodo = "";
  }

  removeTodo(todo: TodoItem) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  editTodo(todo: TodoItem) {
    this.beforeEditCache = todo.title;
    this.editedTodo = todo;
  }

  doneEdit(todo: TodoItem) {
    if (!this.editedTodo) {
      return;
    }
    this.editedTodo = null;
    todo.title = todo.title.trim();
    if (!todo.title) {
      this.removeTodo(todo);
    }
  }

  cancelEdit(todo: TodoItem) {
    this.editedTodo = null;
    todo.title = this.beforeEditCache;
  }

  removeCompleted() {
    this.todos = Filters.active(this.todos);
  }
}
</script>

<style lang="stylus">
@import url('./assets/stylus/app.styl');
</style>
