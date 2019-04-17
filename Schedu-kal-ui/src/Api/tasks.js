import http from './axios';

export default {

    completeTask(taskId){
        let formData = new FormData();
        formData.append('id', taskId);

        return http.post('/tasks/completeTask', formData)
            .then(response => response.data);
    },

    updateTask(taskId, description){
        let formData = new FormData();
        formData.append('id', taskId);
        formData.append('description', description);

        return http.post('/tasks/updateDescription', formData)
            .then(response => response.data);
    },

    createTask(projectId, description){
        let formData = new FormData();
        formData.append("project_id", projectId);
        formData.append('description', description);

        return http.post('/tasks/create', formData)
            .then(response => response.data);
    },

    deleteTask(taskId){
        let formData = new FormData();
        formData.append("id", taskId);

        return http.post('/tasks/delete', formData)
            .then(response => response.data);
    }
}