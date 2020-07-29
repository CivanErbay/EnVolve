import {getJWTToken} from "./jwt-utils";

export function postSurvey(survey) {
    const token = getJWTToken();
    return fetch("api/survey", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(survey)
    }).then(() => {
            return true;
        }
    ).catch(() => {
            return false;
        }
    )
}

export async function getSurveyForStudent(studentCode) {
    const token = getJWTToken();
    const response = await fetch(`/api/survey/${studentCode}`, {
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