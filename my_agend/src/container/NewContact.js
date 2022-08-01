import React,{useState}from "react";

import Api from "../services/API";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import {Container,FormGroup,FormControl } from "react-bootstrap";







  const NewContact =() => { 
    
    let navigate = useNavigate();

    const [data,setData] = useState({  id:null, nome:"",email:"", telefone:""})
     
    const handlechange = ({target}) => {
        setData({
            ...data,
            [target.name] : target.value
        })

    }

     const handleSubmit  = async (e) => {
      e.preventDefault()
        const response = await Api.post('./contatos',data)
         if (response.status === 201){
            Swal.fire(
                'Guardado!',
                `O registro ${response.data.nome} foi adicionado com sucesso!`,
                'success'
              )
              
              navigate('/');

            } else{
                Swal.fire(
                    'error!',
                    'Problemas para criar o registro',
                    'error'
                  )
            }
        }
       
    
     
    return (
         <div >

         
        <Container className="col-4" >
          
           <div className="card">
             <h1 className="titulo">Novo Contato</h1> 
           
         <form onSubmit={handleSubmit}>
         
         <FormGroup className="mb-2">
        
    <label for="staticEmail" class="col-sm-2 col-form-label">Nome</label>
   
              <FormControl 
               type="text"
               name="nome"
               placeholder="Nome"
               value={data.nome}
               onChange={handlechange}
               required
              />

        
            </FormGroup>

            <FormGroup className="mb-2">
            <label for="staticEmail" class="col-sm-2 col-form-label">Telefone</label>
              <FormControl 
               type="text"

               name="telefone"
               placeholder ="telefone"
               value={data.telefone}
               onChange={handlechange}
               required
              />

        
            </FormGroup>
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <FormGroup className="mb-2">
              <FormControl 
               type="text"
               name="email"
               placeholder="email"
               value={data.email}
               onChange={handlechange}
               required
              />

        
            </FormGroup>

            
            <button className="btn btn-secondary  me-4 guardar"> Guardar</button>
         </form>
   
          
   </div>
   </Container>
   </div>
)
}
export default NewContact;
      
         