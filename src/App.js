import "./App.css";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsGear } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LIFF</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
        <Nav>
          <Nav.Link href="/">
            <BsGear />
          </Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
