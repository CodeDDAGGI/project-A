import { instance } from "./util/instance";

export const SignupApi = async (inputUser) => {
    try {
        const response = instance.post("/signup", inputUser)
    } catch (error) {
        console.error(error);
    }
}