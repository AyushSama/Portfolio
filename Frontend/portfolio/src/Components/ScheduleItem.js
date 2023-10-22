import React from "react";

export default function ScheduleItem(props) {
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const id = props._id;
            const apiUrl = `http://localhost:5000/api/admin/deleteschedule/${id}`;
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(props._id);
        try {
            const id = props._id;
            const apiUrl = `http://localhost:5000/api/admin/updateschedule/${id}`;
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
                body : JSON.stringify({
                    title: "Helo ther"
                }),
            });
            let ele = await response.json();
            alert(ele.message);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <div className="card my-3" style={{backgroundColor:'black'}}>
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
                    <div className="btn p-2 bd-highlight">
                        <span
                            onClick={handleUpdate}
                            className="material-symbols-outlined"
                        >
                            settings
                        </span>
                    </div>
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
