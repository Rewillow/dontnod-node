import { Link } from 'react-router-dom'
import './Play.css'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import Logo from '../../assets/dontnod.svg'


const Play = () => {
    return (
        <div className='start'>
        <div className='start--elements'>
        <img src={Logo} className='start--logo'></img>
        <button className="play">
        <Link to="/home">
         <BsFillPlayCircleFill className='play--icon'/>
         </Link>
         </button>
         </div>
         </div>
    )
}

export default Play