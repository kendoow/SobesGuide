import { FC } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss'
interface INav {
    black: boolean;
    url:string;
}

const NavBar: FC<INav> = ({ black, url }) => {
    return (
        <Link  style={{ textDecoration: 'none' }} to = {url}>
            <header className={black ? "" : "white"}>
                <div className="container">
                    <div className={black ? "logo black" : 'logo white'}>
                        <span>✱</span> SOBLIB
                    </div>
                </div>
            </header>
        </Link>
    )
}

export default NavBar;
