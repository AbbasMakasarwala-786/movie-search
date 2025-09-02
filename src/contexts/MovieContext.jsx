// Used for providing global state 
// State manager for Favourite movies
import { createContext,useState,useContext,useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext) 

export const MovieProvider = ({children}) => {
    const [favorites,setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs)) // Store all information first in list then list is coonverted to JSON as local storage can only store json strings.
    },[])

    // any time favorites state changes storing the things in local storage
    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    // 3 operations add,remove check if favourite
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev,movie]) // prev to get previous value and add the movie
    }
    
    const removeFromFavourites = (movieId) =>{
        setFavorites[prev => prev.filter(movie => movie.id != movieId)]
    }

    const isFavourite = (movieId) => {
        return favorites.some(movie => movie.id == movieId)
    }

    const value ={
        favorites,
        addToFavorites,
        removeFromFavourites,
        isFavourite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
} // Provide state to any of the componenets that are wrapped around 
