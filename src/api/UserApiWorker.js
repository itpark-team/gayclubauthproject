import axios from "axios";

class UserApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/secure"
        });
    }

    async getUser(token) {
        return await this.#axios.get("/get-user", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
}

export default UserApiWorker;