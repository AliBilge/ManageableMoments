import * as React from 'react';
import './App.css';
import MyHeader from './containers/MyHeader'
import MyButton from './components/MyButton'

import ToDoList from './components/ToDoList'


function App() {
  return (
    <div className="App">
      <MyHeader/>
      <MyButton/>
      <ToDoList/>

    </div>
  );
}

export default App;