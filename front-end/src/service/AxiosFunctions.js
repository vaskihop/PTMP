import axios from 'axios'

class AxiosFunctions {

    retrieveAllProjects() {
        return axios.get(`http://localhost:8080/api/projects`);
    }

    getProjectById(id) {   
        return axios.get(`http://localhost:8080/api/projects/${id}`);
    }

    deleteProject(id){
       return axios.delete(`http://localhost:8080/api/projects/${id}`);
    }

    updateProject(id,project) {
        return axios.put(`http://localhost:8080/api/projects/${id}`,project);
    }

    addProject(project) {
      return axios.post(`http://localhost:8080/api/projects/`,project);

    }

    //????????????????????????????????????????????????????????????????????

   getTask(id){
       return axios.get(`http://localhost:8080/api/projects/${id}/tasks/`);
     }


    addTask(task,id){
        return axios.post(`http://localhost:8080/api/projects/${id}/tasks`,task);
    }

     deleteTask(taskId){
         return axios.delete(`http://localhost:8080/api/projects/tasks/${taskId}`);
     }


    getTaskById(taskId){
        return axios.get(`http://localhost:8080/api/projects/tasks/${taskId}`);
    }
   

    updateTaskById (taskId,task){
        return axios.put(`http://localhost:8080/api/projects/tasks/${taskId}`,task);



}
}

export default new AxiosFunctions();