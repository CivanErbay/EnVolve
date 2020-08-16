//const baseURL = process.env.REACT_APP_BASE_URL
const baseURL = "https://envolve-feedback.herokuapp.com"
export async function performLogin(username, password) {

    const response = await fetch(`${baseURL}/auth/login`, { //maybe without auth

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })

    if (response.status !== 200) {
        throw new Error(`failed to login: ${response.statusText}`);
    }

    return await response.text();
}

