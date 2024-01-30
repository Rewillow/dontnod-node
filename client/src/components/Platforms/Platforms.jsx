import './Platforms.css'
import {BsSteam, BsXbox, BsNintendoSwitch, BsPlaystation} from 'react-icons/bs'
import {SiEpicgames} from 'react-icons/si'


const Platform = () => {

    return (
       <div className='platform'>
       <h1 style={{ textTransform: `Uppercase`, color: `white` }}>Platforms <span style={{ color: `#009B96` }}>Supported</span></h1>
       <div className='platform--icons'>
        <BsSteam className='single--icon'/>
        <BsXbox className='single--icon'/>
        <BsNintendoSwitch className='single--icon'/>
        <BsPlaystation className='single--icon'/>
        <SiEpicgames className='single--icon'/>
        </div> 
       </div>
    )
}

export default Platform