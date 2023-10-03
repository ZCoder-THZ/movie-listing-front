import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import viteLogo from '/vite.svg'
import Home from './views/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {



        const response = await axios.get('http://127.0.0.1:8000/api/movies');
        const getMovies = await response.data;

        setMovies(getMovies);
        console.log(movies)

      } catch (error) {

      }


    }
    fetchMovies()


  }, [])


  return (
    <>
      <Home movies={movies} />

    </>
  )
}

export default App
