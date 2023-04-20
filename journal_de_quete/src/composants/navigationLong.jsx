import React from 'react';
import '../css/css/style.css';
import arrowDownWhite from '../assets/icones/arrow-down-white-net.png';
import settingsGear from '../assets/icones/settings-white.png';

export default function NavigationLong(props) {

    function GoBack() {
        window.history.go(-1);
    }

    function GoForward() {
        window.history.go(1);
    }

    return(
            <nav className='navigation'>
                <img src={arrowDownWhite} onClick={GoBack} className="navigation__text navigation__arrow navigation__arrow--left" alt="précédente"/>
                <img src={arrowDownWhite} onClick={GoForward} className="navigation__text navigation__arrow navigation__arrow--right" alt="suivante"/>
                <p className="navigation__text navigation__localization">{props.string}</p>
                <img src={settingsGear} className='navigation__gear' alt="paramètres"/>
            </nav>
    )
}