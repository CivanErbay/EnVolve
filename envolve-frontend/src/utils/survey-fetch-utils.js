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