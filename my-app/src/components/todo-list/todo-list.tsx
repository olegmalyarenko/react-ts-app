import React, { FC } from 'react'; 
import ITodo  from '../../interfaces';
import TodoListItem from '../todo-list-item';
type TodoListProps = {
    todos: ITodo[],
    onToggle: (id:number) => void,
    onRemove:(id:number) => void
}
    const TodoList: FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
    return (
    <ul>
        {
            todos.map((todo) => {
                return <TodoListItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
            })
        }
    </ul>
    )
    };

export default TodoList;