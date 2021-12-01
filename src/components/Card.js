import React from 'react'

const Card = (props) => {

    const handleOnClick = (ind) =>{
        let array = JSON.parse(localStorage.getItem("tasks"));
        array.splice(ind, 1);
        localStorage.setItem("tasks", JSON.stringify(array));

        //client side
        props.setClientArrayProp(JSON.parse(localStorage.getItem("tasks")));
        props.setStateProp(" ");
    }
    return (
        <div className="card" style={{ width: "18rem" }} >
            <div className="card-body">
                <p className="card-text">{props.taskTextProp}</p>
                <i className="far fa-check-circle" style = {{cursor: "pointer"}} onClick = {() => handleOnClick(props.indexProp)}></i>
            </div>
        </div>
    )
}

export default Card
