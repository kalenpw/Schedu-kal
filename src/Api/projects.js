import http from "./axios";

export default {
    getProjects(){
        return http.get('/projects')
            .then(response => response.data);
    }
}
