import { FC } from 'react';
import Card from '../MainCard/MainCard';
import './MainSection.scss'
import SobesImage from '../../assets/mainSobes.svg'
import FrontendImage from '../../assets/FrontEnd.png'

const MainSection: FC = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="main-intro">
                    <div className="main-descr animated-scroll">
                        Наш проект поможет выпускникам и студентам подготовиться и пройти собеседование.
                        На сайте представлены дисциплины с вопросами и информативными блоками по различным направлениям.
                    </div>
                    <div className="main-img">
                        <img src={SobesImage} alt="Sobec" />
                    </div>
                </div>
                <div className="main-title animated-scroll">
                    Направления
                </div>
                <div className="main-cards">
                    <Card link='/frontCategories' title='Front-end' url={FrontendImage} />
                    {/* <Card title='Математика' url={'../../../Math.png'}/>
                    <Card title='Право' url={'../../../Pravo.png'}/>
                    <Card title='Бухгалтерский учет' url={'../../../BuxUChet.png'}/>    */}
                </div>
            </div>
        </div>
    )
}

export default MainSection;
