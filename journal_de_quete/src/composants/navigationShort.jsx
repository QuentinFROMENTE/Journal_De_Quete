import React from 'react';
import '../css/css/style.css';
import arrowDownWhite from '../assets/icones/arrow-down-white-net.png';

export default function NavigationShort(props) {

    function GoBack() {
        window.history.go(-1);
    }

    return(

        <nav className='navigation'>
            <img src={arrowDownWhite} onClick={GoBack} className="navigation__text navigation__arrow navigation__arrow--left" alt="précédente"/>
            <p className="navigation__text navigation__localization">{props.string}</p>
        </nav>
    )
}