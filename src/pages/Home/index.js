import { Navbar } from "../../components/Navbar";
import logo from "../../assets/img/logo_roxo.png"
import './style.modules.css'



export function Home(){
    
  return (

      <div className='homePage'>
          <Navbar />
          <div>
          </div>
          <div className="home-body">
            
            <div className='d-flex justify-content-center align-items-center m-10' style={{backgroundColor:"rgba(171 184 255 / 18%)", width:"1000px", height:"auto"}}>
                <div className='p-5'>
                    <div>
                        <br />
                        <p style={{fontSize:"25px", color:"rgb(79 63 184)"}}><strong>A Fábrica de Negócio é uma ferramenta flexível e de fácil compreensão.</strong></p>
                        <p style={{fontSize:"20px"}}>
                            Tenha uma visão estratégica do seu negócio, construindo Personas e Modelos de Negócios para que as suas estratégias possam ser implementada com sucesso.
                        </p>
                        <br />
                    </div>
                </div>
                <div>
                    <img className = "m-2 rounded" src={logo} alt="Logo Fábrica de Personas" style={{width:"400px", height:"auto"}}/>
                </div>
            </div>
        </div>
    </div>
);
}

