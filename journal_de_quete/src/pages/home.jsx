import React from "react";
import '../css/css/style.css';
import Logo from '../assets/icones/open-book.png';
import { Link } from "react-router-dom";
import Footer from "../composants/footer";
import { useState, useEffect } from "react";
import { ReadCookie } from "../js/utils";

export default function Home() {
    const [isSaved, setIsSaved] = useState(false);
    const [isNumberOfSaved, setIsNumberOfSaved] = useState(0);

    useEffect(() => {
        if (document.cookie) {
            setIsSaved(true);
            setIsNumberOfSaved(ReadCookie().DATA.length);
        }
    },[]);
    
    return (
        <>
            <img src={Logo} className="reception__logo" alt="Journal personnel permettant le suivie de vos aventures"/>
            <p className="reception__title">Journal de Quêtes</p>
            <div className="reception__navigation">
                {isSaved ? 
                    <Link to={"LoadSave"} className="button button__navigation">Charger un Profil</Link>
                    : null }
                {isNumberOfSaved < 3 ?
                    <Link to={"NewSave"} className="button button__navigation">Nouveau Profill</Link>
                    : null}
            </div>
            <Footer/>
        </>
    );
}