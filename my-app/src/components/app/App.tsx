import React, {FC} from 'react';
import './App.css';
import Navigation from '../navigation';
import Complete from '../text-input';

const App: FC = () => {
  return (
    <div className="App">
      <Navigation />
       <Complete />
    </div>
  );
}

export default App;
