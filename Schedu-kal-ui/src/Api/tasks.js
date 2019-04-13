import http from './axios';

export default {
    updateTask(taskId, description){
        let formData = new FormData();
        formData.append('id', taskId);
        formData.append('description', description);

        return http.post('/tasks/updateDescription', formData)
            .then(response => response.data);
    }
}