import './About.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'; // Importo i componenti necessari per il funzionalmento della Timeline
import 'react-vertical-timeline-component/style.min.css'; // Importo il file di stile di default della timeline
import timelineElements from '../../components/timelineElements'; // Importo i dati della timeline, sottoforma di componente esterno e inseriti all'interno di un array 
import {MdFoundation, MdVideogameAsset} from 'react-icons/md'; // Importo le icone dalla libreria React Icons
import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina 


const About = () => {
    let iconStyles = { background: "#FFFFFF", color:"#009B96"}; // Imposto lo stile delle icone per la timeline
    return (
        // Specifico il tipo di transizione impostando i valori di "inizial, animate e exit"
        <motion.div className='about' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> 
        <div className='about--text'>
            <h1>TIME<span style={{ color: `#009B96`}}>LINE</span></h1>
            <p className='about--paragraph'>Discover the most important milestones in our history</p>
        </div>
            <VerticalTimeline>
                {timelineElements.map(element => { // Attraverso il metodo .map, richiamo ogni singolo elemento dell'array
                    let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== ""; // Imposto le specifiche per determinare se mostrare "Show Button" oppure no
                    let isFoundationIcon = element.icon === "Foundation" // Se presente il termine "Foundation" in "icon", viene mostrata l'apposita icona
                    return (
                        <VerticalTimelineElement 
                        key={element.id} // Qui specifico l'id di ogni elemento dell'array
                        date={element.date} // Qui specifico la data
                        dateClassName='date' // Assegano, attraverso l'impostazione predefinita "dataClassName", l'apposita classe presente nel file .css importato inizialmente
                        iconStyle={iconStyles} // Qui specifico l'icona principale da utilizzare
                        icon={isFoundationIcon ? <MdFoundation /> : <MdVideogameAsset />} // Qui specifico quando mostrare una o l'altra icona
                        >
                        <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                        <p id='description'>{element.description}</p>
                        {/* Specifico l'indirizzo a cui rimanda l'apposito bottone qualora venga mostrato */ 
                        showButton && <a href={element.path} className='about--button'>{element.buttonText}</a>} 
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </motion.div>
    )
}

export default About