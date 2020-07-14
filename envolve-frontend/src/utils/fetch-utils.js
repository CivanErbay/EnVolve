import {getJWTToken} from "./jwt-utils";

export function postRegister(registerData){
    const token = getJWTToken();
    return fetch('/')

}