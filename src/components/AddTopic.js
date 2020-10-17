import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddTopic = (route) => {

    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const { addTopic } = useContext(GlobalContext);
    let history = useHistory();
    const currentLessonId = route.match.params.id; //obtain the lesson id parameter

    //to save topic information
    const onSubmit = e => {
        e.preventDefault();
        const newTopic = {
            id: Date.now().toString(), //to generate a unique id for the topic
            lessonId: currentLessonId,
            title,
            link
        };
        addTopic(newTopic);//to call the reducer
        history.push("/home/addTopic");
    };

    return (
        <form onSubmit={onSubmit} className="box mainView">
            <div>
                <label htmlFor="title"> Title</label>
            </div>
            <div>
                <input id="title" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Let's create your Topic title" />
            </div>
            <div>
                <label htmlFor="link" > Link </label>
            </div>
            <div>
                <input id="link" value={link} onChange={e => setLink(e.target.value)} type="text" placeholder="Topic link" />
            </div>
            <div className="rightAlign">
                <button type="submit" > save </button>
                <Link to="/home/first">   <button > cancel </button></Link>
            </div>
        </form>
    );
};