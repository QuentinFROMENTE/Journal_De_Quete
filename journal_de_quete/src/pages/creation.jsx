import React from "react";
import { useRef, useState } from "react";
import { CreateCookie, ReadCookie } from "../js/utils";
import Utilisateur from "../js/cookie";
import AlertBox from "../composants/alertBox";
import NavigationShort from "../composants/navigationShort";

export default function Creation() {

    const playerName = useRef("");
    const [isAllReadyUsed, setIsAllReadyUsed] = useState(false);

    function AddProfil() {
        
        let player = playerName.current.value;

        if (document.cookie) {
            let cookie = ReadCookie();

            /*faire une vérification de l'inexistance du nouveau profil*/

            let isExist = 0;
            for ( let i = 0; i < cookie.DATA.length; i++) {
                if (player === cookie.DATA[i].name) {
                    isExist = 1;
                }
            }

            /*Alerte si Pseudo déjà utiliser sinon enregistrement*/

            if (isExist !== 0) {
                setIsAllReadyUsed(true);
            } else {
                cookie.DATA.push(new Utilisateur(player));
                CreateCookie(cookie);
            }

        } else {
            let cookie = {DATA: [new Utilisateur(player)]};
            CreateCookie(cookie);
        }
    }

    return (
        <>
            <NavigationShort string="Création du profil"/>
            <form method="post" className="creation">
                <label for="name">Nom de la Sauvegarde :</label>
                <input type="text" id="name" name="user_name" className="creation__input" ref={playerName}/>
            </form>
            <button onClick={AddProfil} className="button button__navigation button__navigation--validation">Créer Sauvegarde</button>
            {isAllReadyUsed ? <AlertBox string="Pseudo déjà utilisé"/> : null}
        </>
    )
}