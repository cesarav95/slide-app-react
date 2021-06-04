import React, { useState } from 'react';

function Slides({slides}) { 

    const [nroSlide, setNroSlide] = useState(0);

    const restartSlides = () => {
        setNroSlide(0);
    }
    const previousSlide = () => {
        if (nroSlide > 0) {
            setNroSlide(nroSlide - 1);
        }        
    }
    const nextSlide = () => {
        if (nroSlide < slides.length - 1) {
            setNroSlide(nroSlide + 1);
        }
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" 
                    disabled={nroSlide === 0}
                    onClick={restartSlides}
                >
                    Restart
                </button>

                <button data-testid="button-prev" className="small" 
                    disabled={nroSlide === 0}
                    onClick={previousSlide}
                >
                    Prev
                </button>

                <button data-testid="button-next" className="small" 
                    disabled={nroSlide === slides.length - 1}
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>

            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[nroSlide].title}</h1>
                <p data-testid="text">{slides[nroSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;
