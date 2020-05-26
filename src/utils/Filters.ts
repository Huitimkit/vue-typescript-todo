import TodoItem from '@/interface/TodoItem'

export default class Filters {
  static all(todos: TodoItem[]) {
    return todos;
  }

  static active(todos: TodoItem[]) {
    return todos.filter(function(todo) {
      return !todo.completed;
    });
  }

  static completed(todos: TodoItem[]) {
    return todos.filter(function(todo) {
      return todo.completed;
    });
  }
}