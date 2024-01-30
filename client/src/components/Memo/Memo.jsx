import './Memo.css'
import { motion } from 'framer-motion' // Importo il componente per il funzionamento della transizione da pagina a pagina 
import { useEffect, useState } from 'react'

import RM from '../../assets/Memo/Remember Me - Memo.png'
import BM from '../../assets/Memo/Banishers - Memo.png'
import CPM from '../../assets/Memo/Captain Spirit - Memo.png'
import VM from '../../assets/Memo/Vampyr - Memo.png'
import GM from '../../assets/Memo/Gerda - Memo.png'
import HM from '../../assets/Memo/Harmony - Memo.png'
import JM from '../../assets/Memo/Jusant - Memo.png'
import LISM2 from '../../assets/Memo/Life Is Strange 1 Max - Memo.png'
import LISM4 from '../../assets/Memo/Life Is Strange 2 - Memo.png'
import TM2 from '../../assets/Memo/Tell Me Why 2 - Memo.png'
import TWM from '../../assets/Memo/Twin Mirror - Memo.png'

import SingleCard from './SingleCard'


const cardImages = [
    {'img': RM, matched:false},
    {'img': BM, matched:false},
    {'img': CPM, matched:false},
    {'img': VM, matched:false},
    {'img': GM, matched:false},
    {'img': JM, matched:false},
    {'img': LISM2, matched:false},
    {'img': LISM4, matched:false},
    {'img': TM2, matched:false},
    {'img': TWM, matched:false}
]

const Memo = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [winningMessage, setWinningMessage] = useState(false)
    const numberTurn = "Turn: " + turns

    const shuffleCards = () => {
        const shuffleCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id:Math.random()}))
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffleCards);
        setTurns(0);
    }

    const handleChoice = (card) => {
        if(card.id === choiceOne?.id) return;
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
      if (cards.every((card) => card.matched)) {
        setWinningMessage(true);
      } else {
        setWinningMessage(false);
      }
    }, [cards]);

    // Compara le 2 carte selezionate 
    useEffect(() => {
      if(choiceOne && choiceTwo) {
        setDisabled(true)
        if(choiceOne.img === choiceTwo.img) {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.img === choiceOne.img) {
                return {...card, matched:true}
              } else {
                return card
              }
            })
          })
          resetTurn()
        } else {
          setTimeout(() => resetTurn(), 1000)
        }
      }
    }, [choiceOne, choiceTwo])

    // Resettare il turno 
    const resetTurn = () => {
         setChoiceOne(null);
         setChoiceTwo(null)
         setTurns(prevTurns => prevTurns + 1)
         setDisabled(false)
    }

    useEffect(() => {
      shuffleCards()
    }, [])



    return (
        <motion.div className='memo' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h1>MEMORY GAME</h1>
            <button className='memo--button--start' onClick={shuffleCards}>START GAME</button>
            <p>{winningMessage ? "You Win" : numberTurn}</p>
            <div className='memo--cards--container'>
            {cards.map(card => (
            <SingleCard 
              key={card.id} 
              card={card} 
              handleChoice = {handleChoice}
              flipped = {card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
              winningMessage = {winningMessage}
              className="memo--cards--singleCard--component"
            />
            ))}
            </div>
        </motion.div>
    )
} 

export default Memo