import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios';



const Detail = () => {
    const { id } = useParams();
    let [movie, setMovie] = useState('');

    useEffect(() => {
        async function getMovie() {
            const response = await axios.get('http://127.0.0.1:8000/api/movies/' + id);

            const getmovie = await response.data.data;

            setMovie(getmovie);
            console.log(movie)
        }
        getMovie();

    }, [])



    return (
        <div>
            <h1> {movie.title}</h1>

        </div>
    )
}

export default Detail