import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from "../../store/favorites-context";
import {useContext} from "react";

const MeetupItem = ({meetup}) => {
    const favoritesContext = useContext(FavoritesContext);

    const isFavorite = favoritesContext.itemIsFavorite(meetup.id);

    function toggleFavoriteStatusHandler() {
        if (isFavorite) {
            favoritesContext.removeFavorite(meetup.id)
        } else {
            favoritesContext.addFavorite(meetup)
        }
    }

    return (
        <li className={classes.item} key={meetup.id}>
            <Card>
                <div className={classes.image}>
                    <img src={meetup.image} alt={meetup.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{meetup.title}</h3>
                    <address>{meetup.address}</address>
                    <p>{meetup.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
