import { useState, useEffect } from 'react';
import './Card.css';

export function Card({ color, text, icon, type }) {
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

    let chargesPaidSum = chargesPaid.reduce((accum, e) => {
        return accum + parseInt(e.valor_cobranca);
    }, 0);

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

    let chargesExpectedSum = chargesExpected.reduce((accum, e) => {
        return accum + parseInt(e.valor_cobranca);
    }, 0);

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

    let chargesOverdueSum = chargesOverdue.reduce((accum, e) => {
        return accum + parseInt(e.valor_cobranca);
    }, 0);

    return (
        <div className={`card ${color}`}>
            <img src={icon} className="card-img"/>
            <p className="paid-title">{text}</p>
            <p className="paid-value">R$ {type === 'paga' ? chargesPaidSum : type === 'prevista' ? chargesExpectedSum : chargesOverdueSum}</p>
        </div>
    )
}