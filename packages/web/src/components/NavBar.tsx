import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import profilePicture from '../assets/test_profile_picture.jpg';
import '../styles/NavBar.css';

const NavBar = () => {
   return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
         <Container>
            <Navbar.Brand href="#home">
               <h2 className="NavBarTitle">Export Tracker (foglio)</h2>
            </Navbar.Brand>
            <Navbar.Brand href="#home">
               <img src={profilePicture} className="NavBarProfilePicture" alt="logo" />
            </Navbar.Brand>
         </Container>
      </Navbar>
   );
}

export default NavBar;