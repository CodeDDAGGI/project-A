import { instance } from "./util/instance";

export const SignupApi = async (user) => {
    let signupdata = {
        isSuccess: false,
        ok:{
            message: ""
        },
        fieldErrors: [{
            field: "",
            defaultMessage: ""
        }],

    }
    
    try {
        const response = await instance.post("/signup", user);
        console.log(response.data);
        signupdata = {
            isSuccess: true,
            ok: response.data,
        }
    } catch (error) {
        console.error(error);
        signupdata = {
            isSuccess: false,
            fieldErrors: error.response.data.errors,
        }
    }
}