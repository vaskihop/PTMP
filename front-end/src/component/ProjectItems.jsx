import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';


class ProjectItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [],
            message:null,
            projectId : this.props.match.params.id
        }

    }

    componentDidMount() {
        this.refreshTasks(this.state.projectId);
    }
   
    refreshTasks=(id)=> {
        AxiosFunctions.getTask(id)
            .then(
                response => {
                    this.setState({ taskList: response.data })
                   console.log( response.data )
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

    // taskPriorityLevel(){
    //     if(task.taskPriority=="HIGH"){

    //     }

    //     HIGH
    // }

    // taskStateLevel(){
    //     TODO
    // }
  


    addTasksClicked=()=> {
       // this.props.history.push(`/tasks/new-list`)
    }

    updateListClicked=(id)=> {
       // this.props.history.push(`/tasks/${id}`)
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
                                this.state.taskList.map(
                                    task =>
                                        
                                        <tr key={task.id}>
                                            <td>{task.id}</td>
                                            <td>{task.taskTitle}</td>
                                            <td>{task.taskDescription}</td>
                                            <td>{task.taskPriority}</td>  
                                            <td>{task.taskState}</td> 
                                            
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

