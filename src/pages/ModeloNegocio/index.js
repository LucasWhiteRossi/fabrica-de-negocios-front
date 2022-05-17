import api from '../../api/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


export function ModeloNegocio(){
   
    const [data, setData] = useState([]);
    const [negocio, setNegocio] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get('/modelo-negocio')
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
         setNegocio(data);
    },[data]);

    async function handleDelete(id) {
        await api.delete(
        `/modelo-negocio/${id}`
        );
        let deletado = negocio.filter((obj) => {
            return obj._id !== id 
        });
        setNegocio(deletado);
    }
    
    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1 className="text-center" style={{color:"white"}}>MODELOS DE NEGÓCIOS CONSTRUÍDOS</h1>
        {negocio.map((currentNegocio) => {
            return (
            <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-start rounded m-2" style={{width: "48rem", backgroundColor:"rgba(255,255,255,0.7)", borderRadius: "30px"}} >
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <div>
                            <h5 className="card-title" style={{color:"#631354"}}>{currentNegocio.nome}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{currentPersona.produtos}</h6>
                            <p className="card-text">{currentNegocio.beneficio.length<300?`${currentNegocio.beneficio}`:`${currentNegocio.beneficio.slice(0,300)} ...`}</p>
                            <p className="card-text">{currentNegocio.solucao.length<300?`${currentNegocio.solucao}`:`${currentNegocio.solucao.slice(0,300)} ...`}</p>
                            <p className="card-text">{currentNegocio.solucaoValor.length<300?`${currentNegocio.solucaoValor}`:`${currentNegocio.solucaoValor.slice(0,300)} ...`}</p>
                            <Link to={`/impressao-negocio/${currentNegocio._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Visualizar</Link>
                            <Link to={`/modelo-negocio/${currentNegocio._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Editar</Link>
                            <button className="btn btn-danger m-2" onClick={()=>handleDelete(currentNegocio._id)}>Apagar</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) 
        })}
        </div>
        </>
    );
}