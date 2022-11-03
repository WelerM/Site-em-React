import React from "react";
import './sobre.css'
import { Link } from 'react-router-dom'
import Footer from '../home/footer'
import Glass_img from '../../images/magnifying-glass.png'
import Tasks_img from '../../images/task-list.png'

function sobre(){
    return(
        
        <div className="sobre">
            <div className="sobre-header">
                <h1 className="sobre-header-h1">Shop X</h1>
                <Link to='/' className="sobre-header-container">
                    <div className="sobre-header-home-img"></div>
                    <p className="sobre-link" >Voltar à página inicial</p>
                </Link>
            </div>

            <main className="sobre-main">
                <div className="sobre-main-left">
                    <h1 className="sobre-main-left-h1">Sobre nós</h1>
                    <p className="sobre-main-left-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil facere itaque eligendi
                    earum illo maiores iusto beatae sed cupiditate corrupti obcaecati, voluptatibus sapiente autem
                    architecto vel nesciunt cumque, non amet accusantium dolores a expedita numquam. Fugiat rem quam,Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil facere itaque eligendi
                    earum illo maiores iusto beatae sed cupiditate corrupti obcaecati, voluptatibus sapiente autem
                    architecto vel nesciunt cumque, non amet accusantium dolores a expedita nu  voluptatibus sapiente autem
                    architecto vel nesciunt cumque, non amet accusantium dolores a expedita nu  voluptatibus sapiente autem
                    architecto vel nesciunt cumque, non amet accusantium dolores a expedita nu</p>
                </div>
                <div className="sobre-main-right">
                    <img className="sobre-img-right-img-top" src={Tasks_img}></img>
                    <img className="sobre-img-right-img-bottom" src={Glass_img}></img>
                </div>
            </main>
      
        <Footer/>
        </div>
    )
}

export default sobre