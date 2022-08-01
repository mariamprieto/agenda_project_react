import React from "react";
import { Container, Nav, Navbar }  from "react-bootstrap" ;
import { Link } from "react-router-dom";
import "../components/style/style.css"

const NavBar = ()=> {
    return(
        
            <Navbar class="navbar navar-dark bg-dark" >
                <Container fluid className="nav-bar">
                 <Link to="/" className=" btn  btn-info  btn-sm  titulo me-3 ">Inicio</Link>
                    <Nav className= "me-auto" >
                  <Link to="/New" className="btn  btn-warning btn-sm "> Criar un novo Contato  </Link>
                 
                   </Nav>
                </Container>
            </Navbar>
        
    )
    }
export default NavBar;