import React from 'react';
import '../css/css/style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function NavigationLong(props) {

    function GoBack() {
        window.history.go(-1);
    }

    function GoForward() {
        window.history.go(1);
    }

    return(
            <nav className='navigation'>
                <p onClick={GoBack} className="navigation__text navigation__text--arrow">&lt;</p>
                <p onClick={GoForward} className="navigation__text navigation__text--arrow">&gt;</p>
                <p className="navigation__text navigation__text--localization">{props.string}</p>
                <FontAwesomeIcon icon={faGear} className='navigation__gear' />
            </nav>
    )
}