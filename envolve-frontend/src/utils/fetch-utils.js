import {getJWTToken} from "./jwt-utils";

export function postRegister(registerData){
    return fetch('/api/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({registerData}),
    }).then((response) => {
        if(response.status !== 200) {
            throw new Error('invalid response')
        }
        return response.text(); //necessary to handle token in the Browser, which comes with the Fetch from the backend
    })
}

export function postClass(schoolClass) {
    const token = getJWTToken();
    return fetch("api/classes", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(schoolClass)
    })
}

export async function getSchoolClassesByTeacher(teacher){
    const token = getJWTToken();
    const response = await fetch(`/api/classes/${teacher}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (response.status !== 200) {
        throw new Error('something went wrong!!!');
    }
    return await response.json();
}

export async function getClassById(id) {
    const token = getJWTToken();
    const response = await fetch(`/api/classes/class/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (response.status !== 200) {
        throw new Error('something went wrong?');
    }
    return await response.json();
}
