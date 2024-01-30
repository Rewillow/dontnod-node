import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Questo componente serve per nascondere la Navbar da determinate rotte del sito web

const HideNavbar = ({ children }) => { // Imposto il props "Children"

    const location = useLocation(); // Creo una variabile richiamando "useLocation", che ritorna la posizione corrente di un oggetto

    const [showNavbar, setShowNavbar] = useState(false); // Creo una variabile richiamando "useState" e impostando lo stato in "false", cioè "nascondi la navbar"

    useEffect(() => {      // Richiamo "useEffect"
        if(location.pathname === '/') { // Imposto la prima condizione.Se la rotta corrisponde 
        setShowNavbar(false); // imposta "setShowNavbar" = false
     } else {
        setShowNavbar(true); // Se non è così sarà "true"
    };
     }, [location]) // Qui richiamo la variabile "location"


    return (
      <div>{showNavbar && children}</div> // Nel contenitore richiamo sia la variabile "showNavbar" che il parametro "children"
    );
  };
  
  export default HideNavbar; // Esporto il componente
  