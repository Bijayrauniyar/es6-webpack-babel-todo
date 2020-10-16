import TodoListModel from "./Models/TodoList.js";
import TodoView from "./Views/TodoView.js";
import TodoController from "./Controllers/TodoController.js";

const app = new TodoController(new TodoListModel(), new TodoView());
