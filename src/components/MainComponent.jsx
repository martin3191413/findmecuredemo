import React, {useState} from 'react';
import axios from 'axios';
import './mainComponent.css';

export default function MainComponent() {

    const [email,setEmail] = useState('');
    const [joke,setJoke] = useState('');


    const chuckNorrisJokeHandler = () => {

        if (email){
            axios.get('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                setJoke(res.data.value);
                setEmail('');
            })
            .catch((err) => console.log(err));
        }
    };

    const defaultValue = <span className="quoteTextContainer">
     Previously only the big CROs and pharma could<br/> afford such a sophisticated platform.<br/>
     <span class="quoteTextBold">TrialHub is a game changer!</span>
    </span>;

    return (
        <div class="mainContent">
            <div class="mainContentLeft">
                <div class="mainContentLeftBigHeader">
                    <span class="mainContentLeftBigHeaderText">
                        Clinical Trial<br/> Strategy That<br/> Stands Out
                    </span>
                </div>
                <div class="mainContentLeftSecondHeader">
                    <span class="mainContentLeftSecondHeaderText">
                        Why losing studies you can<br/> win with TrialHub
                    </span>
                </div>
                <div class="mainContentInputContainer">
                    <input type="text" class="emailInput" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your work email"/>
                    <button class="emailInputBtn" onClick={chuckNorrisJokeHandler}>See TrialHub in Action</button>
                </div>
                <div class="mainContentQuoteContainer">
                    <div class="mainContentQuoteIcon">
                        <i class="fas fa-quote-left quote-icon"></i>
                    </div>
                    <span class="mainContentQuoteText">
                        {joke ? joke : defaultValue}
                    </span>
                </div>
            </div>
            <div class="mainContentRight">
                <img src="https://trialhub.findmecure.com/images/landing/banner.png" alt="main logo" class="mainContentRightImg"/>
            </div>
        </div>
    );
};
