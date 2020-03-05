import React, { Component, createContext, useContext, useState, useEffect } from "react";

// Make a new context
export const EnvContext = createContext();
export const useEnv = () => useContext(EnvContext)

const EnvProvider = props => {

    const [statusUrl, setStatusUrl] = useState("");

    useEffect(() => {
        if(process.env.NODE_ENV === "development") {
            setStatusUrl("http://localhost:3000")
        } else {
            setStatusUrl("https://h3-staffing.now.sh")
        }
    }, [])

    return (
        <EnvContext.Provider value={statusUrl}>
            {props.children}
        </EnvContext.Provider>
    )
}

export default EnvProvider;