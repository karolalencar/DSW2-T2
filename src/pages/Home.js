import { Card } from "../components/Card/Card";
import { Navbar } from "../components/Navbar/Navbar";
import redIcon from "../assets/paid-overdue.svg";

function Home() {
    return (
        <div>
            <Navbar />
            <h1>Resumo dos clientes</h1>

            <h1>Resumo das cobranças</h1>

            <Card  color="red" text="Cobranças Vencidas" icon={redIcon} value="6.020"/>
        </div>
    )
};

export default Home;