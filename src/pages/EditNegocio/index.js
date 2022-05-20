import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { api } from "../../api/api"
import { useNavigate, useParams, Link } from 'react-router-dom';

export function EditNegocio(){

    const params = useParams();
    const navigate = useNavigate();
    
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [userLoad, setUserLoad] = useState(true);
    const [changeConnection, setChangeConnection] = useState(true);
    const [form, setForm] = useState({
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
        informacoesAdicionais: "",
    });
    
    useEffect(() => {
        async function fetchEdit() {
            const response = await api.get(
            `/modelo-negocio/negocios/${params.id}`
            );
            setData({...response.data});
        }
        fetchEdit();
    },[]);

    useEffect(() => {
        async function fetchUser() {
            const response = await api.get(
            `/user/profile`
            );
            setUser({...response.data});
            setUserLoad(false);
            setChangeConnection(true)
        }
        fetchUser();
    },[changeConnection]);

    useEffect(() => {
        setForm(data)
        console.log(data)
    }, [data]);

    function handleChange(event){
        setForm({...form,[event.target.name]: event.target.value});
    }
    
    function handleConfirm(event){
        event.preventDefault();
        event.preventDefault();
        const editObj = {...form};
        delete editObj._id;
    
        api.put(`/modelo-negocio/editar-negocio/${params.id}`, editObj);
        navigate("/gerenciar-negocio");
        }

        async function handleConnect(event){
            try{
                await api.patch(`/persona/vincular-persona/${event}/${params.id}`);
                setChangeConnection(false);
            } catch(error){
                console.log(error)
            }
        }

        async function handleDisconnect(event){
            try{
                await api.patch(`/persona/desvincular-persona/${event}/${params.id}`);
                setChangeConnection(false)
            } catch(error){
                console.log(error)
            }
        }

    
        return (
            <>
            <Navbar />
            <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
            <h1 className="text-center" style={{color:"black"}}>EDITAR MODELO DE NEGÓCIO</h1>
                <br></br>
                    <h2 className="text-center" style={{color:"#631354"}}>Vincular Persona</h2>
                <br></br>
            
            {!userLoad && user.vinculoPersona.filter((currentPersona)=>{return currentPersona.vinculoNegocio!==params.id}).map((currentPersona) => {
                    return (<>
                    {currentPersona && <h1>{currentPersona.nome}</h1>}
                    <button onClick={()=>handleConnect(currentPersona._id)} className="btn btn-primary">Vincular</button>
                    <Link to={`/visualizacao-persona/${currentPersona._id}`} className="btn btn-primary">Visualizar</Link>
                    </>)
                })}
            
                <br></br>
                    <h2 className="text-center" style={{color:"#631354"}}>Personas Vinculadas</h2>
                <br></br>
            {!userLoad && user.vinculoPersona.filter((currentPersona)=>{return currentPersona.vinculoNegocio===params.id}).map((currentPersona) => {
                    return (<>
                    {currentPersona && <h1>{currentPersona.nome}</h1>}
                    <button onClick={()=>handleDisconnect(currentPersona._id)} className="btn btn-danger">Desvincular</button>
                    <Link to={`/visualizacao-persona/${currentPersona._id}`} className="btn btn-primary">Visualizar</Link>
                    </>)
                })}
            
            <div className="card p-3" style={{backgroundColor:"rgba(102, 16, 242,0.5)"}}>
            <form onSubmit={handleConfirm}>

    
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Proposta de valor:</h2>
                <br></br>
    
                <div class="mb-3">
                    <label for="beneficio" class="form-label">Que <strong>benefício</strong> sua solução entregará aos clientes?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="beneficio" 
                    value={form.beneficio}
                    name="beneficio"
                    onChange={handleChange} 
                    />
                </div> 
    
                <div className="mb-3">
                    <label for="solucao" className="form-label">Qual <strong>problema</strong> você está ajudando a resolver?</label>
                    <input 
                    type="text"
                    className="form-control" 
                    id="solucao" 
                    value={form.solucao}
                    name="solucao"
                    onChange={handleChange} 
                    />
                </div>  
        
                <div className="mb-3">
                    <label for="produtos" className="form-label">Que tipo de <strong>produtos/serviços</strong> estará oferecendo para cada segmento de clientes? </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="produtos" 
                    value={form.produtos}
                    name="produtos"
                    onChange={handleChange} 
                    />
                </div>  
    
                <div className="mb-3">
                    <label for="necessidades" className="form-label"> Quais <strong>necessidades</strong> dos seus clientes serão satisfeitas?"</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="necessidades" 
                    value={form.necessidades}
                    name="necessidades"
                    onChange={handleChange} 
                    />
                </div> 
    
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Segmento de clientes:</h2>
                <br></br>
    
                <div className="mb-3">
                    <label for="solucaoValor" className="form-label">Para quem a sua <strong>solução</strong> estará criando valor?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="solucaoValor" 
                    value={form.solucaoValor}
                    name="solucaoValor"
                    onChange={handleChange} 
                    />
                </div> 
    
                <div className="mb-3">
                    <label for="clientes" className="form-label">Quem são seus <strong>clientes</strong> mais importantes?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="clientes" 
                    value={form.clientes}
                    name="clientes"
                    onChange={handleChange} 
                    />
                </div>
    
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Relacionamento com clientes:</h2>
                <br></br>
    
    
                <div className="mb-3">
                    <label for="canais" className="form-label">Quais os <strong>canais de comunicação</strong> (mídias, telefone, e-mail, propaganda, ligação direta, conversa presencial ou o que mais você pensar) que você pretende manter com seu cliente?</label>
                    <input  
                    type="text"
                    className="form-control" 
                    id="canais" 
                    value={form.canais}
                    name="canais"
                    onChange={handleChange} 
                    />
                </div>
    
                <div className="mb-3">
                    <label for="contatos" className="form-label">Em que momentos estes <strong>contatos</strong> precisam acontecer? E por quais motivos. Por exemplo, pense em momentos em que você precisa entrar em contato para fazer a venda, ou acompanhar a instalação de algo, ou garantir uma boa experiência, ou receber um feedback para melhorar o produto.
                    </label>
                    <textarea  
                    type="text"
                    className="form-control" 
                    id="contatos" 
                    value={form.hobby}
                    name="contatos"
                    onChange={handleChange} 
                    ></textarea>
                </div> 
    
                <div className="mb-3">
                    <label for="contatosEstabelecidos" className="form-label">Quais já foram <strong>estabelecidos</strong>?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="contatosEstabelecidos" 
                    value={form.contatosEstabelecidos}
                    name="contatosEstabelecidos"
                    onChange={handleChange} 
                    />
                </div> 
            
    
                <div className="mb-3">
                    <label for="custoRelacionamento" className="form-label">Qual o <strong>custo</strong> desses relacionamentos?</label>
                    <textarea  
                    type="text"
                    className="form-control" 
                    id="custoRelacionamento" 
                    value={form.custoRelacionamento}
                    name="custoRelacionamento"
                    onChange={handleChange} 
                    ></textarea>
                </div> 
    
        
    
                <div className="mb-3">
                    <label for="relacionamentoEficiente" className="form-label">Quais são mais <strong>eficientes</strong>?</label>
                    <input
                    type="text"
                    className="form-control" 
                    id="relacionamentoEficiente" 
                    value={form.relacionamentoEficiente}
                    name="relacionamentoEficiente"
                    onChange={handleChange} 
                    />
                </div> 
    
                <div className="mb-3">
                    <label for="lojas-preferidasCadastro" className="form-label"><strong>Em que lojas</strong> sua persona costuma comprar:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="lojas-preferidasCadastro" 
                    value={form["lojas-preferidas"]}
                    name="lojas-preferidas"
                    onChange={handleChange} 
                    />
                </div>
                
                <div className="mb-3">
                    <label for="relacionamentoRotina:" className="form-label">Como estão <strong>integrados</strong> com a rotina dos clientes?</label>
                    <textarea  
                    type="text"
                    className="form-control" 
                    id="relacionamentoRotina:" 
                    value={form.relacionamentoRotina}
                    name="relacionamentoRotina:"
                    onChange={handleChange} 
                    ></textarea>
                </div> 
                
                <br></br>
                    <h2 className="text-center" style={{color:"#631354"}}>Canais de Entrega:</h2>
                <br></br>
    
                <div className="mb-3">
                    <label for="entrega" className="form-label">Quais os <strong>meios de entrega</strong> do seu produto ou serviço? 
                    Exemplo: Seu produto será empacotado e enviado usando algum serviço de logística ou armazenamento? Ou poderá ser retirado de forma gratuita diretamente na loja física? Ou ainda: seu produto é uma aula ao vivo com interação direta com o público? Ou é um curso gravado e usará uma determinada plataforma para acesso?
                    </label>
                    <textarea 
                    type="text" 
                    className="form-control" 
                    id="entrega" 
                    value={form.entrega}
                    name="entrega"
                    onChange={handleChange} 
                    ></textarea>
                </div>
    
                <div className="mb-3">
                    <label for="tipoEntrega" className="form-label">O produto será entregue<strong> pessoalmente</strong> ou com algum nível de <strong>personalização</strong>? Exemplo: entrega gratuita dentro de um raio de 15 km da empresa. Ou contará com um cartão de agradecimento escrito à mão?
                    O que acontece se o canal principal de entrega falhar? Existem planos B ou garantias de que o canal principal não vai falhar? 
                    </label>
                    <textarea 
                    type="text" 
                    className="form-control" 
                    id="tipoEntrega" 
                    value={form.tipoEntrega}
                    name="tipoEntrega"
                    onChange={handleChange} 
                    ></textarea>
                </div>
    
                <div className="mb-3">
                    <label for="meio-comunicacaoCadastro" className="form-label">Que <strong>meios de comunicação</strong> influenciam sua persona? Ela vê televisão? Lê jornal ou revistas? Acompanha algum canal online? Quais?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="meio-comunicacaoCadastro" 
                    value={form["meio-comunicacao"]}
                    name="meio-comunicacao"
                    onChange={handleChange} 
                    />
                </div>
    
                    <br></br>
                    <h2 className="text-center" style={{color:"#631354"}}>Fontes de Receitas:</h2>
                    <br></br>
    
                <div className="mb-3">
                    <label for="clientePronto" className="form-label">Quais dos seus produtos os <strong>clientes</strong> estão realmente prontos para comprar?</label>
                    <textarea  
                    type="text"
                    className="form-control" 
                    id="clientePronto" 
                    value={form.clientePronto}
                    name="clientePronto"
                    onChange={handleChange} 
                    ></textarea>
                </div>
    
                <div className="mb-3">
                    <label for="pagamento" className="form-label">Como será a forma de <strong>pagamento</strong> pelas compras?</label>
                    <textarea  
                    type="text"
                    className="form-control" 
                    id="pagamento" 
                    value={form.pagamento}
                    name="pagamento"
                    onChange={handleChange} 
                    ></textarea>
                </div>
    
    
                <div className="mb-3">
                    <label for="maiorLucro" className="form-label"> Destes produtos, quais são os <strong>mais importantes</strong>? Quais trazem maior <strong>lucro</strong>?</label>
                    <textarea  
                    type="text"
                    className="form-control" 
                    id="maiorLucro" 
                    value={form.maiorLucro}
                    name="maiorLucro"
                    onChange={handleChange} 
                    ></textarea>
                </div>
    
                <div className="mb-3">
                    <label for="menorLucro" className="form-label">Existem outros produtos que, apesar de não darem lucro, são importantes para a sua estratégia de <strong>marketing</strong> ou <strong>relacionamento</strong>? </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="menorLucro" 
                    value={form.menorLucro}
                    name="menorLucro"
                    onChange={handleChange} 
                    />
                </div>
    
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Atividades Principais:</h2>
                <br></br>
    
                <div className="mb-3">
                    <label for="atividades" className="form-label">Quais <strong>atividades principais</strong> serão realizadas para a concretização da proposta de valor?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="atividades" 
                    value={form.atividades}
                    name="atividades"
                    onChange={handleChange} 
                    />
                </div>
    
                <div className="mb-3">
                    <label for="outrasAtividades" className="form-label">Quais <strong>outras atividades</strong> principais serão realizadas para a execução, para o relacionamento com clientes e para a geração de receitas?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="outrasAtividades" 
                    value={form.outrasAtividades}
                    name="outrasAtividades"
                    onChange={handleChange} 
                    />
                </div>
    
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Recursos:</h2>
                <br></br>
    
    
                <div className="mb-3">
                    <label for="recursos" className="form-label">Quais <strong>recursos</strong> serão necessários para a concretização da proposta de valor?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="recursos" 
                    value={form.recursos}
                    name="recursos"
                    onChange={handleChange} 
                    />
                </div>
    
                <div className="mb-3">
                    <label for="outrosRecursos" className="form-label">Quais <strong>outros recursos</strong> serão demandados pelos canais de distribuição, para relacionamento com clientes e para a geração de receitas?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="outrosRecursos" 
                    value={form.outrosRecursos}
                    name="outrosRecursos"
                    onChange={handleChange} 
                    />
                </div>
    
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Parceiros:</h2>
                <br></br>
    
    
                <div className="mb-3">
                    <label for="parceiros" className="form-label">Quem são os <strong>parceiros</strong>?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="parceiros" 
                    value={form.parceiros}
                    name="parceiros"
                    onChange={handleChange} 
                    />
                </div>
    
                <div className="mb-3">
                    <label for="fornecedores" className="form-label"> Quem são os <strong>fornecedores</strong>?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="fornecedores" 
                    value={form.fornecedores}
                    name="fornecedores"
                    onChange={handleChange} 
                    />
                </div>
    
                <div className="mb-3">
                    <label for="recursosParceiros" className="form-label"> Que <strong>recursos</strong> serão adquiridos dos parceiros?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="recursosParceiros" 
                    value={form.recursosParceiros}
                    name="recursosParceiros"
                    onChange={handleChange} 
                    />
                </div>
    
    
    
                <div className="mb-3">
                    <label for="atividadesParceiros" className="form-label"> Que <strong>atividades</strong> serão executadas pelos parceiros?
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="atividadesParceiros" 
                    value={form.atividadesParceiros}
                    name="atividadesParceiros"
                    onChange={handleChange} 
                    />
                </div>
    
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Estrutura de Curso:</h2>
                <br></br>
    
    
                <div className="mb-3">
                    <label for="custoRelevante" className="form-label"> Quais são os <strong>custos mais relevantes</strong> no modelo de negócio planejado?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="custoRelevante" 
                    value={form.custoRelevante}
                    name="custoRelevante"
                    onChange={handleChange} 
                    />
                </div>
    
                <div className="mb-3">
                    <label for="tipoRecurso" className="form-label"> Quais <strong>recursos</strong> são os mais caros? E os mais baratos?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="tipoRecurso" 
                    value={form.tipoRecurso}
                    name="tipoRecurso"
                    onChange={handleChange} 
                    />
                </div>
    
                <div className="mb-3">
                    <label for="despesasAtividades" className="form-label"> Quais <strong>atividades</strong> são as que mais geram despesas?</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="despesasAtividades" 
                    value={form.despesasAtividades}
                    name="despesasAtividades"
                    onChange={handleChange} 
                    />
                </div>

                <div className="mb-3">
                <label for="informacoesAdicionais" className="form-label"></label>
                <textarea
                type="text" 
                className="form-control" 
                id="informacoesAdicionais" 
                value={form.informacoesAdicionais}
                name="informacoesAdicionais"
                onChange={handleChange} 
                ></textarea>
            </div>
                    
                    <button type="submit" className="btn btn-primary">Atualizar Negócio</button>
                
                </form>
                </div>
            </div> 
            </>
        )
    }