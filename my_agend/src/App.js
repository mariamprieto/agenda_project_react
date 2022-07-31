import React, { Fragment } from 'react';
import ListDirectory from './component.js/directory';
import Form from './component.js/formUsuario';
import Navbar from './component.js/Navbar';





function App() {

 

  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: "center" }}>Lista de Usuario</h2>
            <ListDirectory />
          </div>
          <div className='col-5'>
            <h2 style={{ textAlign: "center" }}>Incluir Usuario</h2>
            <Form/>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
