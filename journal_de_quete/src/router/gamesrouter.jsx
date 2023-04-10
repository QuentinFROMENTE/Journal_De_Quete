import '../css/css/style.css';
import NavigationLong from "../composants/navigationLong";
import Games from "../pages/games";

export default function GamesRouter() {
    return(
        <>
          <NavigationLong string="liste de jeux"/>
          <Games/>
        </>
      );
}