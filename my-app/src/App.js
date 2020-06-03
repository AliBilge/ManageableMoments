import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './containers/MyHeader'
import MyButton from './components/MyButton'


function App() {
  return (
    <div className="App">
      <MyHeader/>
      <MyButton/>
      <header className="App-header">ManageableMoments to do list 
      </header>

    </div>
  );
}

export default App;
