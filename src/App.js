import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();
    /// Kieu Array
    // this.todoItems = ['xem phim','Nghe nhac','choi bong chuyen'];

    /// Kieu Object
    this.todoItems = [
    {title:'xem phim',isComplete:true},
    {title:'Nghe nhac'},
    {title:'choi bong chuyen',isComplete:true}
    ];
  }
 render(){
   return (
     // Lay tu component
      <div className="App">
        <header className="App-header">
          <img src='https://cf.shopee.vn/file/a14f3efe24725b56936b8432b3e765a9' className="App-logo" alt="logo" />
          <TodoItem title ="hai huoc" al="vui ve"/>
          <TodoItem title ="kinh di" bb="kkk"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  // Render list

  render(){
      return (
        <div className="App"> 
           { 
           /// Kieu Array
           // this.todoItems.map((item, index) => <TodoItem key={index} title={item} />)
   
           /// Kieu Object
           this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem key={index} item={item} />)

           }
           {
           this.todoItems.length === 0 && 'Nothing here'
           }
        </div>
      );
    }
  }
  
  
export default App;

