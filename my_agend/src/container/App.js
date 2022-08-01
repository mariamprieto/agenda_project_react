import React from "react";
import { Container } from "react-bootstrap";

import ListaDeContatos from  "../components/listadecontatos"
import  "../components/style/style.css";



const App = () => {
 
  
  return (
      <Container fluid>
        <br />
         <h2 className= "text-center"> Lista de contatos</h2>
         <br />
         <ListaDeContatos  />
         
      </Container>
    )
}
export default App;