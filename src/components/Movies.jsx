import React from 'react'
import { Link } from 'react-router-dom';

const Movies = ({ movie }) => {
    return (
        <div key={movie.id} className="max-w-sm m-1 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src={movie.cover_image_url} alt="" />

            {movie.user && (
                <h3 className='my-3'>Created By : {movie.user.name ?? ''}</h3>
            )}
            {/* {
                movie.user ? <h3 className='my-3'>Created By : {movie.user.name ?? ''}</h3> : ''
            } */}
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
            </a>
            <h3>IMDB Rating : {movie.imdb_rating}</h3>
            <h4>Author : {movie.author}</h4>
            <h3>Tags:{movie.tags}</h3>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.summary}</p>

            <Link className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={`/detail/${movie.id}`}>Detail</Link>
        </div>
    )
}

export default Movies