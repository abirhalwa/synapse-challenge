import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    lessons: [],
    topics: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeLesson(id) {
        dispatch({
            type: "REMOVE_LESSON",
            payload: id
        });

    }

    function addLesson(lesson) {
        dispatch({
            type: "ADD_LESSON",
            payload: lesson
        });
    }

    function editLesson(lesson) {
        dispatch({
            type: "EDIT_LESSON",
            payload: lesson
        });
    }
    function removeTopic(id) {
        dispatch({
            type: "REMOVE_TOPIC",
            payload: id
        });
    }

    function addTopic(topic) {
        dispatch({
            type: "ADD_TOPIC",
            payload: topic
        });
    }

    function editTopic(topic) {
        dispatch({
            type: "EDIT_TOPIC",
            payload: topic
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                lessons: state.lessons,
                removeLesson,
                addLesson,
                editLesson,
                topics: state.topics,
                removeTopic,
                addTopic,
                editTopic
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};