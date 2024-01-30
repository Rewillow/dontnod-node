import './VideoGames.css'
import ClientAPI from '../ClientAPI';
import {jwtDecode} from "jwt-decode"

// Importo le icone 
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useState, useEffect} from 'react'



const VideoGames = () => {
  
    const [gameSelected, setGameSelected] = useState([]);
    const [listVideogames, setListVideogames] = useState([])
    const [listFavorites, setListFavorites] = useState([])
    const [userId, setUserId] = localStorage.getItem("userId")
     
      
      const fetchVideogames = async () => {
        try {
          const response = await ClientAPI.videogames();
          setListVideogames(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      const fetchFavorites = async () => {
        try {
          const token = localStorage.getItem('token')
          const decode = jwtDecode(token)
          const userId = decode.userId
          const response = await ClientAPI.rememberFavorites(userId)
          setListFavorites(response)
        } catch(error) {
          console.error()
        }
      }

      const toggleFavorite = async (gameId) => {
        try {
            const isGameInFavorites = Array.isArray(listFavorites) && listFavorites.some((favorite) => favorite.game === gameId);
            console.log(isGameInFavorites);
            if (isGameInFavorites) {
                await Promise.all([
                    ClientAPI.removeFavorites(gameId, userId),
                    setGameSelected(prevState => prevState ? prevState.filter(id => id !== gameId) : []),
                    setListFavorites(prevState => Array.isArray(prevState) ? prevState.filter(favorite => favorite.game !== gameId) : [])
                ]);
            } else {
                await Promise.all([
                    ClientAPI.addFavorites(gameId, userId),
                    setGameSelected(prevState => prevState ? [...prevState, gameId] : [gameId]),
                    setListFavorites(prevState => Array.isArray(prevState) ? [...prevState, { game: gameId, user: userId, is_favorite: true }] : [{ game: gameId, user: userId, is_favorite: true }])
                ]);
                console.log((isGameInFavorites));
            }
        } catch (error) {
            console.error(error);
        }
    };

      useEffect(() => {
        fetchFavorites();
        fetchVideogames();
      }, []);
      

    return (
      <div className='videogames'>
        <h2>Don't Nod Videogames</h2>
        <p>These are all our video games. Which are your favorites?</p>
        <div className='videogames--list'>
        {listVideogames.map((game) => {
          const isSelected =  gameSelected.includes(game.id);
          const isFavorite = Array.isArray(listFavorites) && listFavorites.some((favorite) => favorite.game === game.id);
          return (
          <button key={game.id} onClick={() => toggleFavorite(game.id)}>
          {game.title}
          {isSelected || isFavorite ? ( <AiFillHeart className='videogames--list--icon' /> ) : ( <AiOutlineHeart className='videogames--list--icon' /> )}
    </button>
    );
    })}
      </div>
      </div>
    );
};

export default VideoGames

