import React, { Fragment, useEffect, useState } from 'react';
import ListDirectory from './component.js/directory';
import Form from './component.js/formUsuario';
import Navbar from './component.js/Navbar';





function App() {

  //Conexion bd courses
  const [detalhes_courses, setCourses] = useState([])
  const [courseUpdated, setcourseUpdated] = useState(false);

  const [course, setCourse] = useState({
    nome: '',
    telefone: '',
    email: '',
   

  });

  useEffect(() => {
    const getCourses = () => {
      fetch(' http://localhost:9000/contatos')
        .then(res => res.json())
        .then(res => setCourses(res))
    }
    getCourses()
    setcourseUpdated(false)
  }, [courseUpdated]);

 

  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: "center" }}>Lista de Usuario</h2>
            <ListDirectory setCourse={setCourse} course={course} detalhes_courses={detalhes_courses} setcourseUpdated={setcourseUpdated} />
          </div>
          <div className='col-5'>
            <h2 style={{ textAlign: "center" }}>Incluir Usuario</h2>
            <Form course={course} setCourse={setCourse} />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
