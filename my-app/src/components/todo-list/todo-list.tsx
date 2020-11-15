import React, { FC } from 'react'; 
import ITodo  from '../../interfaces';
import TodoListItem from '../todo-list-item';
type TodoListProps = {
    todos: ITodo[]
}
    const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
    <ul>
        {
            todos.map((todo) => {
                return <TodoListItem todo={todo}/>
            })
        }
    </ul>
    )
    };

export default TodoList;