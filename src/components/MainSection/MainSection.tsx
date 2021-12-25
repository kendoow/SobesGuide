import { FC } from 'react';
import Card from '../Card/Card';
import './MainSection.scss'
import math from '../../../Front-end.png'

const MainSection: FC = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="main-descr">
                    Наш проект поможет выпускникам и студентам подготовиться и пройти собеседование. 
                    На сайте представлены дисциплины с вопросами и информативными блоками по различным направлениям.
                </div>
                <div className="main-title">
                    Направления 
                </div>
                <div className="main-cards">
                    <Card title='Front-end' url={'../../../Front-end.png'}/>
                    <Card title='Математика' url={'../../../Math.png'}/>
                    <Card title='Право' url={'../../../Pravo.png'}/>
                    <Card title='Бухгалтерский учет' url={'../../../BuxUChet.png'}/>   
                </div>
            </div>
        </div>
    )
}

export default MainSection;
