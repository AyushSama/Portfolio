import React , {useState} from "react";
import AlertContext from "./AlertContext";

const AlertState = (props)=>{

    const [alert , setAlert] = useState({type:'' , message:''});

    const updateAlert = (type,message)=>{
        setAlert({type:type,message:message})
        setTimeout(() => {
            setAlert({type:'',message:''})
        }, 2000);
    }

    return (
        <AlertContext.Provider value={{alert,updateAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;