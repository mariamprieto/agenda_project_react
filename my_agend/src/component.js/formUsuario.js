import React from 'react';

const Form = ({ course, setCourse }) => {

    const changeHandler = e => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })

    }

    let { nome, telefone, email} = course

    const onSubmit = () => {
        //validacion de los inputs
       
        if (nome === '' || telefone === '' || email === '' ) {
            alert('Toda la informacion es obligatoria')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(course)
        }

        fetch(' http://localhost:9000/contatos', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

        //reiniciar el state
        setCourse({
            nome: '',
            telefone: '',
            email: '',
        })

    }


    return (
        <form onSubmit={onSubmit}>
            <div className='mb-4'>
                <label htmlFor='nomeCourse' className='form-label'>Nome do Usuario</label>
                <input value={nome} name='nome' onChange={changeHandler} type='text' id='nomeCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='duracaoCourse' className='form-label'>Telefone</label>
                <input value={telefone} name='telefone' onChange={changeHandler} type='text' id='duracaoCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='detalhesCourse' className='form-label'>Email</label>
                <input value={email} name='email' onChange={changeHandler} type='text' id='dethalesCourse' className='form-control' />
            </div>
           
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default Form;