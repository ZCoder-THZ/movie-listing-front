import React, { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
const Detail = () => {
    const { id } = useParams();
    let [movie, setMovie] = useState('');

    useEffect(() => {
        async function getMovie() {
            const response = await axios.get(`${apiUrl}/movies/`+id);

            const getmovie = await response.data.data;

            setMovie(getmovie);

        }
        getMovie();

    }, [])

    useEffect(() => {
        console.log(movie)
    })


    return (
        <div>


            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img className="mr-4 w-16 h-16 rounded-full" src={movie.avatar ?? '/public/avatar.jpg'} alt="Jese Leos" />
                                    <div>
                                        <Link to={`/users/public_profile/${movie.user ? movie.user[0].id : '#'}`} rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{movie.user ? movie.user[0].name : ''}</Link>
                                        <p className="text-base text-gray-500 dark:text-gray-400">{movie.user ? movie.user[0].email : ''}</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400"><time title="February 8th, 2022">{movie.created_at}</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{movie.title}</h1>
                        </header>

                        <figure><img src={movie.cover_image_url} alt="" />
                            <figcaption>Author :{movie.author}</figcaption>
                        </figure>
                        <h2 className='my-3'>Tags:{movie.tags}</h2>

                        <h2 className='my-3'>Genres:{movie.genres}</h2>
                        <h2 className='my-3'>IMDB Rating :{movie.imdb_rating}</h2>



                        <p > Summary :{movie.summary}</p>

                    </article>
                </div>
            </main>




        </div >
    )
}

export default Detail