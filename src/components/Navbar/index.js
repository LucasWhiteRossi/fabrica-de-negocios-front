import './style.modules.css'
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown }  from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

export function Navbar() {

  const { loggedInUser } = useContext(AuthContext);

  return (
    <nav class="navbar navbar-dark bg-dark">
   
    <h1><Link to="/" style={{ textDecoration: "none" }}>FÁBRICA DE NEGÓCIOS</Link></h1>
    
    {!loggedInUser &&(
    <div class="nav-items">
        <Link class="btn btn-outline-danger m-2" to="/acesso">ENTRAR</Link>
        <Link class="btn btn-outline-danger m-2" to="/como-utilizar">SOLUÇÕES</Link>
    </div>)}
    {loggedInUser &&(
    <div class="nav-items">
        <Link class="btn btn-outline-danger m-2" to="/gerenciar-negocio">MODELO DE NEGÓCIOS</Link>
        <Link class="btn btn-outline-danger m-2" to="/gerenciar-personas">PERSONAS</Link>
        <Link class="btn btn-outline-danger m-2" to="/como-utilizar">SOLUÇÕES</Link>
        <DropdownButton id="dropdown" title="MENU" variant="warning" className="m-2">

            <DropdownItem>
              <Link  to="/gerenciar-negocio" style={{'textDecoration':'none', 'color':'red'}}>GERENCIAR MODELO DE NEGÓCIOS</Link>
            </DropdownItem>

            <DropdownItem>
              <Link  to="/gerenciar-personas" style={{'textDecoration':'none', 'color':'red'}}>GERENCIAR PERSONAS</Link>
            </DropdownItem>

            <Dropdown.Divider />

            <DropdownItem>
              <Link  to="/cadastro-modelo-negocio" style={{'textDecoration':'none', 'color':'red'}}>+ CRIAR MODELO DE NEGÓCIOS</Link>
            </DropdownItem>

            <DropdownItem >
              <Link  to="/cadastro-persona" style={{'textDecoration':'none', 'color':'red'}}>+ CRIAR PERSONAS</Link>
            </DropdownItem>

            <Dropdown.Divider />
            
            <DropdownItem>
              <Link  to="/profile" style={{'textDecoration':'none', 'color':'black'}}>ÁREA DO USUÁRIO</Link>
            </DropdownItem>

        </DropdownButton>
            
    </div>)}
  </nav>
);
}




