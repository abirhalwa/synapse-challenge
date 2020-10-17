import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const EditLesson = (route) => {

    let history = useHistory();
    const { lessons, editLesson } = useContext(GlobalContext);
    const [selectedLesson, setSeletedLesson] = useState({ id: '', name: '', description: '' });

    //to load the selected lesson whenever recieving a new lesson id in the url
    useEffect(() => {
        const selectedLesson = lessons.find(lesson => lesson.id === route.match.params.id);
        setSeletedLesson(selectedLesson);
    }, route.match.params.id);

    // to submit the changes to the global state
    const onSubmit = e => {
        e.preventDefault();
        editLesson(selectedLesson);
        history.push('/home/updateLesson');
    }

    //to change the value of the selectedlesson local state
    const handleOnChange = (lessonKey, value) => setSeletedLesson({ ...selectedLesson, [lessonKey]: value });

    // return nothing when there is no matching lesson
    if (!selectedLesson || !selectedLesson.id) {
        return null;
    }

    return (
        <form onSubmit={onSubmit} className="mainView">
            <div >
                <label htmlFor="title" > Lesson Title</label>
            </div>
            <div>
                <input id="title" value={selectedLesson.title} onChange={e => handleOnChange("title", e.target.value)} type="text" placeholder="Lesson title" required />
            </div>
            <div>
                <label htmlFor="description">Description</label>
            </div>
            <div>
                <input id="description" value={selectedLesson.description} onChange={e => handleOnChange("description", e.target.value)} type="text" placeholder="Lesson description" />
            </div>
            <div className="rightAlign">
                <button type="submit"> save </button>
                <Link to="/home/first"><button> cancel </button></Link>
            </div>
        </form>
    );
};