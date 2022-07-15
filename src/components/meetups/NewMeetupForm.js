import {useRef} from "react";
import classes from './NewMeetupForm.module.css'
import Card from "../ui/Card";

const NewMeetupForm = ({handleSubmit}) => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()

        const meetup = {
            title: titleInputRef.current.value,
            image: imageInputRef.current.value,
            address: addressInputRef.current.value,
            description: descriptionInputRef.current.value
        }

        handleSubmit(meetup)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmit}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image URL</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea required rows='5' id='description' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
};

export default NewMeetupForm;
