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

        }
        getMovie();

    }, [])




    return (
        <div>

            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header class="mb-4 lg:mb-6 not-format">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                                        <p class="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                        <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{movie.title}</h1>
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




        </div>
    )
}

export default Detail