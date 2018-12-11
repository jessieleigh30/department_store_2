import React from 'react';
import Items from './Items';



const ItemList = ({ item }) => (

  <div>
    <>
        {items.map(items => (
            <Item {...item} key={item.id}/>
        ))}
    </>
    )}
  </div>
)


export default ItemList;