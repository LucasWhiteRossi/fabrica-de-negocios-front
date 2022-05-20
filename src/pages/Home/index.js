import { Navbar } from "../../components/Navbar";
import logo from "../../assets/img/logo_roxo.png"
import './style.modules.css'



export function Home(){
    
  return (

      <div className='homePage'>
          <Navbar />
          <div className="home-body">
       
              <div className='d-flex justify-content-center align-items-center' style={{backgroundColor:"rgba(255,255,255, 0.75)", width:"1000px", height:"auto", margin:"120px"}}>
                  <div className='p-5'>
                      <div>
                          <h1 style={{fontSize:"0.50el", color:"#631354"}}>Tenha uma visão estratégica do seu negócio, construindo Personas e Modelos de Negócios de forma certeira para que as suas estratégias possam ser implementada com sucesso.</h1>
                          <br />
                          <p style={{fontSize:"25px"}}> A Fábrica de Negócio é uma ferramenta flexível e de fácil compreensão. Com mais de 20 perguntas para você preencher e conseguir enxergar o seu negócio de forma mais clara. São diversas funcionalidades que farão o seu projeto criar forma.
                          Vincule o seu modelo de negócio com as personas que você personalizou e entenda como você pode criar conteúdos e soluções mais atrativos e úteis para os seus clientes.
                          Agilize e facilite o processo estratégico. Documente e edite sempre que necessário, sobretudo pela necessidade da constante validação dessas mudanças.
                          Realize o seu cadastro e comece agora mesmo.</p>
                          <br />
                      </div>
                  </div>
                  <div>
                      <img className = "m-2 rounded" src={logo} alt="Logo Fábrica de Personas" style={{width:"400px", height:"auto"}}/>
                  </div>
              </div>
              
          </div>

          <div className="justify-content-center align-items-center" style={{backgroundColor:"rgba(255,255,255, 0.75)", width:"auto", height:"auto"}}>
          <p style={{fontSize:"18px"}}><span>Como usar?</span> </p>
          <p style={{fontSize:"15px"}}>1. Para começar, realize o seu cadastro e faça o login.</p>
          <p style={{fontSize:"15px"}}>2. Escolha se você quer criar primeiro a sua persona ou o seu modelo de negócio, escolhendo um dos botões na parte superior do site (Modelo de Negócios ou Personas).</p>
          <p style={{fontSize:"15px"}}>3. Preencha o formulário sem pressa, separe pelo menos 20 minutos para se dedicar a responder todas as perguntas. Se necessário realize pesquisas para obter as melhores respostas possíveis. Desta forma você saberá qual estratégia de marketing será melhor para o seu negócio.</p>  
          <p style={{fontSize:"15px"}}>4. Se preferir, você pode vincular a sua persona desejada ao modelo de negócio, após a criação de ambos.</p>
          <p style={{fontSize:"15px"}}>5. Após suas criações, tudo estará salvo para quando você necessitar conferir ou alterar alguma informação.</p>
          <p style={{fontSize:"15px"}}>6. Com todas essas informações impressas na tela, você conseguirá montar uma estratégia de marketing que alavancará as suas vendas.</p>
          </div>
          
      </div>
      
  );
}

