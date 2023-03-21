/* strucutre du cookie*/

let Data = {
    "Data" : [
        {
            "Name": "Utlisateur1",
            "Game1": {
                "Histoire Principal": {},
                "Quêtes secondaire": {}
            }
        },
        {
            "Name": "Utilisateur2",
            "Game1": {
                "Histoire Principal": {},
                "Quêtes secondaire": {}
            }
        }
    ]
};

/*Créateur de classe pour le cookie*/

export default class Utilisateur {
    constructor (player) {
        this.name = player;
    }
}