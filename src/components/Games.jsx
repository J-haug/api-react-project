import { useEffect, useState } from "react";
import Game from "./Game";

function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const res = await fetch('https://jsonfakery.com/games/simple-paginate')
                if (!res.ok) throw new Error(res.statusText)
                const data = await res.json()
                setGames(data.data)
            } catch (err) {
                console.error(err)
            }
        }
        
        fetchGames()
    }, [])
    
    console.log(games)
    return(
        <div className="container">
            <div className="row">
                {
                    games ? (
                        games.map(game => (
                            <Game game={game} />
                        ))
                    ) : (null)
                }
            </div>
        </div>
    )
}

export default Games;