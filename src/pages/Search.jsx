import React from 'react'
import SearchNav from '../components/SearchNav'
import Items from '../components/Items'
import Item from '../components/Item'
import Footer from '../components/Footer'
function Search({items}) {
  return (
    <>
    
    <Items items={items} />
    <Footer />
    </>
  )
}

export default Search