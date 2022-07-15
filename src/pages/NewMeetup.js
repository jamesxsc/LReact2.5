import {useNavigate} from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (meetup) => {
        fetch('https://react-meetups-fbc03-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(meetup)
            }).then(() => {
                navigate('/')
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm handleSubmit={handleSubmit}/>
        </section>
    );
};

export default NewMeetupPage;
