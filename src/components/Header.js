import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <Container>
        <Row className="d-lg-block  d-none ">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="title">MAI</h1>
            </div>
            <div className="d-flex gap-3" style={{ fontSize: "20px",cursor:"pointer" }}>
              <h4>Post a Project</h4>
              <h4 className="text_primary fw700">Login</h4>
              <h4 className="text_primary fw700">Sign Up</h4>
            </div>
          </div>
        </Row>
      </Container>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand">
            WWW.MYPROJECT.AI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/project">
                Project
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/works">
                How it Works
              </Nav.Link>
              <Nav.Link as={Link} to="/worktops">
                DIY Worktops
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Headers;
