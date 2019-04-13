import http from "./axios";

export default {
    getProjects(){
        return http.get('/projects')
            .then(response => response.data);
    },
    
    getProjectById(id){
        return http.get('/projects/' + id)
            .then(response => response.data);
    }
}
