const baseURL = process.env.REACT_APP_BASE_URL
export async function performLogin(username, password) {

    const response = await fetch(`${baseURL}/auth/login`, {

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

