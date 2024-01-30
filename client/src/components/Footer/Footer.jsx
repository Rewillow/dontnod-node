import './Footer.css'
import {TiSocialInstagramCircular, TiSocialFacebookCircular, TiSocialTwitterCircular} from 'react-icons/ti'
import Logo from '../../assets/dontnod.svg'

const Footer = () => {
    return (
        <footer className='footer'>
        <div className='footer--container'>
        <img src={Logo} className='footer--logo' />
        <div className='footer--links'>
        <a href="/home">Home</a>
        <a href="/games">Games</a>
        <a href="/about">About us</a>
        <a href='/minigames'>Minigames</a>
        </div>
        <div className='footer--icons--button'>
        <div className='footer--icons'>
        <a href='https://www.instagram.com/dontnod_ent/' target='_blank'><TiSocialInstagramCircular className='footer--single--icon'/></a>
        <a href='https://www.facebook.com/DONTNOD.Entertainment/' target='_blank'><TiSocialFacebookCircular className='footer--single--icon'/></a>
        <a href='https://twitter.com/DONTNOD_Ent' target='_blank'><TiSocialTwitterCircular className='footer--single--icon'/></a>
        </div>
        <div className='footer--container--button--contact'>
        <a href='/contact'><button className='footer--button--contact'>CONTACT US</button></a>
        </div>
        </div>
        </div>
        <div className='footer--copyright'>
        <p style={{color: `white`, textAlign: `center`}}>© 2023, All rights reserved, DON'T NOD</p>
        </div>
        </footer>
    )
}

export default Footer