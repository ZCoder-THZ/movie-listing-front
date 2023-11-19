import { Button, Navbar } from 'flowbite-react';
import React,{ useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const Nav = () => {
    const {token,setToken}=useContext(AuthContext);

   

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
            {
                !token?  <div className="flex md:order-2">
                <Link className='bg-teal-600 py-1 px-2 text-white rounded-md me-2' to={'/user/register'}>
                    Sign Up
                </Link>
                <Link className=' border-solid border-2 text-teal-500 border-teal-600 py-1 px-2  rounded-md' to={'/user/login'}>
                    Sign In
                </Link>
                <Navbar.Toggle />
            </div>:''
            }
          
            <Navbar.Collapse>
                <Link to={'/'}>
                    Movies
                </Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                {
                    token?<Link onClick={()=>{
                        setToken(null)
                        localStorage.removeItem('token') 
                        
                    }} className='text-teal-500 border-teal-600  rounded-md'>Sign Out</Link>:''
                }

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav