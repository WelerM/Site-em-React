import React, { useState } from "react";
import '../../../App.css'
import Img_cart from '../../images/cart.png'
import Img_hand from '../../images/hand.png'
import Img_email from '../../images/email.png'
import Img_phone from '../../images/phone.png'
import Img_arrow from '../../images/arrow.png'

function Section() {
    var check = 0
    
    const [arrowOn, setArrowOn]=useState(false)
    const handleChange=(e)=>{
        const arrow1 = document.querySelector('.arrow1')
        const arrow2 = document.querySelector('.arrow2')
        const arrow3 = document.querySelector('.arrow3')

        if(e.target.className =='section-item-1'){
/*             arrow1.style.display='block' */
            arrow1.classList.remove('arrow1')
            arrow1.classList.add('arrow-on')
            check = 1
        }else if(e.target.className =='section-item-2'){
            console.log(check);
            if(check == 1){
                arrow2.classList.remove('arrow2')
                arrow2.classList.add('arrow-on')
            }
        }else if(e.target.className =='section-item-3'){
            if(check == 1){
                arrow3.classList.remove('arrow3')
                arrow3.classList.add('arrow-on')
            }
        }
    }   
    
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f3f4f5" fill-opacity="1" d="M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path></svg>
            <section className="section-1">
                <div className="section-header">
                  {/*   <h1>Por que usar meios de envio tradicionais e lentos se você pode receber seu pedido em até 24h?</h1> */}
                  <h1>See why choosing our services will make your life easier and safer</h1>
                    {/* <p>É fácil, veja os passos para ter a entrega mais rápida do Brasil</p> */}
                    <p>It's easy, the steps on how to choose our services</p>
                </div>
                <div className="section-body">
                    
                    <div className="section-item-1"  onMouseOver={(e)=>handleChange(e)}>
                        <div className="section-item-background-1" >
                            <img src={Img_cart}></img>
                        </div>
                   {/*      <h2>Efetue a compra em um de nossos +50.000 parceiros </h2> */}
                   <h2>Text and image of your preference</h2>
                    </div>
                        <img className="arrow1" src={Img_arrow}></img>


                    <div className="section-item-2"  onMouseOver={(e)=>handleChange(e)}>
                        <div className="section-item-background-2" >
                            <img src={Img_hand}></img>
                        </div>
               {/*          <h2>Escolha a opção de envio Shop X</h2> */}
                        <h2>Text and image of your preference</h2>
                    </div>
                    <img className="arrow2" src={Img_arrow}></img>


                    <div className="section-item-3"  onMouseOver={(e)=>handleChange(e)}>
                        <div className="section-item-background-3">
                            <img src={Img_email}></img>
                        </div>
            {/*             <h2>Você receberá um e-mail com seu código de rastreio</h2> */}
                        <h2>Text and image of your preference</h2>
                    </div>
                    <img className="arrow3" src={Img_arrow}></img>



                    <div className="section-item-4">
                        <div className="section-item-background-4"  onMouseOver={(e)=>handleChange(e)}>
                            <img src={Img_phone}></img>
                        </div>
              {/*           <h2>Pronto! Agora é só acompanhar seu pedido</h2> */}
                        <h2>Text and image of your preference</h2>
                    </div>
                </div>
            </section>
            <svg className="section-svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,149.3C320,139,400,117,480,128C560,139,640,181,720,186.7C800,192,880,160,960,165.3C1040,171,1120,213,1200,208C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </>
    )
}

export default Section