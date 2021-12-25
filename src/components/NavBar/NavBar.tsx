import { FC } from 'react';
import './NavBar.scss'

const NavBar:FC = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                   <span>✱</span> SOBLIB 
                </div>
            </div>
        </header>
    )
}

export default NavBar;
