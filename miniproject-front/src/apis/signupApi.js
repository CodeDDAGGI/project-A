import { instance } from "./util/instance";

export const SignupApi = async (user) => {
    let signupdata = {
        isSuccess : false,
        ok: {
            message : "",
            user : null
        },
        fieldErrors: [
            {
                field: "",
                defaultMessage: ""
            }
        ]
    }
    
    try {
        const response = await instance.post("/auth/signup", user);
        console.log(response.data);
        signupdata = {
            isSuccess: true,
            ok: response.data,
        }
    } catch (error) {
        const response = error.response;
        signupdata = {
            isSuccess: false,
            fieldErrors: response.data.fieldErrors.map(fieldError => ({
                field: fieldError.field,
                defaultMessage: fieldError.defaultMessage
            }))
        }
    }
    return signupdata;
}