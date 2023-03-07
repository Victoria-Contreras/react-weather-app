import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCity } from '../../features/city/citySlice'
import { Link } from 'react-router-dom'
const Favorites = () => {
    const dispatch = useDispatch();
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


    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setCity(e.target.innerText))
    }

    return ( 
        <div className='favorites-bar'>
            <ul>
                { favorites[0] ? <li>Favorites:</li> : null}
                {favorites[0] ? favorites.map((item, index) => <li key={index}><a href='#' onClick={(event) => handleClick(event)}>{item}</a></li>) : <li><Link to="/login">Log In</Link> or add favorites</li>}
            </ul>

        </div>
     );
}
 
export default Favorites;