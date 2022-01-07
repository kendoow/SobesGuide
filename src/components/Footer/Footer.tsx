import { FC } from 'react';
import './Footer.scss'
interface IFooter {
    black: boolean;
}

const Footer:FC<IFooter> = ({black}) => {
    return (
        // меняю цвет в зависимости от передаваемного свойства в Footer black
        <div className={black ? 'footer' : 'footer white'}> 
            <div className="footer-logo">
            ✱SOBLIB
            </div>
            <div className="footer-text">
            2022 © Все права защищены
            </div>
        </div>
    )
}

export default Footer;
