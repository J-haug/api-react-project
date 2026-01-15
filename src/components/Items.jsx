import { useEffect, useState } from "react";
import Item from "./Item";

function Items({ items }) {
    
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