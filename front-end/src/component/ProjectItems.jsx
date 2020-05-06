import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';
// import ListProjectsComponent from './ListProjectsComponent';
// import Kanban from './Kanban';


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


    boardClicked=(projectId)=>{
        console.log("board  kliked ");
        this.props.history.push(`/projects/${projectId}/board/`);
    


    }


    stateTask(props) {
        console.log(props)
        
        if (props==="INPROGRESS") {
            console.log("proshlo1")
            return(<svg className="bi bi-battery-half" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z" clipRule="evenodd"/>
            <path d="M2 6h3v4H2V6zm12.5 3.5a1.5 1.5 0 000-3v3z"/>
          </svg>)
          
        
        }
        else if(props==="TODO"){
            return(<svg className="bi bi-battery" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z" clipRule="evenodd"/>
           <path d="M14.5 9.5a1.5 1.5 0 000-3v3z"/>
         </svg>)
           
            
      }
      return(<svg className="bi bi-battery-full" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M12 5H2a1 1 0 00-1 1v4a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1zM2 4a2 2 0 00-2 2v4a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H2z" clipRule="evenodd"/>
      <path d="M2 6h10v4H2V6zm12.5 3.5a1.5 1.5 0 000-3v3z"/>
    </svg>)
      
    }

   priority(props){
       if(props==="LOW"){
           return(<svg className="bi bi-server" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M13 2c0-1.105-2.239-2-5-2S3 .895 3 2s2.239 2 5 2 5-.895 5-2z"/>
           <path d="M13 3.75c-.322.24-.698.435-1.093.593C10.857 4.763 9.475 5 8 5s-2.857-.237-3.907-.657A4.881 4.881 0 013 3.75V6c0 1.105 2.239 2 5 2s5-.895 5-2V3.75z"/>
           </svg>)
       }

       else if(props==="MEDIUM"){
           return(<svg className="bi bi-server" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path d="M13 2c0-1.105-2.239-2-5-2S3 .895 3 2s2.239 2 5 2 5-.895 5-2z"/>
           <path d="M13 3.75c-.322.24-.698.435-1.093.593C10.857 4.763 9.475 5 8 5s-2.857-.237-3.907-.657A4.881 4.881 0 013 3.75V6c0 1.105 2.239 2 5 2s5-.895 5-2V3.75z"/>
           <path d="M13 7.75c-.322.24-.698.435-1.093.593C10.857 8.763 9.475 9 8 9s-2.857-.237-3.907-.657A4.881 4.881 0 013 7.75V10c0 1.105 2.239 2 5 2s5-.895 5-2V7.75z"/>
           </svg>)
       }
       return(<svg className="bi bi-server" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path d="M13 2c0-1.105-2.239-2-5-2S3 .895 3 2s2.239 2 5 2 5-.895 5-2z"/>
       <path d="M13 3.75c-.322.24-.698.435-1.093.593C10.857 4.763 9.475 5 8 5s-2.857-.237-3.907-.657A4.881 4.881 0 013 3.75V6c0 1.105 2.239 2 5 2s5-.895 5-2V3.75z"/>
       <path d="M13 7.75c-.322.24-.698.435-1.093.593C10.857 8.763 9.475 9 8 9s-2.857-.237-3.907-.657A4.881 4.881 0 013 7.75V10c0 1.105 2.239 2 5 2s5-.895 5-2V7.75z"/>
       <path d="M13 11.75c-.322.24-.698.435-1.093.593-1.05.42-2.432.657-3.907.657s-2.857-.237-3.907-.657A4.883 4.883 0 013 11.75V14c0 1.105 2.239 2 5 2s5-.895 5-2v-2.25z"/>
     </svg>)

   }


    render() {
        

        return (
            
            <div className="container-fluid">
                
                <br/>
               
                
                
                <br/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container-fluid">
                <div className="row">
                &nbsp;&nbsp;&nbsp;&nbsp;
                         <a className="btn btn-dark" href="http://localhost:3000/" role="button">Go Back</a>
                         &nbsp;&nbsp;
                        <button className="btn btn-dark" onClick={() =>this.addTasksClicked(this.state.projectId, this.state.taskList.id)}>Add a New Task</button>
                        &nbsp;&nbsp;
                        <button className="btn btn-dark" onClick={() =>this.boardClicked(this.state.projectId)}>Board</button>
                       
            <h3>&nbsp;&nbsp;&nbsp;Project Task List</h3>
                </div>
                <br/>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Task Name</th>
                                <th>Task Description</th>
                                <th>Priority</th>
                                <th>State</th>
                                <th>Was Created</th>
                                <th>Last Updated</th>
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
                                            <td>{this.priority(task.taskPriority)}</td>  
                                            <td>{this.stateTask(task.taskState)}</td> 
                                            <td>{task.createdAtDate}<br/>{task.createdAtTime}</td> 
                                            <td>{task.updatedAtDate}<br/>{task.updatedAtTime}</td> 
                                            
                                            <td><button className="btn btn-dark" onClick={() => this.updateListClicked(this.state.projectId, task.id)}>Update Task</button></td>
                                            <td><button className="btn btn-dark" onClick={() => this.deleteListClicked(task.id,this.state.projectId)}>Delete Task</button></td>
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

export default ProjectItems;

