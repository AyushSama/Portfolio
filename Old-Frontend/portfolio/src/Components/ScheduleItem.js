import React from "react";
import UpdateSchedule from "./UpdateSchedule";

export default function ScheduleItem(props) {
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const id = props._id;
            const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/deleteschedule/${id}`;
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
            });
            let ele = await response.json();
            alert(ele.message);
        } catch (error) {
            alert(error);
        }
    };

   

    return (
        <div>
            <div className="card my-3" style={{ backgroundColor: "black" }}>
                <div className="card-header d-flex bd-highlight mb-3">
                    <div className="me-auto p-2 bd-highlight">
                        {" "}
                        {props.title}
                    </div>
                    <div className="btn p-2 bd-highlight mx-2">
                        <span
                            onClick={handleDelete}
                            className="material-symbols-outlined  mx-1"
                        >
                            delete
                        </span>
                    </div>
                    <UpdateSchedule title={props.title}
                                description={props.description}
                                venue={props.venue}
                                date={props.date}
                                _id = {props._id}/>
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
