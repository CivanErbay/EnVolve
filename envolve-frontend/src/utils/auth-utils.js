//const baseURL = process.env.REACT_APP_BASE_URL
// const baseURL = "https://envolve-feedback.herokuapp.com"
const baseURL = "http://localhost:8080"


export async function performLogin(username, password) {

    const response = await fetch(`${baseURL}/auth/login`, { //maybe without auth

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    })

    if (response.status !== 200) {
        throw new Error(`failed to login: ${response.statusText}`);
    }

    return await response.text();
}

export function postRegister(registerData) {
    return fetch(`${baseURL}/auth/register`, { //maybe without auth
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerData),
    }).then((response) => {
        console.log(response)
        if (response) {
               return response.text(); //necessary to handle token in the Browser, which comes with the Fetch from the backend
        }
        else if (response.status !== 200) {
            throw new Error('invalid response')
        }
    })
}

