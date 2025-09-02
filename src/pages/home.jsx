import MovieCard from "../components/MovieCard"
import { useState,useEffect} from "react"; //useEffect is used when we call to the api we dont want each time page relaoded the api is called again.
import '../css/Home.css'
import { SearchMovie,getPopularMovies } from "../services/api";




function Home(){

    const [searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies] =useState([]);
    const [error,setError] =useState(null);  // for checking any error occured during the api fetch
    const [loading,setLoading]=useState(true) // For checking if the loading data from the api is completed or not 

    useEffect(() => {
        const loadPopularMovies =async() =>{
            try{
                const popularMovies =await getPopularMovies()
                setMovies(popularMovies)
            }
            catch (err) {
                console.log("Failed to laod the movie form the api..",err)
                setError("Failed to load movie....")
            }
            finally{
                setLoading(false)
            }
        }

        loadPopularMovies()

    },[]) // pass an function and a dependency array/list-we want to check for a condition to occur before rerender

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if(loading) return 

        setLoading(true)
        try{
                const searchResults = await SearchMovie(searchQuery)
                setMovies(searchResults)
                setError(null)
        }
        catch(err){
            console.log(err)
            setError("Failed to search movies ...")
        }
        finally{
            setLoading(false)
        }
        searchQuery("")
        // setSearchQuery("-----")
    }

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies.... " 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="submit" className="search-button">Search</button>
        </form>


        {error && <div className="error-message">{error}</div>}

        {loading ? <div className="loading">Loading .... </div> : 
        <div className="movie-grid">
            {movies.map((movie) =>(
            
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie = {movie} key={movie.id}/>)
            )
                }
        </div>
        }

        
    </div>
    );
}
export default Home;
