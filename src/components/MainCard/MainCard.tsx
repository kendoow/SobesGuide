import { FC} from 'react'
import { Link } from 'react-router-dom';
import './MainCard.scss'
interface ICardProps {
    title: string;
    url: string;
    link:string;
  }

const Card: FC<ICardProps> = ({ url, title, link }) => {
    return (
        <Link to = {link} className='main-card'>
            <div className="main-card-title">
                {title}
            </div>
            <img  src={url} alt={title} />
        </Link>
    )
}

export default Card;
