import {getJWTToken} from "./jwt-utils";

export function postRegister(registerData) {
    return fetch('https://envolve-2d3d3.web.app/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerData),
    }).then((response) => {
        if (response.status !== 200) {
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
    const response = await fetch(`https://envolve-2d3d3.web.app/api/classes/${teacher}`, {
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
    const response = await fetch(`https://envolve-2d3d3.web.app/api/classes/class/${id}`, {
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
    return fetch(`/api/classes/class/${id}`, {
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