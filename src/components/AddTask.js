import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

const AddTask = () => {

    const [task, settask] = useState("");
    //We should use local storage as a server and maintain a use state of array and whenever something happens update it. map through this array only not the local storage one.

    const [clientarray, setClientarray] = useState([]);


    const handleOnChange = (e)=>{
        settask(e.target.value);
    }

    useEffect(() => {
        
        if (localStorage.getItem("tasks")) {
            setClientarray(JSON.parse(localStorage.getItem("tasks")));
        }

    }, [])


    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!localStorage.getItem("tasks")) { //that is if it could not find the tasks array in localstorage.
            let taskArr = [];
            taskArr.push(task);
            localStorage.setItem("tasks", JSON.stringify(taskArr));

            //client side
            setClientarray(JSON.parse(localStorage.getItem("tasks")));
            settask("");
        }
        else{ //if there already is such array
            let taskUpdatedArr = JSON.parse(localStorage.getItem("tasks"));
            taskUpdatedArr.push(task);
            localStorage.setItem("tasks", JSON.stringify(taskUpdatedArr));

            //client side
            setClientarray(JSON.parse(localStorage.getItem("tasks")));
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

            <div className="container row my-3 mx-3">
                {clientarray.length !== 0 ? clientarray.map((elem, index) =>{
                    return <Card key={index} taskTextProp = {elem} stateProp = {task} setStateProp = {settask} indexProp = {index} clientArrayProp = {clientarray} setClientArrayProp = {setClientarray} />;
                }) : "No tasks, yet."}
            </div>
        </div>
    )
}

export default AddTask
