import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { ClientTable } from "../../components/ClientTable/ClientTable";
import './Home.css';
import blueIcon from "../../assets/paid-out.svg";
import yellowIcon from "../../assets/paid-preview.svg";
import redIcon from "../../assets/paid-overdue.svg";
import { ChargeTable } from "../../components/ChargeTable/ChargeTable";

function Home() {
    return (
        <div className="home-page">
            <Navbar />

            <div className="home-container">
                <div className="home-clients">
                    <h1>Resumo dos Clientes</h1>
                    <div className="home-clients-container">
                        <ClientTable clientOk={ false } />
                        <ClientTable clientOk={ true } />
                    </div>
                    
                </div>

                <div className="home-charges">
                    <h1>Resumo das Cobranças</h1>
                    <div className="cards">
                        <Card  color="blue" text="Cobranças Pagas " icon={blueIcon} type="paga"/>
                        <Card  color="gray" text="Cobranças Previstas " icon={yellowIcon} type="prevista"/> 
                        <Card  color="red" text="Cobranças Vencidas " icon={redIcon} type="vencida"/>
                    </div>

                    <div className="tables-charges">
                        <ChargeTable statusCharge="paid"/>  
                        <ChargeTable statusCharge="expected"/>
                        <ChargeTable  statusCharge="overdue"/>                      
                    </div>
                </div>   
            </div>
        </div>
    )
};

export default Home;