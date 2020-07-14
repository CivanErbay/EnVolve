import {Redirect} from "react-router-dom";
import React from "react";


export function postRegister(registerData){
    return fetch('/api/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerData),
    }).then((response) => {
        if(response.status !== 200) {
            throw new Error('invalid response')
        }
        console.log("success?")
        return <Redirect to={'/overview'} />;
    })

}