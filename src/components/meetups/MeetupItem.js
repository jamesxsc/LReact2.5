import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

const MeetupItem = ({meetup}) => {
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
                    <button>Favorite</button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
