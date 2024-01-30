import './Games.css' // Importo il file di stile

import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina 

import GamesWallpaper from '../../assets/GamesWallpaper.png' // Importo il wallpaper della sezione Games
import RM from '../../assets/RM.png' // Importo la copertina di ogni videogioco
import LIF from '../../assets/LIF.png' // Importo la copertina di ogni videogioco
import VAMP from '../../assets/VAMP.png' // Importo la copertina di ogni videogioco
import CP from '../../assets/CP.png' // Importo la copertina di ogni videogioco
import LIF2 from '../../assets/LIF2.png' // Importo la copertina di ogni videogioco
import TMW from '../../assets/TMW.png' // Importo la copertina di ogni videogioco
import TM from '../../assets/TM.png' // Importo la copertina di ogni videogioco
import G from '../../assets/G.png' // Importo la copertina di ogni videogioco
import B from '../../assets/B.png' // Importo la copertina di ogni videogioco
import H from '../../assets/H.png' // Importo la copertina di ogni videogioco
import J from '../../assets/J.png' // Importo la copertina di ogni videogioco

import RememberMeLogo from '../../assets/RememberMe-Logo.png' // Importo il logo di ogni singolo videogioco
import LifeIsStrangeLogo from '../../assets/LifeIsStrange-Logo.png' // Importo il logo di ogni singolo videogioco
import VampyrLogo from '../../assets/Vampyr-Logo.png' // Importo il logo di ogni singolo videogioco
import CaptainSpiritLogo from '../../assets/CaptainSpirit-Logo.png' // Importo il logo di ogni singolo videogioco
import LifeIsStrange2Logo from '../../assets/LifeIsStrange2-Logo.png' // Importo il logo di ogni singolo videogioco
import TellMweWhyLogo from '../../assets/TellMeWhy-Logo.png' // Importo il logo di ogni singolo videogioco
import TwinMirrorLogo from '../../assets/TwinMirror-Logo.png' // Importo il logo di ogni singolo videogioco
import GerdaLogo from '../../assets/Gerda-Logo.png' // Importo il logo di ogni singolo videogioco
import BanishersLogo from '../../assets/Banishers-Logo.png' // Importo il logo di ogni singolo videogioco
import HarmonyLogo from '../../assets/Harmony-Logo.png' // Importo il logo di ogni singolo videogioco
import JusantLogo from '../../assets/Jusant-Logo.png' // Importo il logo di ogni singolo videogioco

import {GiGamepad} from 'react-icons/gi' // Importo l'icona dalla libreria React Icons
import {BsSteam, BsXbox, BsNintendoSwitch, BsPlaystation} from 'react-icons/bs' // Importo le icone dalla libreria React Icons
import {SiEpicgames} from 'react-icons/si' // Importo l'icona dalla libreria React Icons
import {HiOutlineArrowNarrowRight} from 'react-icons/hi' // Importo l'icona dalla libreria React Icons

const Games = () => {

    // Creo il componente "titles" caratterizzato da un array di elementi, le cui informazioni sono relativi a ogni singolo videogioco
    const titles = [
        {   
            logo: RememberMeLogo,
            description: "Neo-Paris. 2084. Personal memories can now be digitized, bought, sold and traded. The last remnants of privacy and intimacy have been swept away in...",
            image: RM,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />],
            path: "remember-me"
        },
        {
            logo: LifeIsStrangeLogo,
            description: "Follow the story of Max Caulfield, a photography student who, while saving the life of her best friend Chloe Price, realizes she has the extraordinary...",
            image: LIF,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />],
            path: "life-is-strange"
        },
        {   
            logo: VampyrLogo,
            description:"London, 1918. You are Dr. Jonathan Reid and you have just become a vampire. As a doctor, you must find a cure to save citizens, infected with...",
            image: VAMP,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />, <BsNintendoSwitch />],
            path: "vampyr"
        },
        {   
            logo: CaptainSpiritLogo,
            description:"Have you ever dreamed of becoming a superhero? He is Chris, a 9-year-old boy with a wild imagination who escapes reality by going on great adventures...",
            image: CP,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />],
            path: "captain-spirit"
        },
        {   
            logo: LifeIsStrange2Logo,
            description:"Sean and Daniel Diaz are forced to run away from home after a tragic accident. Out of fear of the police and Daniel's new telekinetic power, or the...",
            image: LIF2,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />, <BsNintendoSwitch />],
            path: "life-is-strange-2"
        },
        {   
            logo: TellMweWhyLogo,
            description:"In this deep and mysterious story, twins Tyler and Alyson Ronan reunite and use their supernatural bond to unravel memories of their beautiful but...",
            image: TMW,
            platforms: [<BsSteam />, <BsXbox />],
            path: "tell-me-why"
        },
        {   
            logo: TwinMirrorLogo,
            description:"Sam Higgs left his hometown two years ago, cutting ties with all the people closest to him. The sudden death of Nick, his best friend, will force...",
            image: TM,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />, <SiEpicgames />],
            path: "twin-mirror"
        },
        {  
            logo: GerdaLogo, 
            description:"February 1945. War is winding down, but your fight is about to begin. You are Gerda Larsen, a young nurse torn between loyalty to her community and...",
            image: G,
            platforms: [<BsSteam />, <BsNintendoSwitch />],
            path: "gerda"
        },
        {   
            logo: BanishersLogo,
            description:"New Eden, 1695. Antea Duarte and Rosso Mac Raith are a pair of purgers, i.e. ghost hunters who have sworn to protect the living from the threat...",
            image: B,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />],
            path: "banishers"
        },
        {   
            logo: HarmonyLogo,
            description:"The fate of humanity is at stake. Use your gift of clairvoyance to see into the future and stop an apocalypse that threatens the balance...",
            image: H,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />, <BsNintendoSwitch />],
            path: "harmony"
        },
        {
            logo: JusantLogo,
            description: "Enjoy the meditative vibes of Jusant, a climbing action puzzler. Climb an immensely tall tower and Enjoy the meditative vibes of...",
            image: J,
            platforms: [<BsSteam />, <BsPlaystation />, <BsXbox />],
            path: "jusant"
        }
    ]

    return (
        // Specifico il tipo di transizione impostando i valori di "inizial, animate e exit"
        <motion.div className='games' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='games--container'>
        <img src={GamesWallpaper} className='games--container--img'/>
        <div className='games--container--text'>
         <h1>Discover all our titles</h1>
         <p>Below is the complete list of all the titles produced by our team!</p>
        </div>
        <div className='games--container--gamepad'>
            <GiGamepad className='games--container--gamepad--icon'/>
        </div>
        {titles.map((title, index) => ( // Attraverso il metodo .map, richiamo ogni singolo elemento dell'array
        <section key={index} className='games--container--rm'>
        <div className='games--container--rm--img'>
        <img src={title.image} className='remember--me' alt="Game Image" />
        </div>
        <div className='games--container--rm--text'>
        <img src={title.logo} className='games--container--logo' alt='Logo Image' />
        <p>{title.description}</p>
        <div className='games--container--platforms--icons'>
        {title.platforms.map((platform, platformIndex) => ( // Attraverso il metodo .map, richiamo ogni singolo elemento dell'array
        <span key={platformIndex} className='games--container--platforms--single--icon'>{platform}</span>
        ))}
        </div>
        <a href={`/games/${title.path}`}><button className='home--about--button'>READ MORE<HiOutlineArrowNarrowRight className='home--about--button--arrow'/></button></a>
        </div>
        </section>
        ))}
         </div>
        </motion.div>
    )
}

export default Games