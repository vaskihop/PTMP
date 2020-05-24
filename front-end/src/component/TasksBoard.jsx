import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';
import { Dropdown } from 'react-bootstrap';

class TasksBoard extends Component {
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

        this.props.history.push(`/projects/${projectId}/tasks/new`);    
    }
    updateListClicked=(projectId,taskId)=> {
     
    this.props.history.push(`/projects/${projectId}/tasks/${taskId}`);  
    }
    boardClicked=(projectId)=>{
    
        this.props.history.push(`/projects/${projectId}/board/`);
    }
    stateTask(props) {
          
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



   


   changeToNotStarted = (projectId, taskId) => {
    console.log(projectId, taskId);
    let updatedTask = AxiosFunctions.getTaskById(projectId, taskId)
        .then((res) => {
            const res1 = res.data;
            const updatedTask = {
               
                taskState: 'TODO',
                id: res1.id,
                taskTitle: res1.taskTitle,
                taskDescription: res1.taskDescription,
                taskPriority: res1.taskPriority,
                
            }
            console.log(updatedTask);
            AxiosFunctions.updateTaskById(projectId,taskId,updatedTask);
            this.refreshTasks(projectId);
            this.refreshTasks(projectId);
        })
}

changeToInProgress = (projectId, taskId) => {
    console.log(projectId, taskId);
    let updatedTask = AxiosFunctions.getTaskById(projectId, taskId)
        .then((res) => {
            const res1 = res.data;
            const updatedTask = {
              
                taskState: 'INPROGRESS',
                id: res1.id,
                taskTitle: res1.taskTitle,
                taskDescription: res1.taskDescription,
                taskPriority: res1.taskPriority,
            
            }
            console.log(updatedTask);
            AxiosFunctions.updateTaskById(projectId,taskId,updatedTask);
            this.refreshTasks(projectId);
            this.refreshTasks(projectId);
        })
}




changeToDone = (projectId, taskId) => {
    console.log(projectId, taskId);
    let updatedTask = AxiosFunctions.getTaskById(projectId, taskId)
        .then((res) => {
            const res1 = res.data;
            const updatedTask = {
     
                taskState: 'DONE',
                id: res1.id,
                taskTitle: res1.taskTitle,
                taskDescription: res1.taskDescription,
                taskPriority: res1.taskPriority,
            }
            console.log(updatedTask);
            AxiosFunctions.updateTaskById(projectId,taskId,updatedTask);
            this.refreshTasks(projectId);
            this.refreshTasks(projectId);
        })
}
goBack=()=>{
    this.props.history.push(`projects/${this.state.projectId}/tasks/`)
}


    render() {
      const todo = this.state.taskList.filter(task => task.taskState === "TODO");
      const inprogress = this.state.taskList.filter(task => task.taskState === "INPROGRESS");
      const done = this.state.taskList.filter(task => task.taskState === "DONE");

        return (  

            <div>
                  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-2 shadow">
                        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
                            <a href="http://localhost:3000/" className="navbar-brand d-flex align-items-center text-nowrap">
                        <svg className="bi bi-exclude" width="1em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1.5 0A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12H4v2.5A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4H12V1.5A1.5 1.5 0 0010.5 0h-9zM12 4H5.5A1.5 1.5 0 004 5.5V12h6.5a1.5 1.5 0 001.5-1.5V4z" clipRule="evenodd"/>
            </svg>
        <strong>&nbsp;PTMP</strong>
      </a>
  </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
            </button>
                    <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
          
           
        </li>
    </ul>
    
</nav>
                <div className="container">
               
                    
                    <div className="row justify-content-between d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-3 bg-nav-color border-bottom shadow-sm header">
                        <h2 className="col-lg-4 col-sm-1 mt-2 ml-5">TASK BOARD</h2>
                        <button className=" btn btn-dark" onClick={() => this.goBack(this.state.projectId)}>Go back</button>
                    </div>
                    <div className="row ">

                        <div className="col-4 ">

                            <h3 className="text-center"> TO DO</h3>
                            {todo.map((task) => (           
                                <Dropdown>
                                <div className={"card " + (task.taskPriority === "LOW" ? " bg-low" : task.taskPriority === "MEDIUM" ? " bg-medium" : " bg-high")}
                                    style={{ width: "22rem" }} key={task.id}>
                                    <div className="card-body">                                                   
                                                    <Dropdown.Toggle variant="dark" id="dropdown-basic"className="w-100" >ID:
                                                    {task.id}&nbsp;
                                                    {task.taskTitle}                                    
                                                     </Dropdown.Toggle>
                                                     <button
                                            onClick={() => this.changeToInProgress(this.state.projectId, task.id)}
                                            className="btn btn-dark mr-2 w-100">
<svg className="bi bi-caret-right-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"/>
</svg>
                                            </button>                                                 
  <Dropdown.Menu className="w-100">
  <Dropdown.Item href="#/action-1"><p className="card-text"><h5> Description:</h5> {task.taskDescription}</p></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><p className="card-text"><h5>Priority:</h5> {task.taskPriority}</p></Dropdown.Item>
    <Dropdown.Item href="#/action-3"><p className="card-text"><h5>Last Updated:</h5> {task.updatedAtDate}</p>  </Dropdown.Item>
  </Dropdown.Menu>
                                    </div>
                                </div>
                                </Dropdown>  ))}
                        </div>    
                        <div className="col-4">
                            <h3 className="text-center">IN PROGRESS</h3>
                            {inprogress.map((task) => (
                                <Dropdown >
                                <div className={"card" + (task.taskPriority === "LOW" ? " bg-low" : task.taskPriority === "MEDIUM" ? " bg-medium" : " bg-high")}
                                    style={{ width: "22rem" }} key={task.id}>
                                    <div className="card-body ">
                                   
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic"className="w-100">  
                                        ID:
                                                    {task.id}&nbsp;
                                                    {task.taskTitle}
                                                     </Dropdown.Toggle >
                                                     <div className="">
                                                     <button
                                            className="btn btn-dark w-50"
                                            onClick={() => this.changeToNotStarted(this.state.projectId, task.id)}
                                        > <svg className="bi bi-caret-left-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z"/>
                                      </svg>
                                      </button>
                                        <button
                                            onClick={() => this.changeToDone(this.state.projectId, task.id)}
                                            className="btn btn-dark  w-50">

<svg className="bi bi-caret-right-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"/>
</svg>

                                            </button>
                                            </div>
                                            <Dropdown.Menu className="w-100">
    <Dropdown.Item href="#/action-1"><p className="card-text"><h5> Description:</h5> {task.taskDescription}</p></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><p className="card-text"><h5>Priority:</h5> {task.taskPriority}</p></Dropdown.Item>
    <Dropdown.Item href="#/action-3"><p className="card-text"><h5>Last Updated:</h5> {task.updatedAtDate}</p>  </Dropdown.Item>
  </Dropdown.Menu>
                                    </div>
                                </div>
                                </Dropdown>  ))}
                        </div>
                        <div className="col-4 ">
                            <h3 className="text-center">DONE</h3>
                            {done.map((task) => (
                                <Dropdown>
                                <div className={"card" + (task.taskPriority === "LOW" ? " bg-low" : task.taskPriority === "MEDIUM" ? " bg-medium" : " bg-high")}
                                    style={{ width: "22rem" }} key={task.id}>
                                    <div className="card-body text-right">
                                   
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic" className=" w-100">
                                        
                                   
                                        
                                        
                                        ID:
                                                    {task.id}&nbsp;
                                                    {task.taskTitle}
                                                     </Dropdown.Toggle>
                                                     <button
                                            className="btn btn-dark mr-0 w-100"
                                            onClick={() => this.changeToInProgress(this.state.projectId, task.id)}
                                        > <svg className="bi bi-caret-left-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z"/>
                                      </svg>
                                      </button>
                                                     <Dropdown.Menu className="w-100">
                                                     <Dropdown.Item href="#/action-1"><p className="card-text"><h5> Description:</h5> {task.taskDescription}</p></Dropdown.Item>
    <Dropdown.Item href="#/action-2"><p className="card-text"><h5>Priority:</h5> {task.taskPriority}</p></Dropdown.Item>
    <Dropdown.Item href="#/action-3"><p className="card-text"><h5>Last Updated:</h5> {task.updatedAtDate}</p>  </Dropdown.Item>
  </Dropdown.Menu>
                                    </div>
                                </div>
                                </Dropdown>))}
                        </div>

                    </div>

                </div>
            </div>
            
            














            
        )        
    }
}
export default TasksBoard;

