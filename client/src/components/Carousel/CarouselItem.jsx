import './CarouselItem.css' // Importo il file di stile

const CarouselItem = ({item}) => { // Passo come prop "item"

    return (
        <div className="carousel-item">
        <div></div>
        {/* Passo il parametro "image" al prop "item" */}
        <img className="carousel-img" src={item.image}></img> 
        </div>
    )
}

export default CarouselItem