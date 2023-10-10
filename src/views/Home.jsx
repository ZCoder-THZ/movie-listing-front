import axios from 'axios';
import { list } from 'postcss';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Movies from '../components/Movies';

const Home = ({ movies }) => {

    useEffect(() => {
        console.log(movies)
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