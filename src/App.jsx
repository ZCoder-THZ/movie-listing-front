import { useState, useEffect, PureComponent } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'
import viteLogo from '/vite.svg'
import Home from './views/Home'
import Detail from './views/Detail';
import Nav from './components/Nav';
import './App.css'
import PublicProfile from './views/PublicProfile';
import SignUp from './views/SignUp';
import Login from './views/Login';

import createMovie from './views/movies/createMovie';
import RelatedMovies from './views/RelatedMovies';
import {AuthContext,AuthContextProvider} from './contexts/AuthContext';


function App() {
  const [count, setCount] = useState(0);
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {



        const response = await axios.get('http://127.0.0.1:8000/api/movies');
        const getMovies = await response.data;

        setMovies(getMovies);


      } catch (error) {

      }


    }
    fetchMovies()


  }, [])



  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Nav />
      <Routes>
        <Route index path='/' element={<Home movies={movies} />} />
        <Route path='/movies/create' element={<createMovie/>} />

        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/users/public_profile/:userId' element={<PublicProfile />} />
        <Route path='/user/related_movies/:userId' element={<RelatedMovies />} />
        <Route path='/user/register' element={<SignUp />} />
        <Route path='/user/login' element={<Login />} />

   

      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
  )
}

export default App
