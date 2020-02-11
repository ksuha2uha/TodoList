import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const elements = todos.map((item) => {
    const {id, ...itemProps} = item; //  в itemProps запишется все кроме id, в Реакт нужно передавать только те значения которыми ты пользуешься
    return (
        <li key={id} className='list-group-item'>
            <TodoListItem {...itemProps}
                          onDeleted={()=> onDeleted(id)}
                          onToggleDone={()=> onToggleDone(id)}
                          onToggleImportant={()=> onToggleImportant(id)}

            />
        </li>
        )
    });

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    )
}

export default TodoList;