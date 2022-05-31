import { Signup } from '../../components/Signup'
import { Login } from '../../components/Login'
import { Navbar } from '../../components/Navbar'

export function Acesso(){
    return (
        <>
            <Navbar/>
            <h1 className="text-center" style={{color: "black", fontFamily: "sans-serif", fontSize: "40px",marginTop: "30px"}}>Identificação</h1>
            <div className="d-flex flex-row justify-content-around m-5">
                <Signup/>
                <Login/>
            </div>
            
        </>
        
    )
}