import React from "react";

export default function TimelineItem(props) {

    return (
        <div>
            <div className="card my-3" style={{border:'1px solid green' , fontFamily:'Spectral, serif'}}>
                <div className="card-header d-flex bd-highlight mb-3">
                    <h5 className="me-auto p-2 bd-highlight">
                        {" "}
                        {props.title}
                    </h5>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{props.venue}</h3>
                    <h6 className="card-text my-3">{props.description}</h6>
                    <p href="#" className="btn btn-warning">
                        {props.date}
                    </p>
                </div>
            </div>
        </div>
    );
}
