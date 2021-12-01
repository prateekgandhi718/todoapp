import React from 'react'

const Card = (props) => {

    const handleOnClick = (e) =>{
        e.preventDefault();
        let element = props.taskTextProp;
        // console.log(element);
        let array = JSON.parse(localStorage.getItem("tasks"));
        let index = array.indexOf(element);
        array.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(array));
        props.setStateProp(" ");
    }
    return (
        <div className="card" style={{ width: "18rem" }} >
            <div className="card-body">
                <p className="card-text">{props.taskTextProp}</p>
                <i className="far fa-check-circle" style = {{cursor: "pointer"}} onClick = {handleOnClick}></i>
            </div>
        </div>
    )
}

export default Card
