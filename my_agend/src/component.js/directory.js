import React from 'react'

const ListDirectory = ({ detalhes_courses, setcourseUpdated, course, setCourse }) => {

    const handleDelete = idCourse => {

        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:9000/contatos/' + idCourse, requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        setcourseUpdated(true)
    }

    let { nome, telefone, email} = course
    const handleUpdate = idCourse => {


        //validacion de los inputs
        
        if (nome === '' || telefone === '' || email === '') {
            alert('Toda la informacion es obligatoria')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(course)
        }

        fetch(' http://localhost:9000/contatos' + idCourse, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        //reiniciar el state
        setCourse({
            nome: '',
            telefone: '',
            email: '',
            

        })

        setcourseUpdated(true)
    }



    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID </th>
                    <th>Nome do Usuario</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    </tr>
            </thead>
            <tbody>
                {detalhes_courses.map(course => (
                    <tr key={course.idCourse}>
                        <td>{course.nome}</td>
                        <td>{course.email}</td>
                        <td>{course.telefone}</td>
                      
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(course.idCourse)} className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(course.idCourse)} className='btn btn-dark'>Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListDirectory;
