import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ShowListItems';

class App extends Component {
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
  deleteItem = (key) =>{
     const filteredItems = this.state.items.filter(item => 
      item.key!== key);
     this.setState({
        items : filteredItems
     })
  }

  setUpdate = (text,key) => {
      const items = this.state.items;
      items.map(item => {
        if(item.key===key){
          item.text=text;
        }
      })
      this.setState({
        items: items
      })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h3>Add your Todo task here :</h3>
               <form onSubmit={this.addItem}>
                 <input type="text" placeholder= "enter task" className="inputbox" 
                 value={this.state.currentItem.text}
                 onChange={this.handleInput} />
                  &nbsp;
                 <button type="submit" className="btn">add</button>
               </form>
       <ListItems items={this.state.items}
       deleteItem = {this.deleteItem}
       setUpdate = {this.setUpdate} />
      </header>
    </div>  
   );
 }
}
export default App;
