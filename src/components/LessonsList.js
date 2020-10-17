import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import TopicsList from './TopicsList';

export const LessonsList = () => {

    const { lessons, removeLesson } = useContext(GlobalContext);
    let history = useHistory();

    //to delete a lessom
    const confirmRemove = (id) => {
        hideMenu();
        var response = window.confirm("Are you sure you want to remove this lesson?");
        if (response) {
            removeLesson(id);
            history.push('/home/removeLesson');
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

    //to redirect to addlesson and close the menu 
    const addAndCloseMenu = () => {
        hideMenu();
        history.push('/addLesson');
    }

    //to redirect to editLesson and close the menu 
    const updateAndCloseMenu = (id) => {
        hideMenu();
        history.push(`/editLesson/${id}`);
    }

    return (
        <div>
            <ul>
                {lessons.map((lesson, index) => (
                    <li key={lesson.id} className="lesson">
                        <details>
                            <summary className="box">
                                <Link onClick={() => updateAndCloseMenu(lesson.id)}>
                                    <span className="upperCase"> Lesson {index + 1}</span>
                                    <p className="title">{lesson.title}</p>
                                </Link>
                                <button aria-label="Delete lesson" className="deleteButton" onClick={() => confirmRemove(lesson.id)} title="Remove lesson"><i className="fas fa-trash-alt"></i></button>
                            </summary>
                            <div>
                                <TopicsList lessonId={lesson.id} ></TopicsList>
                            </div>
                        </details>
                    </li>
                ))}
            </ul>
            <div className="rightAlign">
                <button onClick={addAndCloseMenu}> + Add Lesson</button>
            </div>
        </div>

    );
};