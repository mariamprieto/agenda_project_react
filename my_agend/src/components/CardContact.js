import React from "react";
import { Container, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import  "./style/style.css";
import Swal from "sweetalert2";
import axios from "axios"

import { Link } from "react-router-dom";

const CardContact=({contatos, setUpdateState,UpdateState}) => {

    const URL = 'http://localhost:9000/contatos'


    const handleDelete = async () => {
    Swal.fire({
        title: `Tem certeza, que deseja eliminar ${contatos.nome}?`,
        text: 'Você não será capaz de reverter isso!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#218838',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'sim,Apagar!'
        
      }).then((result) => {
         
        if(result.isConfirmed){
              
           axios.delete(`${URL}/${contatos.id}`).then((response) => { 

             if (response.status === 200) {
               Swal.fire(
                 'Eliminado!',
                 `O registro ${contatos.nome} foi eliminado !`,
                  'success'  
               )
               setUpdateState(!UpdateState)
             } else  {
                Swal.fire(
                    'Eliminado!',
                    `Problema para Apagar o registro ${contatos.nome} !`,
                     'error' 
                )
             }
         })
       
      }
    })

}
 
    
    return(
     <div className="col-4 mb-3">   
       <Container >
          <Card>
         

            <Card.Body>
            
                <ListGroup className="mb-2">
                     
                <Card.Title className="text-center">{contatos.nome}</Card.Title>
                     
                    <ListGroupItem> <strong> Telefone </strong> {contatos.telefone} </ListGroupItem>
                    <ListGroupItem> <strong> Email </strong> {contatos.email} </ListGroupItem>

                </ListGroup>
                <button className="btn-danger btn me-2 apagar" onClick={handleDelete}>Apagar</button>
                <Link to={`/edit/${contatos.id}`} className="btn  btn-info  " > Editar</Link>

            </Card.Body>
          </Card>
       </Container>
    </div>   
    )
}
export default  CardContact;