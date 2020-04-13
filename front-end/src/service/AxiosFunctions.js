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
}

export default new AxiosFunctions();