import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../../assets/logo.png';
import homeIcon from '../../assets/home.svg';
import clientIcon from '../../assets/clients.svg';
import chargeIcon from '../../assets/charges.svg';

export function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo"/>
            <ul className="nav-links">
                <Link to="/" className="home">
                    <img src={homeIcon}/>
                    <li>Home</li>
                </Link>

                <Link to="/clients" className="clients">
                    <img src={clientIcon}/>
                    <li>Clientes</li>
                </Link>

                <Link to="/charges" className="charges">
                    <img src={chargeIcon}/>
                    <li>Cobranças</li>
                </Link>
            </ul>
            <div>
                <p>Abcd</p>
            </div>
        </div>
    ) 
}