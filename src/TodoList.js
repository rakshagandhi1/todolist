import React, { Component } from 'react';
import ListItems from './ShowListItems';


class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      currentItem : {
        text : '',
        key : ''
      }
    }
  }
  handleInput=(e) =>{
     this.setState({
       currentItem : {
        text : e.target.value,
        key : Date()
       }    
     });
  }
  addItem =(e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!== ""){
      const newItems = [...this.state.items, newItem];
      this.setState({
         items : newItems,
         currentItem :{
          text : '',
          key : ''
         }
      });
    }
  }
	render(){
		return (
           <div className = "todoList">
               <form onSubmit={this.addItem}>
                 <input type="text" placeholder= "enter task to do" className="inputbox" 
                 value={this.state.currentItem.text}
                 onChange={this.handleInput} />
                  &nbsp;
                 <button type="submit" className="btn">add</button>
               </form>
           </div>
	   );
	}
} 

export default TodoList;