import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from 'react'

const AllMeetupsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://react-meetups-fbc03-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'GET'
            })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                const meetupsArray = []
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                    meetupsArray.push(meetup)
                }
                setMeetups(meetupsArray)
                setIsLoading(false)
            })
    }, [/*run when deps (states) change*/]);


    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={meetups}/>
        </section>
    );
};

export default AllMeetupsPage;
