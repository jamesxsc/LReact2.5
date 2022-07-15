import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <section>
            <h1>Favorite Meetups</h1>
            <MeetupList meetups={favoritesContext.favorites}/>
        </section>
    );
};

export default FavoritesPage;
