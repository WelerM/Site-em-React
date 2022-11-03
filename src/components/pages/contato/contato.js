import React from "react";
import { Link } from 'react-router-dom'
import './contato.css'
import Footer from '../home/footer'


function Contato() {
    return (
        <div className="contato">
            
            <header className="contato-header">
                <h1 className="contato-header-h1">Shop X</h1>
                <Link to='/' className="contato-header-container">
                    <div className="contato-header-home-img"></div>
                    <p className="contato-link" >Voltar à página inicial</p>
                </Link>
            </header>


            <main className="contato-main">
                <form className="form">
                    <h1 className="contato-h1">Contato</h1>
                    <input type='name' placeholder="Nome completo"></input>
                    <input type='text' placeholder="Email"></input>
                    <textarea placeholder="Deixe sua mensagem"></textarea>
                    <button className="contato-button">Enviar</button>
                </form>
            </main>
            <Footer />
        </div>
    )

}


export default Contato