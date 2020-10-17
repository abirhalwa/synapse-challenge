import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";

const TopicsList = (props) => {

    const { topics, removeTopic } = useContext(GlobalContext);
    const history = useHistory();

    // to remove a topic
    const confirmRemove = (id) => {
        hideMenu();
        var response = window.confirm("Are you sure you want to remove this topic?");
        if (response) {
            removeTopic(id);
            history.push('/home/removeTopic');
        }
        else {
            history.push('/home/first');
        }
    }

    //to hide the nav menu in small devices
    const hideMenu = () => {
        const menu = document.getElementsByClassName('treeComponent')[0];
        document.getElementById("menuLabel").classList.toggle("change");
        menu.style.left = "-100%";
    }

    //to redirect to addTopic and close the menu 
    const addAndCloseMenu = () => {
        hideMenu();
        history.push(`/addTopic/${props.lessonId}`);
    }

    //to redirect to editTopic and close the menu 
    const updateAndCloseMenu = (id) => {
        hideMenu();
        history.push(`/editTopic/${id}`);
    }

    return (
        <div >
            <ul>
                {topics.filter(topic => topic.lessonId == props.lessonId).map((filteredTopic, index) => (
                    <li className="box topic" key={filteredTopic.id}>
                        <Link onClick={() => updateAndCloseMenu(filteredTopic.id)} >
                            <span className="upperCase"> topic {index + 1}</span>
                            <p className="title">{filteredTopic.title}</p>
                        </Link>
                        <button aria-label="Delete topic" className="deleteButton" onClick={() => confirmRemove(filteredTopic.id)} title="Remove topic"><i className="fas fa-trash-alt"></i></button>
                    </li>
                ))}
            </ul>
            <div className="rightAlign">
                <button onClick={addAndCloseMenu}> + Add Topic</button>
            </div>
        </div>
    );
};
export default TopicsList;