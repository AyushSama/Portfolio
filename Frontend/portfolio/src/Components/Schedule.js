import React, { useState, useEffect } from "react";
import ScheduleItem from "./ScheduleItem";
import AddSchedule from "./AddSchedule";
import { Link } from "react-router-dom";

export default function Schedule() {
    const [schedule, setSchedule] = useState([]);

    const updateSchedule = async () => {
        try {
            const apiUrl = "http://localhost:5000/api/admin/schedule";
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "auth-token": localStorage.getItem("auth-token"),
                },
            });
            let ele = await response.json();
            if (ele.message !== "Access Denied!!") setSchedule(ele);
            else alert(ele.message);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        updateSchedule();
    }, []);

    return (
        <div className="container">
            <div className="d-flex justify-content-between my-3">
                <h2> Your Schedules: </h2>
                <Link to="/addSchedule">
                    <button type="button" class="btn btn-success">
                        <span class="material-symbols-outlined">add</span>
                    </button>
                </Link>
            </div>
            <div className="row">
                {schedule.map &&
                    schedule.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <ScheduleItem
                                title={item.title}
                                description={item.description}
                                venue={item.venue}
                                date={item.date}
                                _id = {item._id}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
