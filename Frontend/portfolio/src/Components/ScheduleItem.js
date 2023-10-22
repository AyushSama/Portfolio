import React from "react";

export default function ScheduleItem(props) {

    const handleDelete = (e)=>{
        e.preventDefault();
        console.log(props._id)
    }

    return (
        <div>
            <div className="card my-3">
                <div className="card-header d-flex bd-highlight mb-3">
                    <div className="me-auto p-2 bd-highlight"> {props.title}</div>
                    <span onClick={handleDelete} className="material-symbols-outlined p-2 bd-highlight">
                        delete
                    </span>
                    <span className="material-symbols-outlined p-2 bd-highlight">
                        settings
                    </span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.venue}</h5>
                    <p className="card-text">{props.description}</p>
                    <p href="#" className="btn btn-success">
                        {props.date}
                    </p>
                </div>
            </div>
        </div>
    );
}
