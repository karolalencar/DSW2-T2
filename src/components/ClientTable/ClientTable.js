import { Tr } from "../Tr/Tr";

export function ClientTable() {
    return (
        <table>
            <caption>
                <img />
                <div></div>
            </caption>

            <thead>
                <Tr name="Clientes" second="Vencimeto"  value="Valor" />
            </thead>

            <tbody>
                <Tr name="Sara Silva" second="10/02/2022" value="R$ 4.000,00"/>
            </tbody>
        </table>
    );
}