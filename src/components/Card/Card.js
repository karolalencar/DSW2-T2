export function Card({ color, text, icon, value }) {
    return (
        <div className="red">
            <img src={icon}/>
            <div>
                <span>{text}</span>
                <span>R$ {value}</span>
            </div>
        </div>
    )
}