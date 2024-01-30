import './SignUp.css' // Importo il file di stile
import ClientAPI from '../../components/ClientAPI';
import { useState, useEffect } from 'react'; // Importo useState che gestisce lo stato delle variabili e useEffect 
import { useNavigate } from 'react-router-dom'; // Importo useNavigate che permette di reindirizzare l'utente in un'altra rotta del mio sito
import Loading from "../../assets/Loading.gif" // Importo la GIF di caricamento
import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina


const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false) // // Creo la costante utilizzando useState e impostando il valore iniziale uguale a "false"
    const [errorMessage, setErrorMessage] = useState("") // Creo la costante che gestisce il messaggio di errore, usando useState, e impostando il valore iniziale uguale a una stringa vuota
    const navigate = useNavigate(); // Creo la costante utilizzando useNavigate
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => { // Richiamo useEffect per fare in modo che venga mostrato il relativo errore e dopo 5s questo scomparirà. Per fare ciò sono stati utilizzate le funzioni "setTimeout" e "clearTimeout"
      if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
  
      return () => clearTimeout(timeout);
      }
      }, [errorMessage]);

    const registerUser = async (event) => {
        event.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value; 
        const password = document.querySelector('input[name="password"]').value;
        try {
          setIsDisabled(!isDisabled)
          setIsLoading(true);
          await new Promise((resolve) => setTimeout(resolve, 3000));
          const data = await ClientAPI.signUp(name, email, password)
          const token = data.token
          localStorage.setItem('token', token)
          setIsLoading(false); 
          navigate("/home"); 
          localStorage.setItem('isLoggedIn', 'true');
          window.location.reload();
        } 
        catch (error) { // Viene catturato l'errore da "catch"
          if(error.response && error.response.data && error.response.data.message) {
            setErrorMessage(error.response.data.message)
            } 
          setIsLoading(false); // Il messaggio viene nascosto dopo 3s, ma in questo caso riguarda l'errore
          setIsDisabled(isDisabled)
        }
      };
      
    return (
      // Specifico il tipo di transizione impostando i valori di "inizial, animate e exit"
        <motion.form className='signup' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className='signup--container'>
                <div className='signup--elements'>
                   <div className='signup--container--input' >
                   <div className='signup--field'>
                   <input type='text' placeholder='Username' name='name' className='signup--field--email' autoComplete='username' disabled={isDisabled}></input>
                   <input type='text' placeholder='Email' name='email' className='signup--field--email' autoComplete='email' disabled={isDisabled}></input>
                   <input type='password' placeholder='Password' name='password' autoComplete='current-password' disabled={isDisabled}></input>
                   {errorMessage && <p style={{ color: `red`, fontWeight: `light`, marginTop: `7px`, fontSize: `14px` }}>{errorMessage}</p>}
                   <button className='signup--field--button' onClick={registerUser}>SIGN UP</button>
                   <p className='signup--field--signup'>Do you already have an account? <a href='/login'>Click here!</a></p>
                   {isLoading && <img src={Loading} className='login--loading--icon'/>}
                   </div>
                   </div>
                </div>
            </div>
        </motion.form>
    )
}

export default SignUp