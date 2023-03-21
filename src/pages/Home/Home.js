import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import './Home.css';
import blueIcon from "../../assets/paid-out.svg";
import yellowIcon from "../../assets/paid-preview.svg";
import redIcon from "../../assets/paid-overdue.svg";
import { ClientTable } from "../../components/ClientTable/ClientTable";

function Home() {
    return (
        <div className="home">
            <Navbar />

            <div className="home-container">
                <div className="home-clients">
                    <h1>Resumo dos Clientes</h1>
                    <div className="home-clients-container">
                        <div className="clients-table">
                            {/*<ClientTable />*/}  
                        </div>
                        <div className="clients-table">

                        </div>
                    </div>
                    
                </div>

                <div className="home-charges">
                    <h1>Resumo das Cobranças</h1>
                    <div className="cards">
                        <Card  color="blue" text="Cobranças Pagas " icon={blueIcon} value="50.000"/>
                        <Card  color="gray" text="Cobranças Previstas " icon={yellowIcon} value="6.020"/> 
                        <Card  color="red" text="Cobranças Vencidas " icon={redIcon} value="6.020"/>
                    </div>

                    <div className="tables-charges">

                    </div>
                </div>   
            </div>
        </div>
    )
};

export default Home;