import React from "react";
import "../../../App.css"
import Img_phone from '../../images/main-phone-2.png'
import Img_box from '../../images/box.png'
import Img_taxes from '../../images/taxes.png'
import Img_support from '../../images/support.png'


function section() {
    return (
        <section className="section-2">
            
            <h1 className="section-2-h1">Veja porque escolher a Shop X como forma de envio</h1>
        
            <div className="section-2-container">
                <div className="section-2-left">
                    <img src={Img_phone}></img>
                </div>
                <div className="section-2-right">

                    <div className="section-2-container-1">
                        <img className="shrek" src={Img_box}></img>
                        <div className="sec-2-container-items">
                            <h1>Entregas rápidas e seguras</h1>
                            <p>Você compra e pode beber seu cafezinho sem se preocupar,<br /> nós cuidamos de tudo para você.
                            </p>
                        </div>
                    </div>

                    <div className="section-2-container-2">
                        <img src={Img_taxes}></img>
                        <div className="sec-2-container-items">
                            <h1>As menores taxas do mercado</h1>
                            <p>Nós usamos meios diferentes e de forma inteligente, por isso <br />você paga um valor justo.</p>
                        </div>
                    </div>

                    <div className="section-2-container-3">
                        <img src={Img_support}></img>
                        <div className="sec-2-container-items">
                            <h1>Suporte 24h para você</h1>
                            <p>Nós sabemos o quanto é desconfortável ter problemas com <br /> suas compra online, por isso oferecemos suporte personalizado,<br /> 24 horas por dia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default section