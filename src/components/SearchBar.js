import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { setCity } from '../features/city/citySlice'
import searchIcon from '../assets/search.png'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault()
        if (searchString){
            dispatch(setCity(searchString))
            setSearchString('')
        }
    }
    return ( 
        <form id="city-search" onSubmit={handleSubmit}>
            <input type="text" value={searchString} placeholder="City" onChange={(event) => setSearchString(event.target.value)} />
            <button type="submit"><img id='search-icon' src={searchIcon} /></button>
        </form>
     );
}
 
export default SearchBar;