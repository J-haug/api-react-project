import { useEffect, useState } from "react";
import Item from "./Item";

function Items() {
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
    return(
        <div className="container">
            <div className="row">
                {
                    items ? (
                        items.map(item => (
                            <Item item={item} key={item.id}/>
                        ))
                    ) : (null)
                }
            </div>
        </div>
    )
}

export default Items;