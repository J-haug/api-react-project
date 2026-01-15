import React from 'react'
import SearchNav from '../components/SearchNav'
import Items from '../components/Items'
import Item from '../components/Item'

function Search({items}) {
  return (
    <>
    <SearchNav />
    <Items items={items} />
    
    </>
  )
}

export default Search