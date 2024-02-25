import React, {useContext, useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoImage from "../img/logoImage.jpeg";
import "./Header.css";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from 'react-bootstrap/Accordion';
import {Badge} from "react-bootstrap";
import {FavoritesContext} from "../store/favorites/context";

function Header() {

    const { state } = useContext(FavoritesContext);

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;
        setIsScrolled(position > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`Header ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
            {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
                <Navbar key={expand} expand={false} className={`Header d-flex fixed-top navbarMargin ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>

                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
                            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                            <img
                                alt="logo image"
                                src={logoImage}
                                width="50"
                                height="50"
                                className="rounded-1"
                            />{' '}
                            <span className="title">News Project</span>
                        </Navbar.Brand>

                        <Navbar className="justify-content-center flex-grow-1 ">
                            <Nav.Link as={Link} to="/" className="px-1">Home</Nav.Link>
                            <Nav.Link as={Link} to="/favorites" className="px-1">Favorites  <Badge className="bg-dark">{state.news.length}</Badge></Nav.Link>
                        </Navbar>

                        <Navbar.Toggle className="bg-dark text-light m-1" id={`offcanvasNavbar-expand-${expand}`}>
                            <MenuIcon/> </Navbar.Toggle>

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="bg-dark text-white">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Categories</Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className="justify-content-end flex-grow-1 pe-3">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="bg-dark ">Arts</Accordion.Header>
                                        <Accordion.Body className="bg-dark">
                                            <Nav.Link as={Link} to="/category/art"
                                                      className="text-light py-2">Art</Nav.Link>
                                            <Nav.Link as={Link} to="/category/books"
                                                      className="text-light py-2">Books</Nav.Link>
                                            <Nav.Link as={Link} to="/category/museum"
                                                      className="text-light py-2">Museums</Nav.Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="bg-dark">Sports</Accordion.Header>
                                        <Accordion.Body className="bg-dark ">
                                            <Nav.Link as={Link} to="/category/tennis"
                                                      className="text-light py-2">Tennis</Nav.Link>
                                            <Nav.Link as={Link} to="/category/football"
                                                      className="text-light py-2">Football</Nav.Link>
                                            <Nav.Link as={Link} to="/category/bachetball"
                                                      className="text-light py-2">Basketball</Nav.Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="bg-dark">Science</Accordion.Header>
                                        <Accordion.Body className="bg-dark ">
                                            <Nav.Link as={Link} to="/category/technology"
                                                      className="text-light py-2"
                                            >Tech</Nav.Link>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                                <Nav.Link as={Link} to="/category/fashion"
                                          className="text-light py-2"
                                >Fashion</Nav.Link>
                                <Nav.Link as={Link} to="/favorites"
                                          className="text-light py-2"
                                >Favorites</Nav.Link>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

        </header>
    );
}

export default Header;
