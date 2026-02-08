import { useEffect, useState } from "react";
import Item from "./Item";

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=32"
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setItems(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);


  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
        <>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            <div className="item__loading--state">
                <div className="img__placeholder"></div>
                <div className="title__placeholder"></div>
            </div>
            
        </>
        ) : (
          items.map((item) => <Item item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
}

export default Items;
