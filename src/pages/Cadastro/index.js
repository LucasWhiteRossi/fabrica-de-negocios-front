import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AvatarSelector } from '../../components/AvatarSelector';


export function Cadastro(){

const navigate = useNavigate();

const [form, setForm] = useState({
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
        "papel-persona": ""	
});

function handleChange(event){
    setForm({...form,[event.target.name]: event.target.value});
}

function handleConfirm(){

    axios.post("https://ironrest.herokuapp.com/fabricapersona", form);
    navigate("/personas");
}

    return (
        <>
        <Navbar />
        <div style={{margin: "25px", padding: "0", boxSizing: "border-box"}}>
        <h1 className="text-center" style={{color:"white"}}>CONSTRUIR PERSONA</h1>
        
        <div className="card p-3" style={{backgroundColor:"rgba(255,255,255,0.5)", borderRadius: "20px"}}>
        
        {form.imagem && (<h2 className="text-center" style={{color:"#631354"}}>Foto atual</h2>)}
        {form.imagem && (<div className="d-flex justify-content-center">
                < img 
                    src={require(`../../assets/avatars/${form.imagem}.jpg`)}
                    alt={`${form.imagem}.jpg`}
                    style={{borderRadius:"30px", border:"5px solid white"}}    
                />
                <br></br>
                </div>)}
                
        
        
        <form onSubmit={handleConfirm}>
            
            <div className="mb-3">
                <br></br>
                <h2 className="text-center" style={{color:"#631354"}}>Escolha uma foto para a sua persona</h2>
                <br></br>
                <AvatarSelector name="imagem" handleChange={handleChange}/>
            </div>
            <br></br>
            <h2 className="text-center" style={{color:"#631354"}}>Características Gerais</h2>
            <br></br>
            <div class="mb-3">
                <label for="nomeCadastro" class="form-label">Qual o <strong>nome</strong> de sua persona?</label>
                <input 
                type="text" 
                className="form-control" 
                id="nomeCadastro" 
                value={form.nome}
                name="nome"
                onChange={handleChange} 
                />
            </div> 
            <div className="mb-3">
                <label for="idadeCadastro" className="form-label">Qual a <strong>idade</strong> de sua persona?</label>
                <input 
                type="text"
                className="form-control" 
                id="idadeCadastro" 
                value={form.idade}
                name="idade"
                onChange={handleChange} 
                />
            </div>  
            <div className="mb-3">
            <label for="declaradoCadastro" className="form-label">Como sua persona <strong>se declara?</strong></label>
            <div className="input-group">
            <select 
                className="form-select block" 
                id="declaradoCadastro" 
                aria-label="Como sua persona se declara?"
                value={form.declarado}
                name="declarado"
                onChange={handleChange} 
                >
                <option selected>Selecione...</option>
                <option value="Heterosexual">Heterosexual</option>
                <option value="Lésbica">Lésbica</option>
                <option value="Gay">Gay</option>
                <option value="Bissexual">Bissexual</option>
                <option value="Transexual">Transexual</option>
                <option value="Travesti">Travesti</option>
                <option value="Transgênero">Transgênero</option>
                <option value="Queer">Queer</option>
                <option value="Intersexo">Intersexo</option>
                <option value="Assexual">Assexual</option>
                <option value="Agênero">Agênero</option>
                <option value="Arromântico">Arromântico</option>
                <option value="Pansexual">Pansexual</option>
                <option value="Outros">Outros</option>
            </select>
            </div>
            </div>
            
            <div className="mb-3">
                <label for="vestimentaCadastro" className="form-label">Como <strong>se veste</strong> a persona?</label>
                <input 
                type="text" 
                className="form-control" 
                id="declaradoCadastro" 
                value={form.vestimenta}
                name="vestimenta"
                onChange={handleChange} 
                />
            </div>  
            <div className="mb-3">
                <label for="identificacaoCadastro" className="form-label">Ela se identifica com quais <strong>grupos</strong>: esportivo, religioso, político, artístico ou alguma corrente de pensamento?"</label>
                <input 
                type="text" 
                className="form-control" 
                id="identificacaoCadastro" 
                value={form.identificacao}
                name="identificacao"
                onChange={handleChange} 
                />
            </div> 
            <div className="mb-3">
                <label for="escolaridadeCadastro" className="form-label">Qual o <strong>nível de escolaridade?</strong></label>
                <input 
                type="text" 
                className="form-control" 
                id="escolaridadeCadastro" 
                value={form.escolaridade}
                name="escolaridade"
                onChange={handleChange} 
                />
            </div> 

            <div className="mb-3">
                <label for="filhosCadastro" className="form-label">Sua persona tem <strong>filhos</strong>? Quantos e com que idades?</label>
                <input 
                type="text" 
                className="form-control" 
                id="filhosCadastro" 
                value={form.filhos}
                name="filhos"
                onChange={handleChange} 
                />
            </div>


            <div className="mb-3">
                <label for="moradia-caracteristicasCadastro" className="form-label">Quais são as principais características do <strong>lugar onde sua persona mora</strong>? E quais são os impactos deste lugar em termos de oportunidades e desafios?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="moradia-caracteristicasCadastro" 
                value={form["moradia-caracteristicas"]}
                name="moradia-caracteristicas"
                onChange={handleChange} 
                aria-label="With textarea"
                ></textarea>
            </div>
            <br></br>
            <h2 className="text-center" style={{color:"#631354"}}>Gostos e Atividades</h2>
            <br></br>
            <div className="mb-3">
                <label for="hobbyCadastro" className="form-label">Liste <strong>três</strong> coisas que <strong>mais gosta</strong> de fazer.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="hobbyCadastro" 
                value={form.hobby}
                name="hobby"
                onChange={handleChange} 
                ></textarea>
            </div> 

            <div className="mb-3">
                <label for="ocupacaoCadastro" className="form-label">Qual a <strong>ocupação</strong> da sua persona?</label>
                <input 
                type="text" 
                className="form-control" 
                id="ocupacaoCadastro" 
                value={form.ocupacao}
                name="ocupacao"
                onChange={handleChange} 
                />
            </div> 
        
            <div className="mb-3">
            <label for="rendaCadastro" className="form-label">Qual a <strong>renda mensal</strong> da sua persona?</label>
            <div className="input-group">
            <select 
                className="form-select block" 
                id="rendaCadastro" 
                value={form.renda}
                name="renda"
                onChange={handleChange} 
                >
                <option selected>Selecione...</option>
                <option value="Não possui renda">Não possui renda</option>
                <option value="Até R$ 1.500,00">Até R$ 1.500,00</option>
                <option value="De R$ 1.500,00 até R$ 5.000,00">De R$ 1.500,00 até R$ 5.000,00</option>
                <option value="De R$ 5.000,00 até R$ 10.000,00">De R$ 5.000,00 até R$ 10.000,00</option>
                <option value="Acima de R$ 10.000,00">Acima de R$ 10.000,00</option>
            </select>
            </div>
            </div> 
            <br></br>
            <h2 className="text-center" style={{color:"#631354"}}>História pessoal</h2>
            <br></br>
            <div className="mb-3">
                <label for="historiaCadastro" className="form-label">Quem é {form.name?form.name:"sua persona"} na fila do pão? Se quiser, descreva um pouco da história pessoal de {form.name?form.name:"sua persona"}.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="historiaCadastro" 
                value={form.historia}
                name="historia"
                onChange={handleChange} 
                ></textarea>
            </div> 
            <br></br>
            <h2 className="text-center" style={{color:"#631354"}}>Comportamento de Compra</h2>
            <br></br>
            <div className="mb-3">
            <label for="local-comprasCadastro" className="form-label"><strong>Onde</strong> sua persona costuma <strong>fazer compras</strong>: online ou presencialmente?</label>
            <div className="input-group">
            <select 
                className="form-select block" 
                id="local-comprasCadastro" 
                value={form["local-compras"]}
                name="local-compras"
                onChange={handleChange} 
                >
                <option selected>Selecione...</option>
                <option value="Loja virtual">Loja virtual</option>
                <option value="Loja física">Loja física</option>
            </select>
            </div>
            </div>

            <div className="mb-3">
                <label for="comportamentoCadastro" className="form-label">Como você descreveria o <strong>comportamento de compra</strong> de sua persona? Ela prefere comprar em mercados locais? Ela frequenta shoppings? Ela prefere lojas ou sites específicos? Ela evita algum tipo de loja ou experiência?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="comportamentoCadastro" 
                value={form.comportamento}
                name="comportamento"
                onChange={handleChange} 
                ></textarea>
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
                <label for="influenciadorCadastro" className="form-label">Que pessoas <strong>influenciam as decisões</strong> de sua persona? De que forma esta influência acontece?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="influenciadorCadastro" 
                value={form.influenciador}
                name="influenciador"
                onChange={handleChange} 
                ></textarea>
            </div> 

            <div className="mb-3">
                <label for="influenciadores-famososCadastro" className="form-label">Sua persona <strong>segue algum influenciador</strong>? Qual ou quais?</label>
                <input 
                type="text" 
                className="form-control" 
                id="influenciadores-famososCadastro" 
                value={form["influenciadores-famosos"]}
                name="influenciadores-famosos"
                onChange={handleChange} 
                />
            </div>
            <div className="mb-3">
                <label for="pesquisaCadastro" className="form-label">Que <strong>informações sua persona busca</strong> antes de realizar uma <strong>compra ou decisão</strong>? Onde ela busca estas informações?</label>
                <input 
                type="text" 
                className="form-control" 
                id="pesquisaCadastro" 
                value={form.pesquisa}
                name="pesquisa"
                onChange={handleChange} 
                />
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
            <h2 className="text-center" style={{color:"#631354"}}>Interação com Produto</h2>
            <br></br>
            <div className="mb-3">
                <label for="desafiosCadastro" className="form-label">Quais são os <strong>principais desafios</strong> que sua persona tem e que seu produto pode resolver?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="desafiosCadastro" 
                value={form.desafios}
                name="desafios"
                onChange={handleChange} 
                ></textarea>
            </div>

            <div className="mb-3">
                <label for="objecoesCadastro" className="form-label">Quais são as <strong>maiores objeções</strong> que sua persona pode ter com relação ao seu produto?</label>
                <textarea  
                type="text"
                className="form-control" 
                id="objecoesCadastro" 
                value={form.objecoes}
                name="objecoes"
                onChange={handleChange} 
                ></textarea>
            </div>
            <div className="mb-3">
                <label for="oportunidadesCadastro" className="form-label">Quais as <strong>principais oportunidades ou benefícios</strong> que seu produto pode oferecer para sua persona.</label>
                <textarea  
                type="text"
                className="form-control" 
                id="oportunidadesCadastro" 
                value={form.oportunidades}
                name="oportunidades"
                onChange={handleChange} 
                ></textarea>
            </div>
            <br></br>
            <h2 className="text-center" style={{color:"#631354"}}>Tomador de decisão</h2>
            <br></br>
            <div className="mb-3">
                <label for="papel-personaCadastro" className="form-label">Qual o papel da persona no processo de compra? Ela é a <strong>tomadora de decisão</strong>? Ou ela é quem <strong>comunica a necessidade</strong>? Neste caso, quem toma a decisão por ela?</label>
                <input 
                type="text" 
                className="form-control" 
                id="papel-personaCadastro" 
                value={form["papel-persona"]}
                name="papel-persona"
                onChange={handleChange} 
                />
            </div>
            <button type="submit" className="btn btn-primary">Gerar Persona</button>
            </form>
            </div>
            </div>
        </>

    );
}
