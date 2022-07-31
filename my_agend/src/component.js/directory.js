import React from 'react'

const ListDirectory = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    
                    <th>Nome do Usuario</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    
                </tr>
            </thead>
            <tbody>
                
                <tr >
                       
                        <td></td>
                        <td></td>
                        <td></td>
                <td>
                        <div className='mb-3'>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </td>
                    <td>
                        <div className='mb-3'>
                            <button  className='btn btn-dark'>Update</button>
                        </div>
                    </td>
                </tr>
       
                
                 
            </tbody>
        </table>
    );
}

export default ListDirectory;
