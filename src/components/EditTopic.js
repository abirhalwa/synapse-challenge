import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory, Link } from "react-router-dom";

export const EditTopic = (route) => {

    let history = useHistory();
    const { topics, editTopic } = useContext(GlobalContext);
    const [selectedTopic, setSeletedTopic] = useState({ id: '', topicId: '', name: '', description: '' });

    //to load the selected topic  whenever recieving a new topic id in the url
    useEffect(() => {
        const selectedTopic = topics.find(topic => topic.id === route.match.params.id);
        setSeletedTopic(selectedTopic);
    }, route.match.params.id);

    // to submit the changes to the global state
    const onSubmit = e => {
        e.preventDefault();
        editTopic(selectedTopic);
        history.push('/home/updateTopic');
    }

    //to change the value of the selectedlesson local state
    const handleOnChange = (topicKey, value) => setSeletedTopic({ ...selectedTopic, [topicKey]: value });

    // return nothing when there is no matching topic
    if (!selectedTopic || !selectedTopic.id) {
        return null;
    }

    return (
        <form onSubmit={onSubmit} className="mainView">
            <div >
                <label htmlFor="title" > Topic Title</label>
            </div>
            <div>
                <input id="title" value={selectedTopic.title} onChange={e => handleOnChange("title", e.target.value)} type="text" placeholder="Topic title" required />
            </div>
            <div>
                <label htmlFor="link">Link</label>
            </div>
            <div>
                <input value={selectedTopic.link} onChange={e => handleOnChange("link", e.target.value)} type="text" placeholder="Topic Link" />
            </div>
            <div className="rightAlign">
                <button type="submit"> save </button>
                <Link to="/home/first"> <button> cancel </button></Link>
            </div>
        </form>
    );
};