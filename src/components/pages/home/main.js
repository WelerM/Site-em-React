import React from "react";
import '../../../App.css'
import Img_phone from '../../images/main-phone.png'
import { Link } from 'react-router-dom'

function main() {
    return (
            <main>
                <main className="main-left">
                    <h1>Your business description here,<br />customized as you want</h1>
                    <p>Another, briefing description that you might want add in this main <br/> section of your site</p>
                    <Link className="main-link-button" to='/contato'>Contact us now</Link>
                </main>

                <main className="main-right">
                    <img src={Img_phone}></img>
                    <h2>Your site will work on any screen size!</h2>
                </main>
            </main>
    )
}

export default main