import axios from 'axios'

class AxiosFunctions {
/////////////////Projects
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

    //////////////////Projects Tasks

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
    ////////////Serch


    projectSearchByTitle(title){
        return axios.get(`http://localhost:8080/api/projects/projectSearch?title=${title}`)
    }

    
   

    taskSearchByIdOrTitle (projectId,idOrTitle){
        return axios.get(`http://localhost:8080/api/projects/${projectId}/taskSearch?idOrTitle=${idOrTitle}`)
    }

//	--------->csv<---------


exportProjects(){
    return axios.get(`http://localhost:8080/api/projects/exportProjects`)
}




exportTasks(projectId){
    return axios.get(`http://localhost:8080/api/projects/${projectId}/exportTasks`)
}




}

export default new AxiosFunctions();