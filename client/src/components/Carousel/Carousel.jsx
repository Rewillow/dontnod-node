import './Carousel.css' // Importo il file di stile

import CarouselItem from "./CarouselItem" // Importo il componente alla quale passo come prop "item"

import Rememberme from "../../assets/RememberMe.png" // Importo l'immagine per lo Slider
import LifeIsStrange from "../../assets/LifeIsStrange.png" // Importo l'immagine per lo Slider
import Vampyr from "../../assets/Vampyr.png" // Importo l'immagine per lo Slider
import CaptainSpirit from "../../assets/CaptainSpirit.png" // Importo l'immagine per lo Slider
import LifeIsStrange2 from "../../assets/LifeIsStrange2.png" // Importo l'immagine per lo Slider
import TellMeWhy from "../../assets/TellMeWhy.png" // Importo l'immagine per lo Slider
import TwinMirror from "../../assets/TwinMirror.png" // Importo l'immagine per lo Slider
import Gerda from "../../assets/Gerda.png" // Importo l'immagine per lo Slider
import Banishers from "../../assets/Banishers.png" // Importo l'immagine per lo Slider
import Harmony from "../../assets/Harmony.png" // Importo l'immagine per lo Slider
import Jusant from "../../assets/Jusant.png" // Importo l'immagine per lo Slider

import { useState } from 'react' // Importo useState

import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai' // Importo le icone dalla libreria React-Icons
import {IoMdRadioButtonOn} from 'react-icons/io' // Importo l'icona dalla libreria React-Icons


const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0); // Essendo impostato a 0, indica il primo elemento dell'array

    const items = [ // Creo un array che contiene tutte le varie immagini dello slider
        {
            id:1,
            image: Rememberme
        },
        
        {
            id:2,
            image: LifeIsStrange
        },
        {
            id:3,
            image: Vampyr
        },
        {
            id:4,
            image: CaptainSpirit
        },
        {
            id:5,
            image: LifeIsStrange2
        },
        {
            id:6,
            image: TellMeWhy
        },
        {
            id:7,
            image: TwinMirror
        },
        {
            id:8,
            image: Gerda
        },
        {
            id:9,
            image: Banishers
        },
        {
            id:10,
            image: Harmony
        },
        {
            id: 11,
            image: Jusant
        }
    ]

    const updateIndex = (newIndex) => { // Creo la costante che gestisce l'avanzamento dello slider
        if (newIndex < 0) { // Se newIndex è minore di 0, allora assumerà il valore di 0
            newIndex = 0;
        } else if (newIndex >= items.length) { // Se newIndex ha un valore maggiore/uguale alla lunghezza dell'array, avrà il valore di 0. Questo viene stabilito per fare in modo che ritorni al punto di partenza e non rimanga bloccato alla fine.
            newIndex = 0;
        } 

        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel">
        <h1 style={{ color: `white` }}>OUR <span style={{ color: `#009B96` }}>TITLES</span></h1>
        <h3 style={{ color: `white`, fontWeight: `300`, textAlign: `center` }}>These are the games created by our team!</h3>
        <div className='inner' style={{ transform: `translateX(${-activeIndex * 100}%)` }}>
            {items.map((item) => { // Attraverso il metodo .map, richiamo ogni singolo elemento dell'array
                return <CarouselItem item={item} key={item.id}/>
            })}
        </div>
        <div className='carousel-buttons'>
            {/* Sottranedo -1 ad activeIndex, viene permesso di ritornare indietro */}
            <button className='button-arrow' onClick={() => {(updateIndex(activeIndex - 1))}}>
                <AiOutlineArrowLeft />
            </button>
            <div className='indicators'>
            {items.map((item, index) => { // Attraverso il metodo .map, richiamo ogni singolo elemento dell'array
                return (
                <button className='indicator-buttons' key={item.id} onClick={() => {updateIndex(index)}}>
                    {/* Qui si specifica che l'immagine corrispondente al pallino verrà visualizzato colorato, altrimenti no */}
                    <span className={`indicator-symbol ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                        <IoMdRadioButtonOn />
                    </span>
                </button>
                )
            })}
            </div>
            {/* Aggiungendo +1 ad activeIndex, viene permesso l'avanzamento */}
            <button className='button-arrow' onClick={() => {(updateIndex(activeIndex + 1))}}> 
                <AiOutlineArrowRight />
            </button>
        </div>
        </div>
    )
}

export default Carousel