import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import bank from './bank1.jpeg'; // Importing the logo
import { HashRouter, Routes, Route } from 'react-router-dom';
import Deposit from './deposit';
import Cashback from './cashback';
import Register from './register';
import Alldata from './alldata';

// Importing the video file
// import videoBackground from './home1.mp4';  // Import the video

function App() {
  let [isModel, setIsModel] = useState(true);

  return (
    <HashRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={bank} // Use the imported image here
              alt="Logo"
              className="d-inline-block align-top"
              style={{ width: "30px", height: "30px" }}  // Optional: adjust size
            />
            {" "}Thirua Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={() => setIsModel(true)}>Home </Nav.Link>
              <Nav.Link href="#register" onClick={() => setIsModel(false)}>Register </Nav.Link>
              <Nav.Link href="#deposit" onClick={() => setIsModel(false)}>Deposit</Nav.Link>
              <Nav.Link href="#cashback" onClick={() => setIsModel(false)}>Cashback</Nav.Link>
              <Nav.Link href="#alldata" onClick={() => setIsModel(false)}>All data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Video Background Section */}
      <div className="video-background">
        <video autoPlay loop muted className="video">
          {/* <source src={videoBackground} type="video/mp4" /> */}
          Sorry, your browser does not support embedded videos.
        </video>
        {isModel && (
          <div className="video-overlay">
            <h1>Welcome to Thiruna Bank</h1>
            <p>Your future starts here</p>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/alldata" element={<Alldata />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
