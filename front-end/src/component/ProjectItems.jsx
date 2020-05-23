import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';
import SerchProject from './SerchProject';
import img from '../img/33.png';
import Axios from 'axios';


class ProjectItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [],
            message:null,
            projectId : this.props.match.params.id,
            currentPage: 1,
            prepage: 2
            
        }
      
    }

    componentDidMount() {
        this.refreshTasks(this.state.projectId,this.state.currentPage);
    }

    refreshTasks=(projectId,currentPage)=> {
        currentPage-=1;
        Axios.get(
            "http://localhost:8080/api/projects/"+projectId+"/tasks?page="+currentPage+"&size="+this.state.prepage)
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
   search = (taskList) => { 
     console.log("PROSHLO")
     console.log(taskList)
     console.log("PROSHLO")
    this.setState({taskList});
}
downloadList(){
    this.downloadL(this.state.projectId);
   }

downloadL=(value)=> {
    AxiosFunctions.exportTasks(value)
        .then(
            response => {
                var csvData= window.URL.createObjectURL(new Blob([response.data]));
                var a =document.createElement("a");
                a.href=csvData;
                a.target ="_Blank";
                a.download="ProjectTaskList.csv";
                document.body.appendChild(a);
                a.click();
            }
        )
}
nextPage(){
    this.state.currentPage += 1;
    this.componentDidMount()
  
}
priviusPage(){
  this.state.currentPage -= 1;
    this.componentDidMount()
}
pagePressed(value){
  this.state.currentPage=value;
  this.componentDidMount()
}



// Tasku paieskos puslapiavimas
// http://localhost:8080/api/projects/1/taskSearch?idOrTitle=sau&page=1&size=2
// Tasku eksportavimo puslapiavimas
// http://localhost:8080/api/projects/1/exportTasks?page=1&size=2







    render() {
        return (
            <div className="containe">
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
                <SerchProject  search={this.search} pr={this.state.projectId} cur={this.state.currentPage} prep={this.state.prepage}   />

        </li>
    </ul>
    
</nav>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="">
                <div className="row">

<div class="sidebar-sticky pt-3 bg-dark" style={{height: 100+"%"}}>
        <ul class="nav flex-column  ">
        <img src={img} alt=""/>
        <br/>
          <li class="nav-item ">
            <a class="nav-link active text-light" href="http://localhost:3000/">
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              &nbsp;      Main <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="http://localhost:3000/projects">
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              &nbsp;  Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light"  onClick={() =>this.addTasksClicked(this.state.projectId, this.state.taskList.id)} href="#">
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              &nbsp;     New Task
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.boardClicked(this.state.projectId)} href="#">
              
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              &nbsp;   Task Board
              
            </a>
          </li>
     
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span> &nbsp;  &nbsp; Export CSV Format</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </h6>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.downloadList()} href="#">
              
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              &nbsp;    Page Export 
              
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.downloadList()} href="#">
              
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              &nbsp;    All Tasks Export
              
            </a>
          </li>
         
          <li class="nav-item">
              
            <a class="nav-link text-light" href="#">
            &nbsp;&nbsp;&nbsp;
              &nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>
          <li class="nav-item">
              
            <a class="nav-link text-light" href="#">
            &nbsp;&nbsp;&nbsp;
              &nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>
          <li class="nav-item">
              
            <a class="nav-link text-light" href="#">
            &nbsp;&nbsp;&nbsp;
              &nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>

          <li class="nav-item">
              
            <a class="nav-link text-light" href="#">
            &nbsp;&nbsp;&nbsp;
              &nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>

        </ul>
       
      </div>

                
                <div className="container">

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>DESCRIPTION</th>
                                <th>PRIORITY</th>
                                <th>STATE</th>
                                <th>CREATED</th>
                                <th>LAST UPDATED</th>
                                <th>UPDATE</th>
                                <th>DELETE</th>
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
                    <div className="float-right" >
               
               <nav aria-label="Page navigation example">
 <ul class="pagination">
   <li class="page-item">
   
     <button className="btn btn" onClick={() => this.priviusPage()}>&laquo;</button>
     &nbsp;
   </li>
   <li class="page-item"><button className="btn btn" onClick={() => this.pagePressed(1)}>1</button></li>
   &nbsp;
   <li class="page-item"><button className="btn btn" onClick={() => this.pagePressed(2)}>2</button></li>
   &nbsp;
   <li class="page-item"><button className="btn btn" onClick={() => this.pagePressed(3)}>3</button></li>
   &nbsp;
   <li class="page-item">
   <button className="btn btn" onClick={() => this.nextPage()}>&raquo;</button>
    
   </li>
 </ul>
</nav>
               </div>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ProjectItems;

