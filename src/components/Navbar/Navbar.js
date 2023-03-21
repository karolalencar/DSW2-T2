import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/logo.png';
import homeIcon from '../../assets/home.svg';
import clientIcon from '../../assets/clients.svg';
import chargeIcon from '../../assets/charges.svg';

export function Navbar() {
    return (
        <div className="navbar">
            <div className='buttons-navbar' >
                <img src={logo} className="logo" alt="Logo"/>
                <ul className="nav-links">
                    <Link to="/" className="home" >
                        <img src={homeIcon} alt="Home"/>
                        <li>Home</li>
                    </Link>

                    <Link to="/clients" className="clients" >
                        <img src={clientIcon} alt="Clientes"/>
                        <li>Clientes</li>
                    </Link>

                    <Link to="/charges" className="charges" >
                        <img src={chargeIcon} alt="Cobranças"/>
                        <li>Cobranças</li>
                    </Link>
                </ul>
            </div>

            <div className='dropdown'>
                <button className='dropbtn'>A</button>
                <div className='dropdown-content'>
                    <a href='/profile'>Perfil</a>
                    <a href="/config">Configurações</a>
                    <a href="/more">Saiba mais</a>
                </div>
            </div>
        </div>
    ) 
}