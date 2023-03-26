import { useEffect, useState } from "react";
import './ChargeTable.css';

export function ChargeTable({ statusCharge }) {
    const [chargesPaid, setChargesPaid] = useState([]);
    useEffect(() => {
        async function fetchChargesPaid() {
            const response = await fetch('http://localhost:5000/cobrancas/pagas');
            if (response.status === 200) {
                setChargesPaid(await response.json());
            }
        }
        fetchChargesPaid();
    }, []);

    const chargesPaidRows = chargesPaid.map(e => <tr key={e.id}>
        <td className="">{e.nome_cliente}</td>
        <td className="">{(e.cobranca_id).substring(0, 8)}</td>
        <td className="">{"R$ " + e.valor_cobranca}</td>
    </tr>);

    const [chargesExpected, setChargesExpected] = useState([]);
    useEffect(() => {
        async function fetchChargesExpected() {
            const response = await fetch('http://localhost:5000/cobrancas/previstas');
            if (response.status === 200) {
                setChargesExpected(await response.json());
            }
        }
        fetchChargesExpected();
    }, []);

    const chargesExpectedRows = chargesExpected.map(e => <tr key={e.id}>
        <td className="">{e.nome_cliente}</td>
        <td className="">{(e.cobranca_id).substring(0, 8)}</td>
        <td className="">{"R$ " + e.valor_cobranca}</td>
    </tr>);

    const [chargesOverdue, setChargesOverdue] = useState([]);
    useEffect(() => {
        async function fetchChargesOverdue() {
            const response = await fetch('http://localhost:5000/cobrancas/vencidas');
            if (response.status === 200) {
                setChargesOverdue(await response.json());
            }
        }
        fetchChargesOverdue();
    }, []);

    const chargesOverdueRows = chargesOverdue.map(e => <tr key={e.id}>
        <td className="">{e.nome_cliente}</td>
        <td className="">{(e.cobranca_id).substring(0, 8)}</td>
        <td className="">{"R$ " + e.valor_cobranca}</td>
    </tr>);

    return (
        <div className="charge-table">
            {(chargesPaid.length > 0 || chargesExpected.length > 0 || chargesOverdue.length > 0) && 
                <table>
                    <caption>
                        <p className="title-table">{statusCharge === 'paid' ? 'Cobranças Pagas' : statusCharge === 'expected' ? 'Cobranças Previstas' : 'Cobranças Vencidas'}</p>
                    </caption>

                    <thead>
                        <th>Cliente</th>
                        <th>Id da Cobrança</th>
                        <th>Valor</th>
                    </thead>

                    <tbody>
                        {statusCharge === 'paid' ? chargesPaidRows : statusCharge === 'expected' ? chargesExpectedRows : chargesOverdueRows}
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