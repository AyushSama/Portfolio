import React, { useState } from "react";

export default function AddSchedule() {

    const [title, setTitle] = useState("");
    const [venue, setVenue] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleVenue = (event) => {
        setVenue(event.target.value);
    };

    const handleDesc = (event) => {
        setDesc(event.target.value);
    };

    const handleDate = (event) => {
        setDate(event.target.value);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = "https://shantivideo-7crh.onrender.com/api/admin/addschedule";
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("auth-token"),
                },
                body: JSON.stringify({
                    title: title,
                    description: desc,
                    venue: venue,
                    date: date,
                }),
            });
            let ele = await response.json();
            alert(ele.message);
            console.log(ele);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <div class="container my-5" style={{ width: "50%" }}>
                <div class="form-body">
                    <div class="row">
                        <div class="form-holder">
                            <div class="form-content">
                                <div class="form-items">
                                    <h3>Register For New Events?</h3>
                                    <p>Fill in the data below.</p>
                                    <form
                                        class="requires-validation"
                                        novalidate
                                        onSubmit={handleOnSubmit}
                                    >
                                        <div class="col-md-12 my-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="name"
                                                placeholder="Title / Full Name"
                                                required
                                                onChange={handleTitle}
                                            />
                                            <div class="valid-feedback">
                                                Username field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Username field cannot be blank!
                                            </div>
                                        </div>

                                        <div class="col-md-12 my-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="venue"
                                                placeholder="Venue"
                                                required
                                                onChange={handleVenue}
                                            />
                                            <div class="valid-feedback">
                                                Venue field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Venue field cannot be blank!
                                            </div>
                                        </div>

                                        <div class="col-md-12 my-3">
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="description"
                                                placeholder="Description"
                                                required
                                                onChange={handleDesc}
                                            />
                                            <div class="valid-feedback">
                                                Description field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Description field cannot be
                                                blank!
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <input
                                                class="form-control"
                                                type="date"
                                                name="date"
                                                required
                                                onChange={handleDate}
                                            />
                                            <div class="valid-feedback">
                                                Date field is valid!
                                            </div>
                                            <div class="invalid-feedback">
                                                Date field cannot be blank!
                                            </div>
                                        </div>

                                        <div class="form-button mt-3 text-center">
                                            <button
                                                id="submit"
                                                type="submit"
                                                class="btn btn-outline-warning"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
