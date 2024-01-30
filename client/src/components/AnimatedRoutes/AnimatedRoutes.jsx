// Questo componente è simile ad AppRouter, con la sola differenza che è stato inserito il componente per le animazioni tra le pagine che avvolge Routes e Route
import {Routes, Route, useLocation} from 'react-router-dom' // Import Routes, Route e useLocation

import Play from '../Play/Play' // Importo il componente-rotta
import Home from '../../views/Home/Home' // Importo il componente-rotta
import Games from '../../views/Games/Games' // Importo il componente-rotta
import SingleGame from '../../views/Games/SingleGame' // Importo il componente-rotta
import About from '../../views/About/About' // Importo il componente-rotta
import Login from '../../views/Login/Login' // Importo il componente-rotta
import SignUp from '../../views/SignUp/SignUp' // Importo il componente-rotta
import Profile from '../../views/Profile/Profile' // Importo il componente-rotta
import ContactUs from '../ContactUs/ContactUs' // Importo il componente-rotta
import VideoGames from '../VideoGames/VideoGames'
import Account from '../Account/Account'
import Minigames from '../../views/Minigames/Minigames'
import Memo from '../Memo/Memo'

import {AnimatePresence} from 'framer-motion' // Importo "AnimatePresence" della libreria "framer-motion", dentro la quale avvolgo le rotte.



const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Play />} />
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:title" element={<SingleGame />} />
        <Route path="/about" element={<About />} />
        <Route path="/minigames" element={<Minigames />} />
        <Route path='/minigames/memo' element={<Memo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/account" element={<Account />} />
        <Route path="/profile/videogames" element={<VideoGames />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes