export function postRegister(registerData){
    return fetch('/api/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registerData),
    }).then((response) => {
        if(response.status !== 200) {
            throw new Error('invalid response')
        }
        return response.text();
    })

}