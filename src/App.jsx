import MovieCard from './components/MovieCard';
import Home from './pages/home';
import { Route,Routes } from 'react-router-dom';
import Favourites from './pages/favourites';
import NavBar from './components/NavBar';
import "./css/App.css";
import { MovieProvider } from './contexts/MovieContext';
function App() {
  const movieNumber = 1;


  return (

  <MovieProvider>
    <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourites />} />
        </Routes>
      </main>
  </MovieProvider>
  
  )
}









// // Components 
// function Text({text}) // parameters passed are called as props
// {
//   return (
//     <>
//     <div>
//       <p>
//         Hello world {text}
//       </p>
//     </div>
//     </>
//   )
// }



// //conditional rendering.
// {movieNumber == 1 ? (
// <MovieCard movie={{title:"Abbas Flim",release_date:"2024"}}/>
// ):
// (<MovieCard movie={{title:"Rabbit Flim",release_date:"2024"}}/>
// )}

export default App;
