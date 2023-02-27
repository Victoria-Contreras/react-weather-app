import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { setCity } from '../features/city/citySlice'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault()
        dispatch(setCity(searchString))
        setSearchString('')
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={searchString} placeholder="City" onChange={(event) => setSearchString(event.target.value)} />
            <button type="submit">Search</button>
        </form>
     );
}
 
export default SearchBar;