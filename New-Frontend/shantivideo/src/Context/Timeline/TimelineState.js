import React, { useContext, useState } from "react";
import TimelineContext from './TimelineContext'
import AlertContext from '../Alerts/AlertContext'

const TimelineState = (props)=>{

    const alertt = useContext(AlertContext)

    const [schedule , setSchedule] = useState([]);

    const handleDisplaySchedule = async () => {
        try {
            const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/admin/schedule`;
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "auth-token": localStorage.getItem("auth-token"),
                },
            });
            let ele = await response.json();
            if (ele.message !== "Access Denied!!") setSchedule(ele);
            else alertt.updateAlert('danger',ele.message);
            console.log(ele)
        } catch (error) {
            alert(error);
        }
    };

    return (
        <TimelineContext.Provider value={{schedule,handleDisplaySchedule}}>
            {props.children}
        </TimelineContext.Provider>
    )
}

export default TimelineState