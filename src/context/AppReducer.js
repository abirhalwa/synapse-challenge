export default (state, action) => {
    switch (action.type) {
        case "REMOVE_LESSON":
            return {
                ...state,
                topics: state.topics.filter(topic=> topic.lessonId !== action.payload),
                lessons: state.lessons.filter(lesson => lesson.id !== action.payload)
            };
        case "ADD_LESSON":
            return {
                ...state,
                lessons: [...state.lessons, action.payload]
            };
        case "EDIT_LESSON":
            const updatedLesson = action.payload;
            const updatedLessons = state.lessons.map(lesson => {
                if (lesson.id === updatedLesson.id) {
                    return updatedLesson;
                }
                return lesson;
            });
            return {
                ...state,
                lessons: updatedLessons
            };
        case "REMOVE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(topic => topic.id !== action.payload)
            };
        case "ADD_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.payload]
            };
        case "EDIT_TOPIC":
            const updatedTopic = action.payload;
            const updatedTopics = state.topics.map(topic => {
                if (topic.id === updatedTopic.id) {
                    return updatedTopic;
                }
                return topic;
            });
            return {
                ...state,
                topics: updatedTopics
            };
        default:
            return state;
    }
};