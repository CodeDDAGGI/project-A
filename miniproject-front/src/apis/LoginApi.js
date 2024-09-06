import { instance } from "./util/instance"

export const LoginApi = async (user) => {
    try {
        const response = await instance.post("/auth/signin", user);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}