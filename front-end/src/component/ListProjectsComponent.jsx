import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';


class ListProjectsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            message:null
        }
    }

    componentDidMount() {
        this.refreshProjects();
    }

    refreshProjects=()=> {
        AxiosFunctions.retrieveAllProjects()
            .then(
                response => {
                    this.setState({ projects: response.data })
                }
            )
    }

    deleteProjectClicked= (id)=> {
        AxiosFunctions.deleteProject( id)
            .then(
                response => {
                    this.setState({ message: `Project was deleted successfully` })
                    this.refreshProjects()
                }
            )

    }

    showProjectItems=(id)=>{
      
    
     this.props.history.push(`/projects/${id}/tasks`)
    }
  


    addProjectClicked=()=> {
        this.props.history.push(`/projects/new-project`)
    }

    updateProjectClicked=(id)=> {
        this.props.history.push(`/projects/${id}`)
    }
  

    render() {
        return (
            <div className="container">
                
                <br/>
                <div className="row">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-dark" onClick={this.addProjectClicked}>New Project</button> 
                       
                        <h3>&nbsp;&nbsp;&nbsp;All Projects List</h3>
                                   
                </div>
                
                
                <br/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Task List</th>
                                <th>Project Name</th>
                                <th>Description</th>
                                <th>Project State</th>
                                <th>Total Tasks</th>
                                <th>Uncompleted Tasks</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.projects.map(
                                   project =>
                                        
                                        <tr key={project.id}>
                                            <td><button className="btn btn-dark" onClick={() => this.showProjectItems(project.id)}>Task List</button></td>
                                            <td>{project.projectTitle}</td> 
                                            <td>{project.projectDescription}</td>
                                            <td className="text-center">{project.projectState ?
                                            <svg className="bi bi-check" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                          </svg>
                                             :
                                             <svg className="bi bi-x" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
  <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
</svg>
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             }</td> 
                                            <td className="text-center">{project.generalTaskNumber}</td>
                                            <td className="text-center">{project.unfinishedTaskNumber}</td>
                                            <td><button className="btn btn-dark" onClick={() => this.updateProjectClicked(project.id)}>Update</button></td>
                                            <td><button className="btn btn-dark" onClick={() => this.deleteProjectClicked(project.id)}>Delete</button></td>
                                        </tr>
                                ) 
                            }
                        </tbody>
                    </table>
                  
                </div>
            </div>
        )
    }
}

export default ListProjectsComponent;

