import './Profile.css' // Importo il foglio di stile
import { useState } from 'react'; // Importo useState che gestisce lo stato delle variabili
import { useNavigate} from 'react-router-dom'; // Importo useNavigate che permette di reindirizzare l'utente in un'altra rotta del mio sito

import {MdLogout, MdAccountCircle} from 'react-icons/md' // Importo le icone dalla libreria React Icons
import {IoLogoGameControllerA} from 'react-icons/io' // Importo l'icona dalla libreria React Icons

import Account from '../../components/Account/Account'; // Importo il componente Account
import VideoGames from '../../components/VideoGames/VideoGames'; // Importo il componente Videogames

import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina 
import ClientAPI from '../../components/ClientAPI';

const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Creo la costante utilizzando useState e impostando il valore iniziale uguale a "false"
    const [selectedTab, setSelectedTab] = useState('account') // Creo la costante utilizzando useState e impostando il valore iniziale uguale a "account", ovvero la voce iniziale che viene mostrata quando si accede alla sezione Profilo
    
    const navigate = useNavigate(); // Creo la costante utilizzando useNavigate

    const logOut = async (event) => { // Gestione del LogOut
        event.preventDefault(); // Uso "preventDefault" per prevenire il comportomanto di default di un pulsante.
        try {
          // Viene effettuata la chiamata API
          await ClientAPI.logout(); 
          localStorage.setItem('isLoggedIn', 'false'); // Il valore di "isLoggedIn" presente nel localStorage, viene impostato uguale a "false", quindi l'utente è scollegato.
          localStorage.removeItem('userId') // Viene rimossa la voce "userId" dal localStorage
          localStorage.removeItem('message')
          localStorage.removeItem('token')
          navigate('/login') // L'utente viene reindirizzato alla pagina "Login"
          setIsLoggedIn(false) // Richiamo setIsLoggedIn e il suo valore di default
          window.location.reload(); // Viene riaggiornata la pagina
        }
        catch(error) { // Gestione di eventuali errori
          console.error(error) // Gli errori vengono mostrati nella console
        }
      }

    
      let content; // Creo la variabile che contiene ogni singola voce della sezione Profilo
      
      if(selectedTab === 'account') { // Creo la logica secondo la quale, in base al valore di "selectedTab", viene restituito il rispettivo componente
        content = <Account />
      } else if (selectedTab === 'games') {
        content = <VideoGames />
      } else {
        content = "null"; // Se content non trova un componente correttamente inserito, restituisce "null"
      }

    return (
      // Specifico il tipo di transizione impostando i valori di "inizial, animate e exit"
        <motion.div className='profile' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='profile--text'>
            <h1>Account <span style={{ color: `#009B96`}}>Settings</span></h1>
            <p>Change your profile and account settings</p>
        </div>
        <div className='profile--container'>
            <div className='profile--sections'>
              {/* Al click su uno degli appositi bottoni, viene mostrato il componente a esso collegato*/}
              <button  onClick={() => setSelectedTab('account')} > <MdAccountCircle className='profile--sections--icon'/> Account </button>
              <button onClick={() => setSelectedTab('games')}> <IoLogoGameControllerA className='profile--sections--icon' /> Games </button>
              {/* Al click l'utente viene scollegato*/}
              <button onClick={logOut}> <MdLogout className='profile--sections--icon' /> Logout </button>
            </div>
        <div className='profile--sections--details'>
        {/* Vengono mostrati selectedTab e content */}
        {selectedTab && content}
        </div>
        </div>
        </motion.div>
    )
}

export default Profile;