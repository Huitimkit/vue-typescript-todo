import TodoItem from '@/interface/TodoItem'

const STORAGE_KEY = "todos-vuejs-2.0";

export default class TodoStorage {
  static uid: number = 0
  static fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    todos.forEach((todo: TodoItem, index: number) => {
      todo.id = index
    })
    this.uid = todos.length;
    return todos;
  }

  static save(todos: TodoItem[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}