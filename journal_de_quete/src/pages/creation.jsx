import React from "react";
import { useRef } from "react";
import { CreateCookie, ReadCookie } from "../js/utils";
import Utilisateur from "../js/cookie";

export default function Creation() {

    const playerName = useRef("");

    function AddProfil() {
        
        let player = playerName.current.value;

        if (document.cookie) {
            let cookie = JSON.parse(ReadCookie());
            /*faire une vérification de l'inexistance du nouveau profil*/
            
            cookie.DATA.push(new Utilisateur(player));
            CreateCookie(cookie);

        } else {
            let newSave = {DATA: [new Utilisateur(player)]};
            let cookie = JSON.stringify(newSave);
            CreateCookie(cookie);
        }
      
    }

    return (
        <>
            <form method="post" className="creation">
                <label for="name">Nom de la Sauvegarde :</label>
                <input type="text" id="name" name="user_name" className="creation__input" ref={playerName}/>
            </form>
            <button onClick={AddProfil} className="button button__navigation button__navigation--validation">Créer Sauvegarde</button>
        </>
    )
}