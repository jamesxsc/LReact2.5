import classes from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

const MeetupList = ({meetups}) => {
    return (
        <ul className={classes.list}>
            {meetups.map((meetup) =>
                <MeetupItem meetup={meetup} key={meetup.id}/>
            )}
        </ul>
    );
};

export default MeetupList;
