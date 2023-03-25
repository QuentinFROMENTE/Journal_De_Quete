import React from "react";
import '../css/css/style.css';
import Logo from '../assets/icones/open-book.png';
import Button from "../composants/button";
import Footer from "../composants/footer";
import { useState, useEffect } from "react";
import { ReadCookie } from "../js/utils";

export default function Acceuil() {
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
                    <Button strings="Charger un Profil" URL="LoadSave"/>
                    : null }
                {isNumberOfSaved < 3 ?
                    <Button strings="Nouveau Profil" URL="NewSave"/>
                    : null}
            </div>
            <Footer/>
        </>
    );
}