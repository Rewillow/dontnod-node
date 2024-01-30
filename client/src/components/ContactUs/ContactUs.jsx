import { useEffect, useState } from 'react';
import './ContactUs.css'
import Loading from '../../assets/Loading.gif'
import {MdDoneOutline} from "react-icons/md"
import { motion } from 'framer-motion'

// Questo componente permette di mettersi in contatto con l'azienda. In questo caso si tratta di un form fittizio, a cui non è stato assegnato nessun metodo di invio.

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isDone, setIsDone] = useState(false)

    const handleSend = (e) => { // Per impedire il riaggiornamento della pagina al click del bottone "SEND"
        e.preventDefault();
        setIsDisabled(!isDisabled)
        setIsLoading(true)
    }

    useEffect(() => {
      if (isLoading) {
        const loadingTimeout = setTimeout(() => {
          setIsLoading(false);
          setIsDone(true);
        }, 5000);
    
        return () => clearTimeout(loadingTimeout);
      }
    
      if (isDone) {
        const doneTimeout = setTimeout(() => {
          setIsDone(false);
        }, 1000);
    
        return () => clearTimeout(doneTimeout);
      }
    }, [isLoading, isDone]);
    

    return (
     <motion.form className='contact-us' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <div className='contact-us--container'>
       <div className='contact-us--elements'>
        <h1>Contact <span style={{ color: `#009B96`}}>Us</span></h1>
        <p>Fill out the form to get in touch with us</p>
        <div className='contact-us--input'>
            <input type='text' placeholder='Title of message' disabled={isDisabled}></input>
            <div className='contact-us--input--informations'>
            <input type='text' placeholder='First Name' disabled={isDisabled}></input>
            <input type='text' placeholder='Last Name' disabled={isDisabled}></input>
            </div>    
            <textarea type='text' placeholder='Write what you want to tell' disabled={isDisabled}></textarea>   
        </div>
        <button className='contact-us--button' onClick={handleSend}>SEND
        {isLoading && <img src={Loading} className='contact-us--loading--icon'/>}
        {isDone && <MdDoneOutline className='contact-us--done--icon' />}
        </button>
        <h5>*The form is for illustration only</h5>
       </div>
      </div>
     </motion.form>
    ) 
}

export default ContactUs