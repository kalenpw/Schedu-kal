import http from "Api/axios.js";

export default {
    createProject(title, category, dateDue){
        let formData = new FormData();
        formData.append('name', title);
        formData.append('category', category);
        formData.append('dateDue', dateDue);

        return http.post('/projects/create', formData)
            .then(response => response.data);
    },

    getProjects(){
        return http.get('/projects')
            .then(response => response.data);
    },
    
    getProjectById(id){
        return http.get('/projects/' + id)
            .then(response => response.data);
    },

    updateName(id, name){
        let formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);

        return http.post('/projects/updateName', formData)
            .then(response => response.data);
    },

    updateProjectDateDue(id, dateDue){
        let formData = new FormData();
        formData.append('id', id);
        formData.append('dateDue', dateDue);

        return http.post('/projects/updateDateDue', formData)
            .then(response => response.data);
    }
}
