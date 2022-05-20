import { api } from "../../api/api"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { CandyCard } from "../../components/CandyCard";

export function CardsPersonas(){

    const [data, setData] = useState([]);
    const [persona, setPersona] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            const response = await api.get('/persona/personas')
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
        setPersona(data);
        setIsLoading(false);
    },[data]);

    async function handleDelete(id) {
        await api.delete(
        `/persona/deletar-persona/${id}`
        );
        let deletado = persona.filter((obj) => {
            return obj._id !== id 
        });
        setPersona(deletado);
    }
    
    return (
        <>
        <Navbar />
        {!isLoading && (
        <>
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>

        <h1 className="text-center" style={{color:"white"}}>PERSONAS</h1>

            <div className="d-flex justify-content-center align-items-center">
            <br></br>
            <Link to="/cadastro-persona" className="btn btn-primary m-2 rounded">CRIAR NOVA PERSONA</Link>
            <br></br>
            </div>

        {persona.map((currentPersona) => {
            return (
            <>
            <div className="d-flex justify-content-center align-items-center">
                <CandyCard noCard={true} className="d-flex justify-content-start flex-row rounded m-2" style={{width: "100%", borderRadius: "30px", flexDirection:"row"}} >
                    {
                        currentPersona.imagem && (
                            <div className='d-flex justify-content-start align-items-center rounded p-5' >
                                <img className="rounded" style={{width:"0.5el", height:"auto"}} src={require(`../../assets/avatars/${currentPersona.imagem}.jpg`)} alt={`${currentPersona.imagem}.jpg`}/>
                            </div>
                        )
                    }
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <div>
                            <h5 className="card-title" style={{color:"#631354"}}>{currentPersona.nome}</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{color:"#1e1d1d"}}>{currentPersona.idade}</h6>
                            {currentPersona.historia &&(<p className="card-text">{currentPersona.historia.length<300?`${currentPersona.historia}`:`${currentPersona.historia.slice(0,300)} ...`}</p>)}
                            <Link to={`/visualizacao-persona/${currentPersona._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Visualizar</Link>
                            <Link to={`/edit-persona/${currentPersona._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Editar</Link>
                            <button className="btn btn-danger m-2" onClick={()=>handleDelete(currentPersona._id)}>Apagar</button>
                        </div>
                    </div>
                </CandyCard>
            </div>
            </>
        ) 
        })}
        </div>
        </>

        )}
        { 
        isLoading && <h1>Carregando</h1>
        }
        </>
    );
}