import React, { Fragment } from 'react';
import { LessonsList } from './LessonsList';

export const Tree = () => {
    return (
     <Fragment>
            <div >
                <div className="box">
                    Course
            </div>
                <LessonsList></LessonsList>
            </div>
        </Fragment>
    );
}