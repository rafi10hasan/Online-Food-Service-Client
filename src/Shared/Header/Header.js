import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Authprovider/Authprovider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    
  return (
    <div>
      <Navbar className="container"  expand="lg">
        <Container>
          <Navbar.Brand className="text-warning fw-bold" as={Link} to={"/"}>Cloud Kitchen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto fw-bold">
              <Nav.Link className="text-black" as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link className="text-black" as={Link} to={"/services"}>Services</Nav.Link>
              <Nav.Link className="text-black" as={Link} to={"/blog"}>Blog</Nav.Link>

              {
        user?.email ?
            <>
                <Nav.Link className='fw-bold'><Link className="text-decoration-none text-black" to='/myreviews'>My reviews</Link></Nav.Link>
                <Nav.Link className='fw-bold '><Link className="text-decoration-none text-black" to='/addservices'>Add services</Link></Nav.Link>
                <Nav.Link className='fw-bold'>
                    <Link onClick={ handleLogOut } className="text-decoration-none text-warning fw-bold">Log Out</Link>
                </Nav.Link>
            </>
            :
            <Nav.Link className='fw-bold'><Link className="text-decoration-none text-black" to='/login'>Login</Link></Nav.Link>
    }






              
              {/* <Nav.Link className="text-black" as={Link} to={"/Login"}>Login</Nav.Link> */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Header;
