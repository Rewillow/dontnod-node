import './SingleCard.css'
import Retro from '../../assets/Memo/Retro - Memo.png'

const SingleCard = ({card, handleChoice, flipped, disabled, winningMessage}) => {
    const handleClick = () => {
        if(!disabled) {
        handleChoice(card)
    }}

    return (
    <div className='memo--card--single'>
        <div className={flipped ? 'flipped' : ""}>
         <img src={card.img} className='memo--card--front' alt='card front' />
         <img 
           src={Retro} 
           className='memo--card--retro' 
           alt='card retro' 
           onClick={handleClick}/>
        </div>
    </div>
    )
}

export default SingleCard