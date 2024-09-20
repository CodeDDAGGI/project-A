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
            fieldErrors:[]
        }
    } catch (error) {
        console.error(error);
        const response = error.response;
        console.log(response);
        signupdata = {
            isSuccess: false,
            ok:{
                message:"",
                user:null
            },
            fieldErrors: response.data.fieldErrors.map(fieldError => ({
                field: fieldError.field,
                defaultMessage: fieldError.defaultMessage
            }))
        }
        console.log(signupdata.fieldErrors);
    }
    return signupdata;
}