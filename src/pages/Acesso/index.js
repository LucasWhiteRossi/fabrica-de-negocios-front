import { Signup } from '../../components/Signup'
import { Login } from '../../components/Login'
import { Navbar } from '../../components/Navbar'
import identificacao from '../../assets/img/titulo_identificacao.png'

export function Acesso(){
    return (
        <>
            <Navbar/>
            <div className="d-flex justify-content-center align-items-center">
                <img src={identificacao} alt="Título identificacao" style={{width:"450px",height:"auto", margin:"20px"}}/>
            </div>
            <div className="d-flex flex-row justify-content-around m-5">
                <Signup/>
                <Login/>
            </div>
            
        </>
        
    )
}