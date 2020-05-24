import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';
import SerchProject from './SerchProject';
import img from '../img/33.png';
import Axios from 'axios';
import { Dropdown } from 'react-bootstrap';


class ProjectItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskList: [],
            message:null,
            projectId : this.props.match.params.id,
            currentPage: 0,
            prepage: 5,
            showingPage:1,

            
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    componentDidMount() {
        this.refreshTasks(this.state.projectId);
    }

    refreshTasks=(projectId)=> {
       
        
        Axios.get(
       
            "http://localhost:8080/api/projects/"+projectId+"/tasks?page="+this.state.currentPage+"&size="+this.state.prepage)
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
    this.setState({taskList});
}
downloadList(){
    this.downloadProjAll(this.state.projectId);
   }
   downloadSingleList(){
    this.downloadL();
   }

   downloadProjAll=(value)=> {
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

downloadL=()=> {

  // http://localhost:8080/api/projects/1/exportTasks?page=1&size=2
  Axios.get("http://localhost:8080/api/projects/"+this.state.projectId+"/exportTasks?page="+this.state.currentPage+"&size="+this.state.prepage)   
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
    this.state.showingPage += 1;
    this.componentDidMount()
  
}
priviusPage(){
  if( this.state.currentPage<1){
    this.state.currentPage = 1;
    this.state.showingPage = 1;
  }
  this.state.currentPage -= 1;
  this.state.showingPage -= 1;
    this.componentDidMount()
}

handleChange(event) {
  this.state.currentPage=event.target.value;
  this.state.showingPage=event.target.value;
  this.componentDidMount()
}
handleSubmit(event) {
  alert('A name was submitted: ' + this.state.currentPage);
  event.preventDefault();
}
viewPresed= (value) => {
      
  this.state.prepage=value;
  this.componentDidMount()
}


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
            <svg class="bi bi-pencil" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
  <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg> &nbsp;     New Task
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.boardClicked(this.state.projectId)} href="#">
              
            &nbsp;&nbsp;&nbsp;
            <svg class="bi bi-layout-text-window" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M11 15V4h1v11h-1zm4.5-11H.5V3h15v1zM3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg>              &nbsp;   Task Board
              
            </a>
          </li>
     
          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span> &nbsp;  &nbsp; Export CSV Format</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </h6>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.downloadSingleList()} href="#">
              
            &nbsp;&nbsp;&nbsp;
            <svg class="bi bi-cloud-download" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.887 5.2l-.964-.165A2.5 2.5 0 1 0 3.5 10H6v1H3.5a3.5 3.5 0 1 1 .59-6.95 5.002 5.002 0 1 1 9.804 1.98A2.501 2.501 0 0 1 13.5 11H10v-1h3.5a1.5 1.5 0 0 0 .237-2.981L12.7 6.854l.216-1.028a4 4 0 1 0-7.843-1.587l-.185.96z"/>
  <path fill-rule="evenodd" d="M5 12.5a.5.5 0 0 1 .707 0L8 14.793l2.293-2.293a.5.5 0 1 1 .707.707l-2.646 2.646a.5.5 0 0 1-.708 0L5 13.207a.5.5 0 0 1 0-.707z"/>
  <path fill-rule="evenodd" d="M8 6a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 6z"/>
</svg>
              &nbsp;    Page Export 
              
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.downloadList()} href="#">
              
            &nbsp;&nbsp;&nbsp;
            <svg class="bi bi-cloud-download" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.887 5.2l-.964-.165A2.5 2.5 0 1 0 3.5 10H6v1H3.5a3.5 3.5 0 1 1 .59-6.95 5.002 5.002 0 1 1 9.804 1.98A2.501 2.501 0 0 1 13.5 11H10v-1h3.5a1.5 1.5 0 0 0 .237-2.981L12.7 6.854l.216-1.028a4 4 0 1 0-7.843-1.587l-.185.96z"/>
  <path fill-rule="evenodd" d="M5 12.5a.5.5 0 0 1 .707 0L8 14.793l2.293-2.293a.5.5 0 1 1 .707.707l-2.646 2.646a.5.5 0 0 1-.708 0L5 13.207a.5.5 0 0 1 0-.707z"/>
  <path fill-rule="evenodd" d="M8 6a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 6z"/>
</svg>              &nbsp;    All Tasks Export
              
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
 <Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
  View More
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  onClick={() =>this.viewPresed(5)} href="#/action-1">View 5 Tasks</Dropdown.Item>
    <Dropdown.Item onClick={() =>this.viewPresed(10)} href="#/action-2">View 10 Tasks</Dropdown.Item>
    <Dropdown.Item onClick={() =>this.viewPresed(15)} href="#/action-3">View 15 Tasks</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
   </li>
   &nbsp;
   <li class="page-item">
   
     <button className="btn btn" onClick={() => this.priviusPage()}>&laquo;</button>
     &nbsp;
   </li>
   <li class="page-item">

   <form className="form" onSubmit={this.handleSubmit}>
      <span class="glyphicon glyphicon-search"></span>
        <input className="form-control mr-sm-2" value={this.state.showingPage} maxlength="3" style={{width: 60}} type="text"
           onChange = {this.handleChange}/>
      </form>
   </li>
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

