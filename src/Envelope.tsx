import { useState } from "react";

const Envelope = () =>{

    const [selected, set] = useState(-1);

    return <>
        <img src=""/>
        <div className="envelope-wrapper">
            <div id="envelope" className={selected === 1 ? 'open' : 'close'} onClick={() => set(1)}>
                <div className="front flap"></div>
                <div className="front pocket"></div>
                <div className="letter">
                    <div className="words line1"><strong>Para Jaki&#60;3:</strong></div>
                    <div className="words line2"><strong>Tu amor y apoyo significan el 
                    mundo para mí y cada día a tu lado es una bendición. Gracias por ser mi 
                    compañera, por hacerme feliz cuando más lo necesito y por estar siempre 
                    ahí para mí.
                    <br /><br />Te amo más de lo que las palabras pueden expresar y estoy 
                    emocionado por seguir compartiendo aventuras contigo. Que este día esté 
                    lleno de momentos felices y que nuestro amor siga creciendo con cada 
                    latido de nuestros corazones.
                    <br /><br />
                    - Esle
                    </strong></div>
                </div>
                <div className="hearts">
                    <div className="heart a1"></div>
                    <div className="heart a2"></div>
                    <div className="heart a3"></div>
                </div>
            </div>
        </div>
        <div className="reset">
            <button id="open" onClick={() => {selected === 1 ? set(0) : set(1)}}>{selected === 1 ? 'Cerrar' : 'Abrir'}</button>
        </div>
        <div className="imgs">
            <div className="imgscard1">
                <div className="cardImg I1"><img src="/valentine/assets/a1.jpeg"/></div>
                <div className="cardImg I2"><img src="./a2.JPEG"/></div>
                <div className="cardImg I3"><img src="../src/a1.JPEG"/></div>
                <div className="cardImg I4"><img src="a4.JPEG"/></div>
            </div>
            <div className="imgscard2">
                <div className="cardImg I5"><img src="a5.JPEG"/></div>
                <div className="cardImg I6"><img src="a6.JPEG"/></div>
            </div>
        </div>
    </>;
}
export default Envelope
