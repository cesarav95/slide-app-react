import React, { useState } from 'react';

function Slides({slides}) {

    const [disPrev, setDisPre] = useState(true);
    const [disRest, setDisRest] = useState(true);
    const [disNext, setDisNext] = useState(false);
    const [nroSlide, setNroSlide] = useState(0);

    /*const [stateSlides, setSateSlides] = useState({
                                            prev:true,
                                            rest:true,
                                            next:false,
                                            nro:0
                                        }); */
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" 
                    disabled={disRest}
                    onClick={() => { 
                        setDisPre(true); 
                        setDisRest(true);
                        setDisNext(false);
                        setNroSlide(0);
                    }}
                >Restart</button>
                <button data-testid="button-prev" className="small" 
                    disabled={disPrev}
                    onClick={() => { 
                        if (nroSlide > 0) {
                            let previousSlide = nroSlide - 1
                            setNroSlide(previousSlide);
                            if (previousSlide < slides.length - 1) {
                                if (disNext) setDisNext(false);
                            }
                            if ( previousSlide == 0){
                                setDisPre(true);
                                setDisRest(true);
                            }
                        } 
                    }}
                >Prev</button>
                <button data-testid="button-next" className="small" 
                    disabled={disNext}
                    onClick={() => { 
                        if (nroSlide < slides.length) {
                            let nextSlide = nroSlide + 1;
                            setNroSlide(nextSlide);
                            if (nextSlide == slides.length - 1 ) {
                                setDisNext(true);
                                setDisPre(false);
                                setDisRest(false);   
                            } else {
                                if (nextSlide > 0 ){
                                    if (disPrev) setDisPre(false);
                                    if (disRest) setDisRest(false);
                                }
                            }                                                 
                        } 
                    }}
                >Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[nroSlide].title}</h1>
                <p data-testid="text">{slides[nroSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
