import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/HandlingEvent';
import { render } from '@testing-library/react';

class Hangling extends Component {
  constructor(){
    super();
    this.state = [
    {title:'xem phim',isComplete:true},
    {title:'Nghe nhac'},
    {title:'choi bong chuyen',isComplete:true}
    ];
  }
  onItemClicked(){
    this.setState({

    })
  }
  render(){
      return (
        <div className="App"> 
           { 
           this.todoItems.length > 0 && this.todoItems.map((item, index) => <TodoItem key={index} item={item} onClick={this.onItemClicked} />)

           }
           {
           this.todoItems.length === 0 && 'Nothing here'
           }
        </div>
      );
    }
  }
  
  
export default Hangling;

