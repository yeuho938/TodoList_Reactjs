import React, { Component } from 'react';
import './TodoItem.css';

class HanglingEvent extends Component {
    onClick(){
        console.log('Hello');
    }
    render() {
       const { item, onClick } = this.props;
       if(item.isComplete){
           className += ' TodoItem-complete';
       }
        return ( 
            <div onClick = {onClick} className = {className} >
                <p>{this.props.item.title} </p> 
                <button onClick = {this.onClick}>click me</button>
            </div>
        );
    }
}
export default HanglingEvent;