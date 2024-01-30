import './Home.css' // Importo il foglio di stile
import Platform from '../../components/Platforms/Platforms' // Importo il componente Platform 
import Carousel from '../../components/Carousel/Carousel' // Importo il componente Carousel
import Logo from '../../assets/dontnod.png' // Importo il logo della Don't Nod
import DontTeam from '../../assets/dontTeam.png' // Importo l'immagine del team della Don't Nod
import {MdOutlineKeyboardDoubleArrowDown} from 'react-icons/md' // Importo l'icona dalla libreria React Icons
import {HiOutlineArrowNarrowRight} from 'react-icons/hi' // Importo l'icona dalla libreria React Icons
import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina 

const Home = () => {

    return (
        // Specifico il tipo di transizione impostando i valori di "inizial, animate e exit"
        <motion.div className='home' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='home-welcome'>
        <img src={Logo} className='home-logo'/>
        </div>
        <h1 className='home--text--discover'>Discover our world</h1>
        <div className='home--arrow--down'><MdOutlineKeyboardDoubleArrowDown /></div>
        {/* Inserisco il componente "Platform" */}
            <Platform /> 
        {/* Inserisco il componente "Carousel" */}
            <Carousel /> 
        <div className='home--about'>
        <div className='home--about--text'>
            <h1 style={{marginBottom: `10px`}}>ABOUT <span style={{ color: `#009B96`}}>US</span></h1>
            <p style={{fontWeight: `200`, marginBottom: `20px`, lineHeight: `25px`}}>We are Don't Nod, a video game developer based in France, known for our engaging storytelling. We create exciting gaming experiences that combine action, adventure and RPG elements. With a strong attention to detail and story, we continue to inspire and entertain gamers around the world.</p>
            <a href='/about'><button className='home--about--button'>READ MORE<HiOutlineArrowNarrowRight className='home--about--button--arrow'/></button></a>
        </div>
        <div>
            <img src={DontTeam} className='home--about--img'/>
        </div>
        </div>
        </motion.div>
    )
}


export default Home