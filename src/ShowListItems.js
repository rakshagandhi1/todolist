import React from 'react';
import './ListItems.css';

function ListItems(props) {
	 const items = props.items;
	 const listItem = items.map(item => {
	    return <div className="list" key={item.key}>
                 <p><input type="text" id={item.key} value={item.text}
                 onChange = {
                 (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                 } /> </p>
                 <button className="removebtn" onClick={() => props.deleteItem(item.key)
                 }>remove</button>
	    </div>
	  })
	
	return(
	<div>
       {listItem}
       </div>
	)
}

export default ListItems;
