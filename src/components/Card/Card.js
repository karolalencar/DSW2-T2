import './Card.css';

export function Card({ color, text, icon, value }) {
    return (
        <div className={`paid ${color}`}>
            <img src={icon} className="card-img"/>
            <p className="paid-title">{text}</p>
            <p className="paid-value">R$ {value}</p>
        </div>
    )
}