import Js from '../../assets/Js.png'
import React from '../../assets/React.png'
import './FrontendSection.scss'
const FrontendSection = () => {
    return (

        <div className='Frontend-categories'>
            <div className="container">
                <div className="Frontend-categories-title">
                    Front-end Категории
                </div>
                <div className="Frontend-categories-cards">
                    <img className='Frontend-categories-card' src={Js} alt="Js" />
                    <img className='Frontend-categories-card' src={React} alt="React" />
                </div>
            </div>
        </div>
    )
}

export default FrontendSection;