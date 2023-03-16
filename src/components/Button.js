import { Link } from "react-router-dom";

export function Button({ label, color, link, action }) {
    let buttonColorClasses = '';

    if (color === ' ') {
        buttonColorClasses = ' ';
    } else {
        buttonColorClasses = '   ';
    }

    const buttonClasses = buttonColorClasses + ' ';

    if (typeof(action) === 'string') {
        action = () => {}
    }

    if (link) {
        return<Link to={link}>{label}</Link>
    } else if (action) {
        return <button onClick={action} className={buttonClasses}>{label}</button>
    } else {
        throw 'O butão deve ter uma propriedade de link ou action definido';
    }
}