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
                <Link to="/" className="home" >
                    <img src={homeIcon} alt="Home"/>
                    <p>Home</p>
                </Link>

                <Link to="/clients" className="clients" >
                    <img src={clientIcon} alt="Clientes"/>
                    <p>Clientes</p>
                </Link>

                <Link to="/charges" className="charges" >
                    <img src={chargeIcon} alt="Cobranças"/>
                    <p>Cobranças</p>
                </Link>
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