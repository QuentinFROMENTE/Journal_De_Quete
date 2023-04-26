import React from "react";
import {Link} from 'react-router-dom';
import '../css/css/style.css';

export default function Footer() {

    return (
        <footer className="footer">
            <Link to={"https://github.com/QuentinFROMENTE/Journal_De_Quete"} className="footer__link" target="_blank" rel="noreferrer">Lien GitHub</Link>
            <Link to={"about"} className="footer__link">À propos</Link>
            <Link to={"devlog"} className="footer__link">Versionnage</Link>
        </footer>
    )

}