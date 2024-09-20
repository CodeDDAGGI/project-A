import { instance } from "./util/instance"

export const LoginApi = async (user) => {
    let signinData = {
        isSuccess: false,
        token: null
    }

    try {
        const response = await instance.post("/auth/signin", user);
        signinData = {
            isSuccess: true,
            token: response.data,
        }
    } catch (error) {
        const response = error.response;
        console.log(response);
        signinData = {
            isSuccess: false
        }
        if(typeof(response.data) === 'string') {
            signinData['errorStatus'] = 'loginError';
            signinData['error'] = response.data;
        }else {
            signinData['errorStatus'] = 'fieldError';
            signinData['error'] = response.data.map(fieldError => ({
                field: fieldError.field,
                defaultMessage: fieldError.defaultMessage,
            }))
        }
    }
    return signinData;
}