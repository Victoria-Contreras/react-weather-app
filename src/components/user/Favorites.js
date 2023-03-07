import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    const getFavorites = () => {
        fetch('/view-favorites')
            .then(response => response.json())
            .then(data => {
                data[0].Favorites.map(item => {
                    if (favorites.indexOf(item.city) == -1) {
                        setFavorites([ ...favorites, item.city])
                    }       
                })              
            })
    }

    useEffect(() => {
        getFavorites()
    }, [favorites])
    
    return ( 
        <div className='favorites-bar'>
            <ul>
                <li>Favorites:</li>
                {favorites.map((item, index) => <li key={index}><a href='#'>{item}</a></li>)}
            </ul>

        </div>
     );
}
 
export default Favorites;