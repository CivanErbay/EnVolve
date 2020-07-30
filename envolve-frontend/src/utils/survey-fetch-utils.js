import {getJWTToken} from "./jwt-utils";

export function postNewSurvey(survey) {
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
/*    const token = getJWTToken();*/
    const response = await fetch(`/api/survey/${studentCode}`, {
        method: 'GET',
      /*  headers: {
            Authorization: `Bearer ${token}`,
        },*/
    })
    if (response.status !== 200) {
    return false
    }
    return await response.json();
}

export function postSurveyAnswer(survey) {
/*
    const token = getJWTToken();
*/
    //ACHTUNG das slash / vor api/... ist wichtig, damit der fetch funktioniert!
    return fetch("/api/survey/feedback", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
/*
            Authorization: `Bearer ${token}`,
*/
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