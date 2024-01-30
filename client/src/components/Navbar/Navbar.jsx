import './Navbar.css'
import { useState, useEffect } from 'react';
import Logo from '../../assets/dontnod.svg'
import {MdOutlineAccountCircle} from 'react-icons/md'
import { motion } from 'framer-motion'


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      // Funzione per controllare lo stato di accesso dell'utente
      const checkLoginStatus = async () => {
        try {
          // Recupera il valore di isLoggedIn dalla cache
          const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
          setIsLoggedIn(isLoggedIn);
        } catch (error) {
          console.error('Errore nella verifica dello stato di accesso', error);
        }
      };
      checkLoginStatus();
    }, []);
    
    
    return (
      <motion.div className="Navbar" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <a href='/home'><img src={Logo} className="nav-logo"></img></a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/games">Games</a>
        <a href="/about">About us</a>
        <a href='/minigames'>Minigames</a>
      </div>
      <div className={`nav-buttons ${isOpen && "open"}`}>
        {isLoggedIn ? (
          <div className='nav-buttons-login'>
          <a href='/profile'><MdOutlineAccountCircle className='profile--icon' /></a>
         </div>
        ) : (
          <>
            <a href="/signup"><button className='button-signup'>SIGN UP</button></a>
            <a href="/login"><button className='button-login'>LOGIN</button></a>
          </>
        )}
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </motion.div>
    
    );
  };

export default Navbar