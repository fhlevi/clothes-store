import AxiosREST from 'axios';

class ConfigAxios {
    constructor(header={}) {
        this.Axios = AxiosREST.create({
            baseURL: "https://fakestoreapi.com",
            headers: {
                'Content-Type': (header.contentType) ? header.contentType : 'application/json'
            }
        })
    }
}

export default ConfigAxios;