import { useEffect, useState } from "react";
import { format } from 'date-fns';
import './ClientTable.css';
import paid from "../../assets/pay.svg";
import notPaid from "../../assets/not-pay.svg";

export function ClientTable({ clientOk }) {
    const [clientsOk, setClientsOk] = useState([]);
    useEffect(() => {
        async function fetchClientsOk() {
            const response = await fetch('http://localhost:5000/clientes/ok');
            if (response.status === 200) {
                setClientsOk(await response.json());
            }
        }
        fetchClientsOk();
    }, []);

    const clientsOkRows = clientsOk.map(e => <tr key={e.id}>
        <td className="">{e.nome}</td>
        <td className="">{format(new Date(e.vencimento), 'dd/MM/yyyy')}</td>
        <td className="">{"R$ " + e.valor}</td>
    </tr>);

    const totalClientsOk = clientsOkRows.length;

    const [clientsNotOk, setClientsNotOk] = useState([]);
    useEffect(() => {
        async function fetchClientsNotOk() {
            const response = await fetch('http://localhost:5000/clientes/not_ok');
            if (response.status === 200) {
                setClientsNotOk(await response.json());
            }
        }
        fetchClientsNotOk();
    }, []);

    const clientsNotOkRows = clientsNotOk.map(e => <tr key={e.id}>
        <td className="">{e.nome}</td>
        <td className="">{format(new Date(e.vencimento), 'dd/mm/yyyy')}</td>
        <td className="">{"R$ " + e.valor}</td>
    </tr>);

const totalClientsNotOk = clientsNotOkRows.length;

    return (
        <div className="clients-table">
            {(clientsOk.length > 0 || clientsNotOk.length > 0) && 
                <table>
                    <caption>
                        <img src={ clientOk ? paid : notPaid } alt="cliente"/>
                        <div className="title-table">{!clientOk ? 'Clientes inadimplentes' : 'Clientes em dia'}<div className={clientOk ? " value paid" : "value notPaid"}>{clientOk ? totalClientsOk : totalClientsNotOk}</div></div>
                    </caption>

                    <thead>
                        <th>Cliente</th>
                        <th>Vencimento</th>
                        <th>Valor</th>
                    </thead>

                    <tbody>
                        {clientOk ? clientsOkRows : clientsNotOkRows}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td className="button-see-more">Ver todos</td>
                        </tr>
                    </tfoot>
                </table>
            } 
        </div>
    );
}