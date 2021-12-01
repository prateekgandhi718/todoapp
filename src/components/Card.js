import React from 'react'

const Card = (props) => {
    return (
        <div className="card" style = {{width: "18rem"}} >
            <div className="card-body">
                <p className="card-text">{props.taskTextProp}</p>
            </div>
        </div>
    )
}

export default Card
