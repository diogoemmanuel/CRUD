import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEstoque(){
    const [nome,setNome] = useState('')
    const [modelo,setModelo] = useState('')
    const [patrimonio,setPatrimonio] = useState('')
    const [entrada,setEntrada] = useState('')
    const [saida,setSaida] = useState('')
    const [local,setLocal] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create', {nome,modelo,patrimonio,entrada,saida,local})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err))
    }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">

             <div className="w-50 bg-white rounded p-3">

                <form onSubmit={handleSubmit}>
                    <h2>Insira o produto</h2>
                    <div className="mb-2">
                       
                       <label htmlFor="">Nome</label>
                       <input type="text" placeholder="Enter Nome" className="form-control" onChange={e => setNome(e.target.value)}/>
                        

                    </div>

                    <div className="mb-2">
                       
                       <label htmlFor="">Modelo</label>
                       <input type="text" placeholder="Enter Modelo" className="form-control" onChange={e => setModelo(e.target.value)}  />
                       

                    </div>

                    <div className="mb-2">
                       
                       <label htmlFor="">Patrimônio</label>
                       <input type="text" placeholder="Enter Patrimonio" className="form-control" onChange={e => setPatrimonio(e.target.value)}/>
                       

                    </div>

                    <div className="mb-2">
                       
                       <label htmlFor="">Entrada</label>
                       <input type="text" placeholder="Enter Entrada" className="form-control" onChange={e => setEntrada(e.target.value)}/>
                       

                    </div>

                    <div className="mb-2">
                       
                       <label htmlFor="">Saída</label>
                       <input type="text" placeholder="Enter Saída" className="form-control" onChange={e => setSaida(e.target.value)} />
                        

                    </div>

                    <div className="mb-2">
                       
                       <label htmlFor="">Local</label>
                       <input type="text" placeholder="Enter Local" className="form-control" onChange={e => setLocal(e.target.value)} />
                       

                       

                    </div>
                    <button className="btn btn-success"> Submit</button>

                </form>


             </div>

        </div>
    )
}
export default CreateEstoque