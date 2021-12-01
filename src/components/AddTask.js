import React from 'react'
import { useState } from 'react';
import Card from './Card';

const AddTask = () => {

    const [task, settask] = useState("");
    const handleOnChange = (e)=>{
        settask(e.target.value);
        // console.log(task);
    }

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!localStorage.getItem("tasks")) { //that is if it could not find the tasks array in localstorage.
            let taskArr = [];
            taskArr.push(task);
            localStorage.setItem("tasks", JSON.stringify(taskArr));
            settask("");
        }
        else{ //if there already is such array
            let taskUpdatedArr = JSON.parse(localStorage.getItem("tasks"));
            taskUpdatedArr.push(task);
            localStorage.setItem("tasks", JSON.stringify(taskUpdatedArr));
            settask("");
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter a task</label>
                    <input type="text" className="form-control" id="task" name="task" value={task} onChange={handleOnChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="container">
                {JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")).map((elem, index) =>{
                    return <Card key={index} taskTextProp = {elem}/>;
                }) : "Nothing to show."}
            </div>
        </div>
    )
}

export default AddTask
