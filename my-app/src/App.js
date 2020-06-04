import React from 'react';
import logo from './logo.svg';
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
