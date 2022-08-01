import React,{ useEffect,useState}from "react";
import Api from "../services/API";
import CardContact from "./CardContact"
import { Container, Row } from "react-bootstrap";




    
const ListaDeContatos = () => {
  
  
  const getData = async () => {
    const response =  await Api.get('/contatos');
    return response;
  }

  const [state, setState] = useState([])
  const [updateState, setUpdateState] = useState(false)
 

 
    
  useEffect(() => {
        getData().then((response) => {
        setState(response.data);
        })
    }, [updateState])

    return(
       <Container className="mb-5">
        <Row> 
      {
        state.map((contatos,index) => {
            return(
               <CardContact
                 key={index}
                 contatos={contatos}
                 setUpdateState={setUpdateState}
                 updateState={updateState}
                

               />
            
               

            )
            
        }
        )
      }
         </Row>
         
       </Container>
    )
}
export default  ListaDeContatos;