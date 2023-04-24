import React from "react";
import '../css/css/style.css';
import { ReadCookie } from "../js/utils";
import { Link } from "react-router-dom";
import NavigationShort from "../composants/navigationShort";

export default function Chargement() {
        let profil = ReadCookie();
        const listProfils = profil.DATA.map((profilName, index) => 
            <Link to={`/${profilName.name}`} className="button button__navigation loadSave__link" key={index}>{profilName.name}</Link>
        );

    return (
        <>
            <NavigationShort string="Selection du profil :"/>
            <div className="loadSave__link">
                {listProfils}
            </div>
        </>
    );
}