import { FC} from 'react'
import './Card.scss'
interface ICardProps {
    title: string;
    url: string;
  }

const Card: FC<ICardProps> = ({ url, title }) => {
    return (
        <div className='main-card'>
            <div className="main-card-title">
                {title}
            </div>
            <img height={400} width={600} src={url} alt={title} />
        </div>
    )
}

export default Card;
