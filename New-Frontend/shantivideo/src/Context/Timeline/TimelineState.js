import React from "react";
import TimelineContext from './TimelineContext'

const TimelineState = (props)=>{
    return (
        <TimelineContext.Provider>
            {props.children}
        </TimelineContext.Provider>
    )
}

export default TimelineState