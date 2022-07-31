import React from 'react';

const Form = () => {



    return (
        <form >
            <div className='mb-4'>
                <label htmlFor='nomeUsuario' className='form-label'>Nome do Usuario</label>
                <input name='nome' type='text' id='nomeUsuario' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='emailUsuario' className='form-label'>Email</label>
                <input name='email' type='text' id='emailUsuario' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='telefoneUsuario' className='form-label'>Telefone</label>
                <input name='telefone' type='text' id='telefoneUsuario' className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default Form;