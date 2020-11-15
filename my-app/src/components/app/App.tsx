import React, {FC, useState} from 'react';
import './App.css';
import Navigation from '../navigation';
import Complete from '../text-input';
import TodoList from '../todo-list';
import ITODO from '../../interfaces';
//import TextInputBottom from '../ref-input';

const App: FC = () => {
  const [todos, setTodos] = useState<Array<ITODO>>([]);

  const addTask = (title: string) => {
   console.log('Add task', title); 
   const newTodo: ITODO = {
     title: title,
     id: Date.now(),
     completed: false
   }
   setTodos(prev => [newTodo, ...todos]);
  }
  return (
    <div className="App">
      <Navigation />
       <Complete onAdd={addTask} />
       <TodoList todos={todos}/>
    </div>
  );
}

export default App;
