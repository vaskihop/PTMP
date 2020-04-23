import axios from 'axios'

class AxiosFunctions {

    retrieveAllProjects() {
        return axios.get(`http://localhost:8080/api/projects`);
    }

    getProjectById(projectId) {   
        return axios.get(`http://localhost:8080/api/projects/${projectId}`);
    }

    deleteProject(projectId){
       return axios.delete(`http://localhost:8080/api/projects/${projectId}`);
    }

    updateProject(projectId,project) {
        return axios.put(`http://localhost:8080/api/projects/${projectId}`,project);
    }

    addProject(project) {
      return axios.post(`http://localhost:8080/api/projects/`,project);

    }

    //????????????????????????????????????????????????????????????????????

   getTask(projectId){
       return axios.get(`http://localhost:8080/api/projects/${projectId}/tasks`,
       {headers: {
        "Content-Type": "application/json"}
    })
}
     


    addTask(projectId,task){
        return axios.post(`http://localhost:8080/api/projects/${projectId}/tasks`,task ,
        {headers: {
            "Content-Type": "application/json"}
        })
    }
    

     deleteTask(projectId,taskId){
         return axios.delete(`http://localhost:8080/api/projects/${projectId}/tasks/${taskId}`,
         {headers: {
            "Content-Type": "application/json"}
        })
    }


    getTaskById(projectId,taskId){
        return axios.get(`http://localhost:8080/api/projects/${projectId}/tasks/${taskId}`,
        {headers: {
            "Content-Type": "application/json"}
        })
    }
   

    updateTaskById (projectId,taskId,task){
        return axios.put(`http://localhost:8080/api/projects/${projectId}/tasks/${taskId}`,task,

        {headers: {
            "Content-Type": "application/json"}
        })
    }



}

export default new AxiosFunctions();