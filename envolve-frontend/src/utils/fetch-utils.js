import {getJWTToken} from "./jwt-utils";
//const baseURL = process.env.REACT_APP_BASE_URL
const baseURL = "https://envolve-feedback.herokuapp.com"

export function postClass(schoolClass) {
    const token = getJWTToken();
    return fetch(`${baseURL}/api/classes`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(schoolClass)
    }).then(() => {
            return true;
        }
    ).catch(() => {
            return false;
        }
    )
}

export async function getSchoolClassesByTeacher(teacher) {
    const token = getJWTToken();
    const response = await fetch(`${baseURL}/api/classes/${teacher}`, {
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
    const response = await fetch(`${baseURL}/api/classes/class/${id}`, {
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

export function deleteClassById(id) {
    const token = getJWTToken();
    return fetch(`${baseURL}/api/classes/class/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then(() => {
        return true
    }).catch(() => {
        return false
    })

}