import React, { Component } from 'react'
 import AxiosFunctions from '../service/AxiosFunctions';

class ProjectItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [],
            message:null
        }
    }

    componentDidMount() {
        this.refreshTasks();
    }

    refreshTasks=()=> {
        AxiosFunctions.retrieveAllProjects()
            .then(
                response => {
                    this.setState({ tasks: response.data })
                }
            )
    }

    deleteListClicked= (id)=> {
        AxiosFunctions.deleteTask( id)
            .then(
                response => {
                    this.setState({ message: `This Task was deleted successfully` })
                    this.refreshTasks()
                }
            )

    }

    
  


    addTasksClicked=()=> {
        this.props.history.push(`new-list`)
    }

    updateListClicked=(id)=> {
        this.props.history.push(`update-list/${id}`)
    }

    render() {
        return (
            
            <div className="container">
                
                <br/>
                <div className="row">
                        <button className="btn btn-dark" onClick={this.addTasksClicked}>Add a New Task</button>
                        <h3>&nbsp;&nbsp;&nbsp;Project Task List</h3>
                </div>
                
                
                <br/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Task Name</th>
                                <th>Task Description</th>
                                <th>Task Priority</th>
                                <th>Task State</th>
                                <th>Last Time Updated</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                        
                                        <tr key={task.taskId}>
                                            <td>{task.taskName}</td>
                                            <td>{task.taskDescription}</td>
                                            <td>{task.taskPriority ? 'Hight':'Medium'}</td> 
                                            <td>{task.taskState ? 'Not Done':'In progress'}</td> 
                                            <td>{task.date}</td>
                                            <td><button className="btn btn-dark" onClick={() => this.updateListClicked(task.id)}>Update List</button></td>
                                            <td><button className="btn btn-dark" onClick={() => this.deleteListClicked(task.id)}>Delete List</button></td>
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

export default ProjectItems;

