// Import Font Awesome styles in your component or in your global stylesheet
import 'font-awesome/css/font-awesome.min.css';

import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Portfolio.css';

const Portfolio = () => {
    const [card1Flipped, setCard1Flipped] = useState(false);
    const [card2Flipped, setCard2Flipped] = useState(false);
    const [card3Flipped, setCard3Flipped] = useState(false);
    

    const handleCardFlip = (cardNumber) => {
        switch (cardNumber) {
            case 1:
                setCard1Flipped(!card1Flipped);
                break;
            case 2:
                setCard2Flipped(!card2Flipped);
                break;
            case 3:
                setCard3Flipped(!card3Flipped);
                break;
            default:
                break;
        }
    };

    return (
        <div className='portfolio'>
            <h1>Portfolio Projects</h1>
            <div className='card'>
                <ReactCardFlip isFlipped={card1Flipped} flipDirection="horizontal">
                    <div className='front' onClick={() => handleCardFlip(1)}>
                        <h2>Portfolio Website</h2>
                        <img  src="./images/Portfolio website cover page .png" alt="Image" />
                        <p>Built a  Personal Portfolio Website, Click <a href="https://github.com/jaisahdeva/jai-portfolio" target="_blank" rel="noopener noreferrer">here</a> to view source code on GIT. </p>
                        <i className="fa fa-refresh fa-lg flip-icon" aria-hidden="true" onClick={() => handleCardFlip(1)}></i>
                    </div>
                    <div className='back' onClick={() => handleCardFlip(1)}>
                        <h2>Softwares/Languages </h2>
                        <p><ul>
                            <li>VS Code</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                        </ul></p>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={card2Flipped} flipDirection="horizontal">
                    <div className='front' onClick={() => handleCardFlip(2)}>
                        <h2>Front</h2>
                    </div>
                    <div className='back' onClick={() => handleCardFlip(2)}>
                        <h2>Back</h2>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={card3Flipped} flipDirection="horizontal">
                    <div className='front' onClick={() => handleCardFlip(3)}>
                        <h2>Front</h2>
                    </div>
                    <div className='back' onClick={() => handleCardFlip(3)}>
                        <h2>Back</h2>
                    </div>
                </ReactCardFlip>
                
            </div>
        </div>
    );
};

export default Portfolio;
