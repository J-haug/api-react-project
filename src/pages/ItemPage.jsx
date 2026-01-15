import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Item from '../components/Item';

function ItemPage({ items }) {
    
    
  return (
    <>
        <Nav />
        <Item item={items} key={items.id}/>
    </>
  )
}

export default ItemPage