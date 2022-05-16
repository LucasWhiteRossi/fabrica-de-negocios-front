import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';


export function Personas(){
   
    const [data, setData] = useState([]);
    const [persona, setPersona] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get('https://ironrest.herokuapp.com/fabricapersona')
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
         setPersona(data);
    },[data]);

    async function handleDelete(id) {
        await axios.delete(
        `https://ironrest.herokuapp.com/fabricapersona/${id}`
        );
        let deletado = persona.filter((obj) => {
            return obj._id !== id 
        });
        setPersona(deletado);
    }
    
    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1 className="text-center" style={{color:"white"}}>PERSONAS CONSTRUÍDAS</h1>
        {persona.map((currentPersona) => {
            return (
            <>
            <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-start rounded m-2" style={{width: "48rem", backgroundColor:"rgba(255,255,255,0.7)", borderRadius: "30px"}} >
                    <div className='d-flex justify-content-start align-items-center rounded p-5' >
                        <img className="rounded" style={{width:"0.5el", height:"auto"}} src={require(`../../assets/avatars/${currentPersona.imagem}.jpg`)} alt={`${currentPersona.imagem}.jpg`}/>
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-5">
                        <div>
                            <h5 className="card-title" style={{color:"#631354"}}>{currentPersona.nome}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{currentPersona.idade}</h6>
                            <p className="card-text">{currentPersona.historia.length<300?`${currentPersona.historia}`:`${currentPersona.historia.slice(0,300)} ...`}</p>
                            <Link to={`/impressao/${currentPersona._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Visualizar</Link>
                            <Link to={`/personas/${currentPersona._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Editar</Link>
                            <button className="btn btn-danger m-2" onClick={()=>handleDelete(currentPersona._id)}>Apagar</button>
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