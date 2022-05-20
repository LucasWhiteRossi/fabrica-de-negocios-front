import { api } from '../../api/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { CandyCard } from '../../components/CandyCard';

export function CardsModeloNegocio(){

    const [data, setData] = useState([]);
    const [negocio, setNegocio] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get('/modelo-negocio/negocios')
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
        setNegocio(data);
    },[data]);

    async function handleDelete(id) {
        await api.delete(
        `/modelo-negocio/deletar-negocio/${id}`
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

        <Link to="/cadastro-modelo-negocio" className="btn btn-primary m-2 rounded">CRIAR NOVO MODELO DE NEGÓCIO</Link>

        <h1 className="text-center" style={{color:"white"}}>MODELOS DE NEGÓCIOS CONSTRUÍDOS</h1>
        {negocio.map((currentNegocio) => {
            return (
            <>
            <div className="d-flex justify-content-center align-items-center">
                <CandyCard className="d-flex justify-content-start rounded m-2" style={{width: "48rem", borderRadius: "30px", flexDirection:"row"}} >
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <div>
                            <h5 className="card-title" style={{color:"#631354"}}>{currentNegocio.nome}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{currentNegocio.produtos}</h6>
                            <p className="card-text">{currentNegocio.beneficio.length<300?`${currentNegocio.beneficio}`:`${currentNegocio.beneficio.slice(0,300)} ...`}</p>
                            <p className="card-text">{currentNegocio.solucao.length<300?`${currentNegocio.solucao}`:`${currentNegocio.solucao.slice(0,300)} ...`}</p>
                            <p className="card-text">{currentNegocio.solucaoValor.length<300?`${currentNegocio.solucaoValor}`:`${currentNegocio.solucaoValor.slice(0,300)} ...`}</p>
                            <Link to={`/visualizacao-negocio/${currentNegocio._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Visualizar</Link>
                            <Link to={`/edit-modelo-negocio/${currentNegocio._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Editar</Link>
                            <button className="btn btn-danger m-2" onClick={()=>handleDelete(currentNegocio._id)}>Apagar</button>
                        </div>
                    </div>
                </CandyCard>
            </div>
            </>
        ) 
        })}
        </div>
        </>
    );
}