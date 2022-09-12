import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import todosData from './todosData.js'
import TodoItem from './TodoItem.js'
class List extends Component{ 
    constructor(){ 
        super() 
        this.state = { 
            todosData: todosData, 
        } 
    } 
  
    render(){ 
        const todoItems = this.state.todosData.map(item => <TodoItem ke
y={item.id} item={item}/>) 
        return( 
            <div className="listBox">
                {todoItems}
            </div>
        ); 
    } 
} 
export default List