import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React from 'react'

const Nav = () => {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand>

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Link className='bg-teal-600 py-1 px-2 text-white rounded-md' to={'/user/register'}>
                    Sign Up
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to={'/'}>
                    Movies
                </Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
           
                <Link to={'/user/register'}>Sign UP</Link>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav