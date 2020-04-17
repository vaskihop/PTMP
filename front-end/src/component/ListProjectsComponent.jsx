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
      
     //this.props.history.push(`/tasks/${id}`) 
     this.props.history.push(`/tasks/${id}/tasks`)
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
                        <button className="btn btn-dark" onClick={this.addProjectClicked}>Add a New Project</button>
                        <h3>&nbsp;&nbsp;&nbsp;All Projects List</h3>
                </div>
                
                
                <br/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Description</th>
                                <th>Project State</th>
                                <th>Amount of Tasks</th>
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
                                             <td onClick={() => this.showProjectItems(project.id)}>{project.projectTitle}</td> 
                                            <td>{project.projectDescription}</td>
                                            <td>{project.projectState ? 'Done':'Not Done'}</td> 
                                            <td>{project.generalTaskNumber}</td>
                                            <td>{project.unfinishedTaskNumber}</td>
                                            <td><button className="btn btn-dark" onClick={() => this.updateProjectClicked(project.id)}>Update</button></td>
                                            <td><button className="btn btn-dark" onClick={() => this.deleteProjectClicked(project.id)}>Delete</button></td>
                                        </tr>
                                ) 
                            }
                        </tbody>
                    </table>
                    {/* <div className="row">
                        <button className="btn btn-dark" onClick={this.addProjectClicked}>Add New Project</button>
                       
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ListProjectsComponent;

