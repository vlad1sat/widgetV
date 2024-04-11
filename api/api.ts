import axios from "axios";

const $api = axios.create({
    baseURL: "http://api.weatherapi.com/v1/current.json",
    timeout: 5000,
    params: {
        key: "5152041a3ee449b89cf194124240604"
    }
})

export default $api
