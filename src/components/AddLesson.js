import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddLesson = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { addLesson } = useContext(GlobalContext);
    let history = useHistory();

    //to save the lesson information 
    const onSubmit = e => {
        e.preventDefault();
        const newLesson = {
            id: Date.now().toString(), //create a unique id for the lesson
            title,
            description
        };
        addLesson(newLesson);
        history.push("/home/addLesson"); //to change the url
    };

    return (
        <form onSubmit={onSubmit} className="box mainView">
            <div>
                <label htmlFor="title"> Title</label>
            </div>
            <div>
                <input id="title" value={title} onChange={e => setTitle(e.target.value)} required type="text" placeholder="Let's create your Lesson title" />
            </div>
            <div>
                <label htmlFor="description" > Description </label>
            </div>
            <div>
                <input id="description" value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Lesson description" />
            </div>
            <div className="rightAlign">
                <button type="submit"> save </button>
                <Link to="/home/first"> <button> cancel </button></Link>
            </div>
        </form>
    );
};