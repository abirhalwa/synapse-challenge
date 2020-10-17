import React from "react";

export const Message = (route) => {
    const message = route.match.params.message;
    let content = "";
    switch (message) {
        case "first":
            content = `<h1> Welcome to Synapse Course Design </h1>
            <p>Please click on Add Lesson to start the design process</p>`;
            break;
        case "addLesson":
            content = `<h1> Message </h1>
                <p>The lesson has been added successfully</p>`;
            break;
        case "updateLesson":
            content = `<h1> Message </h1>
                <p>The lesson has been updated successfully</p>`;
            break;
        case "removeLesson":
            content = `<h1> Message </h1>
                <p>The lesson has been removed successfully</p>`;
            break;
        case "addTopic":
            content = `<h1> Message </h1>
                <p>The topic has been added successfully</p>`;
            break;
        case "updateTopic":
            content = `<h1> Message </h1>
                <p>The topic has been updated successfully</p>`;
            break;
        default:
            content = `<h1> Message </h1>
                <p>The topic has been removed successfully</p>`;
    }

    return (
        <div className="mainView" dangerouslySetInnerHTML={{ __html: content }}>
        </div>
    );
}