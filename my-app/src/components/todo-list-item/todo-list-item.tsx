import React, { FC } from 'react'; 
import { DeleteOutlined } from '@ant-design/icons';

interface ITodoListItem {
    todo : {
        title: string,
        id: number,
        completed: boolean
    }
}
const TodoListItem: FC<ITodoListItem> = ({todo }) => {
    return (
        <li className="todo" key={todo.id}>
           <label>
                <input type="checkbox" checked={todo.completed}/>
                    <span>{todo.title}</span>
                    <DeleteOutlined />
               

           </label>
       </li>
    )
};

export default TodoListItem;