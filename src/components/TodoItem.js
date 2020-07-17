import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    onClick(text){
        // hien thi message
        alert(text);
        console.log(text);
    }
    onAddName = () => {
        // luu vao
        console.log(this.refs.name.value);
        alert(this.refs.name.value);
    }
    render() {
       const { item } = this.props;
       let  className='TodoItem';
       if(item.isComplete){
           className += ' TodoItem-complete';
       }
        return ( 
            <div className = {className} >
                <p>{this.props.item.title} </p> 
                <button onClick={() => this.onClick(this.props.item.title)}>Click me</button>
                <div>
                    <label>Name</label>
                    <input type="text" ref="name" />
                    <button type='submit' onClick={this.onAddName}> Save</button>
                </div>
            </div>
        );
    }
}
export default TodoItem;