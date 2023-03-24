import React from 'react';
import '../css/css/style.css';

export default function NavigationShort(props) {

    function GoBack() {
        window.history.go(-1);
    }

    return(

        <nav className='navigation'>
            <p onClick={GoBack} className="navigation__text navigation__text--backArrow">&lt;</p>
            <p className="navigation__text navigation__text--localization">{props.string}</p>
        </nav>
    )
}