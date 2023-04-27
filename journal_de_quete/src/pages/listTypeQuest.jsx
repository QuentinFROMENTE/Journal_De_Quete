import React from "react";
import {useParams, Link} from 'react-router-dom';
import NavigationLong from '../composants/navigationLong';

export default function ListTypeQuest(){

    const {profilName, game} = useParams();
    const dataGame = require(`../database/Games/${game}.json`);

    let typeQuestArray = [];
    for (let typeQuest in dataGame.questList) {
        typeQuestArray.push(dataGame.questList[typeQuest]);
    }

    return(
        <>
            <NavigationLong string={dataGame.name}/>
            {typeQuestArray.map((data, index)=>{
                return <Link to={`/${profilName}/${game}/${data.URL}`} key={index} className="button button__navigation">{data.titleType}</Link>
            })}
        </>
    )
}