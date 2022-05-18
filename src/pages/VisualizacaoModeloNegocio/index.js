import { api } from "../../api/api"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import {useParams} from 'react-router-dom'

export function VisualizacaoModeloNegocio(){

    const params = useParams();
    const [data, setData] = useState({});
    const [impressao, setImpressao] = useState({
        nome: "",
        beneficio: "",
        solucao: "",
        produtos: "",
        necessidades: "",
        solucaoValor: "",
        clientes: "",
        canais: "",
        contatos: "",
        contatosEstabelecidos: "",
        custoRelacionamento: "",
        relacionamentoEficiente: "",
        relacionamentoRotina: "",
        entrega: "",
        tipoEntrega: "",
        clientePronto: "",
        pagamento: "",
        maiorLucro: "",
        menorLucro: "",
        atividades: "",
        outrasAtividades: "",
        recursos: "",
        outrosRecursos: "",
        parceiros: "",
        fornecedores: "",
        recursosParceiros: "",
        atividadesParceiros: "",
        custoRelevante: "",
        tipoRecurso: "",
        despesasAtividades: "",
    });

    useEffect(() => {
        async function fetchData(){
            const response = await api.get(`/modelo-negocio/negocios/${params.id}`)
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

        <h1 className="text-center" style={{color:"white"}}>Modelo de Negócio</h1>

        <div className="d-flex justify-content-center align-items-center">
            
            <div className="justify-content-center align-items-center" style={{width: "48rem", backgroundColor:"rgba(255,255,255,0.7)", borderRadius: "30px"}} >
            

                <div className="d-flex align-items-center justify-content-center p-5">
                    <div>

                        <h2 className="text-center" style={{color:"#631354"}}>Proposta de Valor</h2>
                        <br></br>
                        <h4><strong>Nome do negócio: </strong>{impressao.nome}</h4>
                        <h5><strong>Benefício: </strong>{impressao.beneficio}</h5>
                        <p><strong>Solução: </strong>{impressao.solucao}</p>
                        <p><strong>Produtos: </strong>{impressao.produtos}</p>
                        <p><strong>Necessidades: </strong>{impressao.necessidades}</p>

                        <h2 className="text-center" style={{color:"#631354"}}>Segmento de clientes</h2>
                        <br></br>
                        <p><strong>Valor: </strong>{impressao.solucaoValor}</p>
                        <p><strong>Clientes: </strong>{impressao.clientes}</p>

                        <h2 className="text-center" style={{color:"#631354"}}>Relacionamento com clientes</h2>
                        <br></br>
                        <p><strong>Canais: </strong>{impressao.canais}</p>
                        <p><strong>Contatos: </strong>{impressao.contatos}</p>
                        <p><strong>Contatos já estabelecidos: </strong>{impressao.contatosEstabelecidos}</p>
                        <p><strong>Custo desse relacionamento: </strong>{impressao.custoRelacionamento}</p>
                        <p><strong>Relacionamentos mais eficientes: </strong>{impressao.relacionamentoEficiente}</p>
                        <p><strong>Relacionamentos integrado com a rotina: </strong>{impressao.relacionamentoRotina}</p>
                        
                        <h2 className="text-center" style={{color:"#631354"}}>Canais de Entrega</h2>
                        <br></br>
                        <p><strong>Meios de entrega: </strong>{impressao.entrega}</p>
                        <p><strong>Forma de entrega: </strong>{impressao.tipoEntrega}</p>

                        <h2 className="text-center" style={{color:"#631354"}}>Fontes de receitas</h2>
                        <br></br>
                        <p><strong>Produtos que o seu cliente está pronto para comprar: </strong>{impressao.clientePronto}</p>
                        <p><strong>Forma de pagamento: </strong>{impressao.pagamento}</p>
                        <p><strong>Produtos mais importantes e com maior lucro: </strong>{impressao.maiorLucro}</p>
                        <p><strong>Produtos importantes para a sua estratégia de marketing: </strong>{impressao.menorLucro}</p>
                        
                        <h2 className="text-center" style={{color:"#631354"}}>Atividades principal</h2>
                        <br></br>
                        <p><strong>Principais atividades: </strong>{impressao.atividades}</p>
                        <p><strong>Atividades que irão gerar relacionamento com o cliente: </strong>{impressao.outrasAtividades}</p>

                        <h2 className="text-center" style={{color:"#631354"}}>Recursos</h2>
                        <br></br>
                        <p><strong>Recursos: </strong>{impressao.recursos}</p>
                        <p><strong>Recursos para gerar relacionamento com o cliente: </strong>{impressao.outrosRecursos}</p>

                        <h2 className="text-center" style={{color:"#631354"}}>Parceiros</h2>
                        <br></br>
                        <p><strong>Parceiros: </strong>{impressao.parceiros}</p>
                        <p><strong>Fornecedores: </strong>{impressao.fornecedores}</p>
                        <p><strong>Recursos adquiridos: </strong>{impressao.recursosParceiros}</p>
                        <p><strong>Atividades executadas pelos parceiros: </strong>{impressao.atividadesParceiros}</p>

                        <h2 className="text-center" style={{color:"#631354"}}>Estrutura de custos</h2>
                        <br></br>
                        <p><strong>Custos mais relevantes: </strong>{impressao.custoRelevante}</p>
                        <p><strong>Recursos mais caros e mais baratos: </strong>{impressao.tipoRecurso}</p>
                        <p><strong>Atividades que geram mais despesas: </strong>{impressao.despesasAtividades}</p>
                        <br></br>
                        <Link to={`/edit-modelo-negocio/${impressao._id}`} className="btn m-2" style={{backgroundColor:"#631354", color:"white"}}>Editar</Link>
                    </div>
                
                </div>
            </div>

            </div>
       
        </div>
        </>
    );
}







