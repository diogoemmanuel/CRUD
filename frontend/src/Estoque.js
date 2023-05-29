import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


function Estoque() {

    const [estoque, setEstoque] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setEstoque(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>

            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>

                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Modelo</th>
                            <th>Patrimônio</th>
                            <th>Entrada</th>
                            <th>Saída</th>
                            <th>Local</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            estoque.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.nome}</td>
                                    <td>{data.modelo}</td>
                                    <td>{data.patrimonio}</td>
                                    <td>{data.entrada}</td>
                                    <td>{data.saida}</td>
                                    <td>{data.local}</td>
                                    <td>
                                    <button className='btn btn-primary'>Editar</button>
                                    <button className='btn btn-danger ms-2'>Excluir</button>
                                    </td>

                                </tr>
                            ))
                        }





                    </tbody>

                </table>


            </div>


        </div>
    )
}

export default Estoque