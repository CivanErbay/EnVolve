import {getJWTToken} from "./jwt-utils";

/*const baseURL = "https://envolve-feedback.herokuapp.com"*/
const baseURL = process.env.REACT_APP_BASE_URL

export function postNewSurvey(survey) {
    const token = getJWTToken();
    return fetch( `${baseURL}/api/survey`, {
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
    const response = await fetch(`${baseURL}/api/survey/${studentCode}`, {
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

    //ACHTUNG das slash / vor api/... ist wichtig, damit der fetch funktioniert!
    return fetch(`${baseURL}/api/survey/feedback`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
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


export async function getSurveyAnswerListByClassId(schoolClassId) {
    const token = getJWTToken();
    const response = await fetch(`${baseURL}/api/survey/feedback/all/${schoolClassId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (response.status !== 200) {
        throw new Error('something went wrong!!!');
    }
    return await response.json();


}export async function clearSurveyByClassId(schoolClassId) {
    const token = getJWTToken();
    return fetch(`${baseURL}/api/survey/clear/${schoolClassId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(() => {
    return true
    }).catch(() => {
    return false
    })

}