import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Item from '../components/Item';

function ItemPage({ items }) {
    const { id } = useParams();
    const item = items.find((item) => +item.id === +id);
    
  return (
    <>
        <Nav />
        
        <Item item={item} key={item.id}/>
    </>
  )
}

export default ItemPage