/**
 * @class Controller
 *
 * Links the user input and the TodoView output.
 *
 * @param TodoListModel
 * @param TodoView
 */

export default class TodoController {
  constructor(TodoListModel, TodoView) {
    this.TodoListModel = TodoListModel;
    this.TodoView = TodoView;

    this.TodoListModel.bindTodoListChanged(this.onTodoListChanged);
    this.TodoView.bindAddTodo(this.handleAddTodo);
    this.TodoView.bindDeleteTodo(this.handleDeleteTodo);
    this.TodoView.bindToggleTodo(this.handleToggleTodo);
    this.TodoView.bindEditTodo(this.handleEditTodo);

    // Display initial todos
    this.onTodoListChanged(this.TodoListModel.todos);
  }

  onTodoListChanged = (todos) => {
    this.TodoView.displayTodos(todos);
  };

  handleAddTodo = (todoText) => {
    this.TodoListModel.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.TodoListModel.editTodo(id, todoText);
  };

  handleDeleteTodo = (id) => {
    this.TodoListModel.deleteTodo(id);
  };

  handleToggleTodo = (id) => {
    this.TodoListModel.toggleTodo(id);
  };
}
