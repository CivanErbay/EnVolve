const jwtDecode = require('jwt-decode');

const key = 'teacher-token';

export function getJWTToken() {
    return localStorage.getItem(key);
}

export function removeJWTToken() {
    return localStorage.removeItem(key);
}

export function setJWTToken(token) {
    return localStorage.setItem(key, token);
}

export function isJWTTokenValid() {
    const jwtToken = getJWTToken();
    if (!jwtToken) {
        return false;
    }
    const decodedToken = getDecodedJWTToken();
    return new Date().getTime() / 1000 < decodedToken.exp;
}

export function getDecodedJWTToken() {
    const jwtToken = getJWTToken();
    return jwtDecode(jwtToken);

}
