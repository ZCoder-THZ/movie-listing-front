import axios from 'axios';
import { list } from 'postcss';
import React, { useState, useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom';
import Movies from '../components/Movies';
import { AuthContext } from '../contexts/AuthContext';


const Home = ({ movies }) => {

    const {isAuth,setAuth}=useContext(AuthContext)

    useEffect(() => {
      setAuth(true)
      console.log(isAuth)
    });

    const getDetail = async (id) => {
        const response = await axios.get('http://127.0.0.1:8000/api/movies/' + id);

        console.log(response.data);

    }

    return (

        <div>
            <h1 className="text-center">Movie List</h1>

            <div className="flex flex-wrap">



                {
                    movies.map(movie =>
                        <Movies key={movie.id} movie={movie} />
                    )
                }


            </div>




        </div>

    )
}

export default Home