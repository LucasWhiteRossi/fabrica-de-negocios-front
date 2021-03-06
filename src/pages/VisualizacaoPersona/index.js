import { api } from "../../api/api"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import {useParams} from 'react-router-dom'
import { CandyCard } from "../../components/CandyCard";

export function VisualizacaoPersona(){

    const params = useParams();
    const [data, setData] = useState({});
    const [impressao, setImpressao] = useState({
        imagem: "",
		nome: "",
		idade: "",
        declarado: "",
        vestimenta: "",
        identificacao: "",
        escolaridade: "",
        filhos: "",
        "moradia-caracteristicas": "",
        hobby: "",
        ocupacao: "",
        renda: "",
        historia: "",
        "local-compras": "",
        comportamento: "",
        "lojas-preferidas": "",
        influenciador: "",
        "influenciadores-famosos": "",
        pesquisa: "",
        "meio-comunicacao": "",
        desafios: "",
        objecoes: "",
        oportunidades: "",
        "papel-persona": "",
        informacoesAdicionais: "",
    });

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/persona/personas/${params.id}`)
            setData(response.data);
        }
        fetchData()
    },[]);
    
    
    useEffect(() => {
        setImpressao(data);
    },[data]);

    
    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>

        <h1 className="text-center" style={{color:"white"}}>MINHA PERSONA</h1>

        <div className="d-flex justify-content-center align-items-center">
            
            <CandyCard className="justify-content-center align-items-center" style={{width: "48rem", borderRadius: "30px"}} >
            
                <div className='d-flex justify-content-center align-items-center rounded p-5' >

                    {impressao.imagem && <img className="rounded" style={{width:"0.5el", height:"auto"}} src={require(`../../assets/avatars/${impressao.imagem}.jpg`)} alt={`${impressao.imagem}.jpg`}/>}
                </div>

                <div className="d-flex align-items-center justify-content-center p-5">
                    <div>
                        <h2 className="text-center" style={{color:"#631354"}}>Caracter??sticas Gerais</h2>
                        <br></br>
                        <h4><strong>Nome: </strong>{impressao.nome}</h4>
                        <h5><strong>Idade: </strong>{impressao.idade}</h5>
                        <p><strong>Sexualidade: </strong>{impressao.declarado}</p>
                        <p><strong>Vestimenta: </strong>{impressao.vestimenta}</p>
                        <p><strong>Identifica????o com grupos: </strong>{impressao.identificacao}</p>
                        <p><strong>Escolaridade: </strong>{impressao.escolaridade}</p>
                        <p><strong>Filhos: </strong>{impressao.filhos}</p>
                        <p><strong>Moradia: </strong>{impressao["moradia-caracteristicas"]}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Gostos e Atividades</h2>
                        <p><strong>Hobby: </strong>{impressao.hobby}</p>
                        <p><strong>Ocupa????o: </strong>{impressao.ocupacao}</p>
                        <p><strong>Renda: </strong>{impressao.renda}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Hist??ria pessoal</h2>
                        <p>{impressao.historia}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Comportamento de Compra</h2>
                        <p><strong>Prefere comprar em: </strong>{impressao["local-compras"]}</p>
                        <p><strong>Comportamento de compra: </strong>{impressao.comportamento}</p>
                        <p><strong>Lojas preferidas: </strong>{impressao["lojas-preferidas"]}</p>
                        <p><strong>Sofre influ??ncia de: </strong>{impressao.influenciador}</p>
                        <p><strong>Segue os influenciadores: </strong>{impressao["influenciadores-famosos"]}</p>
                        <p><strong>Busca as seguintes informa????es antes de uma decis??o de compra: </strong>{impressao.pesquisa}</p>
                        <p><strong>Meios de comunica????o que segue: </strong>{impressao["meio-comunicacao"]}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Intera????o com Produto</h2>
                        <p><strong>Desafios que vive: </strong>{impressao.desafios}</p>
                        <p><strong>Obje????es ao produto: </strong>{impressao.objecoes}</p>
                        <p><strong>Oportunidades no uso do produto: </strong>{impressao.oportunidades}</p>
                        <h2 className="text-center" style={{color:"#631354"}}>Tomador de decis??o</h2>
                        <p><strong>Papel na tomada de decis??o: </strong>{impressao["papel-persona"]}</p>
                        <br></br>

                        <h2 className="text-center" style={{color:"#631354"}}>Informa????es Adicionais</h2>
                        <br></br>
                        <p>{impressao.informacoesAdicionais}</p>
                        <br></br>

                        <Link to={`/edit-persona/${impressao._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Editar</Link>
                    </div>
                
                </div>
            </CandyCard>
            </div>
        </div>
        </>
    );
}