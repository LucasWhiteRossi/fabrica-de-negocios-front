import { Signup } from '../../components/Signup'
import { Login } from '../../components/Login'
import { Navbar } from '../../components/Navbar'

export function Acesso(){
    return (
        <>
            <Navbar/>
            <Login/>
            <Signup/>
        </>
        
    )
}