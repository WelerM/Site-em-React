import React, { useState } from 'react'
import '../../../App.css'

import Facebook from '../../images/white-facebook.png'
import Blue_facebook from '../../images/blue-facebook.png'
import Instagram from '../../images/white-instagram.png'
import Blue_instagram from '../../images/blue-instagram.png'
import Wpp from '../../images/white-wpp.png'
import Blue_wpp from '../../images/blue-wpp.png'
import { Link } from 'react-router-dom'

function Header() {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
        console.log('f')
    }
    return (
        <>
            <header className='header'>
                {/* <h1>Shop X</h1> */}
                <h1>Your Logo</h1>
                <div className='header-items'>
                    <ul>
                        <li><Link className='link' to='/contato'>CONTACT</Link></li>
                        <li><Link className='link' to='/sobre'>ABOUT</Link></li>
                        <li><Link className='link' to='/trabalhe'>WORK WITH US</Link></li>
                    </ul>
                    <div className='social-media-container'>
                        <div className='facebook'></div>
                        <div className='instagram'  onMouseOver={ToggleMode} onMouseOut={ToggleMode} src={!active? Instagram: Blue_instagram}></div>
                        <div className='wpp' onMouseOver={ToggleMode} onMouseOut={ToggleMode} src={!active? Wpp: Blue_wpp}></div>
                    </div>
                </div>
                <div className={!active ? 'hamburguer-container' : 'hamburguer-container-off'} onClick={ToggleMode}>
                    <div className={!active ? 'hamburguer' : 'hamburguer-off'}></div>
                </div>
            </header>
            <div className={!active ? 'mobile-header' : 'mobile-header-off'}>
                <Link to='/contato' className={active ? 'mobile-item' : 'mobile-item-off'}>CONTATO</Link>
                <Link to='/sobre' className={active ? 'mobile-item' : 'mobile-item-off'}>SOBRE</Link>
                <Link to='/trabalhe' className={active ? 'mobile-item' : 'mobile-item-off'}>TRABALHE CONOSCO</Link>
            </div>
        </>
    )
}
export default Header