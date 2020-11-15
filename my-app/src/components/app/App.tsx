import React, { FC } from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import Navigation from '../navigation';
import { AboutPage } from '../../pages/about-page';
import { TodoListPage } from '../../pages/todo-list-page';

//import TextInputBottom from '../ref-input';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>

      <Route path='/' component={TodoListPage} exact />

      <Route path='/about' component={AboutPage} />

      </Switch> 
    </BrowserRouter>
  );
}

export default App;
