// Normal js 
const API_KEY = "6112146ea85e07467d3736a62f5879bf"
const BASE_URL = "https://api.themoviedb.org/3" 
// "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTEyMTQ2ZWE4NWUwNzQ2N2QzNzM2YTYyZjU4NzliZiIsIm5iZiI6MTc1NjIxMjE4MS41NTMsInN1YiI6IjY4YWRhYmQ1NTQ0YjVjYjZkZjZjZjFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WqGQmPb9NLcyLW8Bs33o2jY55r_CnTiEtn65isDvmKI"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()

    return data.results
};


export const SearchMovie = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()

    return data.results
};
