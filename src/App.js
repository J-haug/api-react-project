import logo from './logo.svg';
import './App.css';
import SearchNav from './components/SearchNav';
import Item from './components/Item';
import Items from './components/Items';
import Search from './pages/Search';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemPage from './pages/ItemPage';




function App() {
  const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=32')
                if (!res.ok) throw new Error(res.statusText)
                const data = await res.json()
                console.log(data)
                setItems(data.results)
            } catch (err) {
                console.error(err)
            }
        }
        
        fetchItems()
    }, [])
    
    console.log(items)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' />
          <Route path="/search" element={<Search items={items} />} />
          <Route path='/article/:id' element={<ItemPage items={items} />} />
        </Routes>
        
      </div>

    </Router>
  );
}

export default App;
