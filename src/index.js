//contiene todas las importaciones necesarias
import './styles.css';
import {Todo,TodoList} from './classes';
import {crearTodoHtml} from "./js/componentes";

export const todoList = new TodoList();

//necesario para cargar los elementos al listado
todoList.todos.forEach((todo) => {
 crearTodoHtml(todo)
});