import React, { FC } from 'react'; 
import { DeleteOutlined } from '@ant-design/icons';
import './todo-list-item.css';

interface ITodoListItem {
    todo : {
        title: string,
        id: number,
        completed: boolean
    },
    onToggle: (id:number) => void,
    onRemove: (id:number) => void    
    
}
const TodoListItem: FC<ITodoListItem> = ({todo, onToggle, onRemove }) => {
    return (
        <li className="todo" key={todo.id}>
            <label>
                <input type="checkbox" checked={todo.completed} onClick={() => onToggle(todo.id)}/>
                    <span>{todo.title}</span>
                    <DeleteOutlined onClick={() => onRemove(todo.id)}/>
            </label>
        </li>
    )
};

export default TodoListItem;