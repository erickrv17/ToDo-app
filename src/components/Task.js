import React from "react";

const Task = ({name}) => {
    return(
        <div className="tasks-list">
            <h1>{name}</h1>
        </div>
    )
}

export default Task;