import http from './axios';

export default {
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
    }
}