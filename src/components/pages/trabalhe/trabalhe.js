import React from "react";
import './trabalhe.css'
import { Link } from 'react-router-dom'
import Footer from '../home/footer'


export default function trabalhe() {
    return (
        <div className="trabalhe">

            <div className="trabalhe-header">
                <h1 className="trabalhe-header-h1">Shop X</h1>
                <Link to='/' className="trabalhe-header-container">
                    <div className="trabalhe-header-home-img"></div>
                    <p className="trabalhe-link" >Voltar à página inicial</p>
                </Link>
            </div>

            <div className="trabalhe-main">
                <h1 className="trabalhe-main-h1">Venha fazer parte da nossa equipe</h1>
                <p className="trabalhe-main-p">A Shop X está constantemente crescendo e consequentemente, contratando
                    novos colaboradores, nas mais variadas áreas de nossa empresa.
                    Com mais de 5.000 postos espalhados por todo o Brasil, você pode
                    fazer parte do nosso time, não importa o lugar.
                </p>

                <form className="trabalhe-form">
                    <h1 className="trabalhe-form-h1">Insira seus dados</h1>
                    <input className="trabalhe-input" type='text' placeholder="Nome completo"></input>
                    <input className="trabalhe-input" type='text' placeholder="Seu melhor e-mail"></input>
                    <input className="trabalhe-input" type='text' placeholder="Telefone celular"></input>
                    <input className="trabalhe-input" type='text' placeholder="Endereço"></input>
                    <select className="trabalhe-select" placeholder="Escolha a vaga">
                        <option className="trabalhe-option" selected disabled>Vaga pretendida</option>
                        <option className="trabalhe-option">Atendente digital</option>
                        <option className="trabalhe-option">Gerente</option>
                        <option className="trabalhe-option">Administrador</option>
                        <option className="trabalhe-option">Motorista</option>
                        <option className="trabalhe-option">Entregador</option>
                    </select>
                    <button className="trabalhe-button">Enviar</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}