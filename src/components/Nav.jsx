import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import React from 'react'

const Nav = () => {
    return (
        <Navbar
            fluid
            rounded
        >
            <Navbar.Brand href="https://flowbite-react.com">

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>
                    Get started
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to={'/'}>
                    Movies
                </Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav