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
   
    refreshTasks=(projectId)=> {
        AxiosFunctions.getTask(projectId)
            .then(
                response => {
                    this.setState({ taskList: response.data })
                  
                  
                }
              
            )

    }

    deleteListClicked= (taskId,projectId)=> {
      
        AxiosFunctions.deleteTask(projectId,taskId)        
            .then(
                response => {
              
                     this.setState({ message: `This Task was deleted successfully` })
                     this.refreshTasks(this.state.projectId);
               
                }
            )

    }
   

    addTasksClicked=(projectId)=> {

        console.log("Add task kliked ");
        this.props.history.push(`/projects/${projectId}/tasks/new`);
     
    }

    updateListClicked=(projectId,taskId)=> {
        console.log("update task kliked ");
    this.props.history.push(`/projects/${projectId}/tasks/${taskId}`);
    
   
    }

// time(){
//     task.createdAt
// }



    


    

    render() {
        

        return (
            
            <div className="container-fluid">
                
                <br/>
                <div className="row">
                        <button className="btn btn-dark" onClick={() =>this.addTasksClicked(this.state.projectId, this.state.taskList.id)}>Add a New Task</button>
                       
                        <h3>&nbsp;&nbsp;&nbsp;Project Task List</h3>
                </div>
                
                
                <br/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container-fluid">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Task Name</th>
                                <th>Task Description</th>
                                <th>Priority</th>
                                <th>State</th>
                                <th>Create Day</th>
                                <th>Last Modification</th>
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
                                            <td>{task.createdAtDate},{task.createdAtTime}</td> 
                                            <td>{task.updatedAtDate},{task.updatedAtTime}</td> 
                                            
                                            <td><button className="btn btn-dark" onClick={() => this.updateListClicked(this.state.projectId, task.id)}>Update List</button></td>
                                            <td><button className="btn btn-dark" onClick={() => this.deleteListClicked(task.id,this.state.projectId)}>Delete List</button></td>
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

