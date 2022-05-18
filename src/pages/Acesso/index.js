import { Signup } from '../../components/Signup'
import { Login } from '../../components/Login'
import { Navbar } from '../../components/Navbar'

export function Acesso(){
    return (
        <>
            <Navbar/>
            
            <div className="d-flex flex-row justify-content-around m-5">
                <Signup/>
                <Login/>
            </div>
            
        </>
        
    )
}