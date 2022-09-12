import React, {Component} from "react"
import ReactDOM from "react-dom"
class TodoItem extends Component{ 
    constructor(props){ 
        super() 
        this.state = { 
            item: props.item, 
        } 
        this.handleChange = this.handleChange.bind(this) 
    } 
    handleChange(){ 
        const newItem = this.state.item; 
        newItem.completed = !newItem.completed; 
        this.setState({ 
            item: newItem, 
        }) 
    } 
    render(){ 
        return( 
            <div className="todoItem">
                <input onChange={this.handleChange} id={this.state.item.id} type="checkbox" checked={this.state.item.completed} name={this.state.item.text}></input>
                <label className={this.state.item.completed?"checked":null} for={this.state.item.text}>{this.state.item.text}</label>
            </div>
        ); 
    } 
} 
export default TodoItem;