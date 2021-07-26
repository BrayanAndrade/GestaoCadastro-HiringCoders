import { Link } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <header>
      <h1>Gama</h1> 
      <h4>Challenge</h4>
      <nav>
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="./Product">
            <li>Produtos</li>
          </Link>
          <Link to="./Client">
            <li>Clientes</li>
          </Link>
         
        
        </ul>
      </nav>
    </header>
  );
}

export default Header;
