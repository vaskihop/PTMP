import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';
import TaskTest from './TaskTest';
import {CSVLink, CSVDownload} from 'react-csv';
import Axios from 'axios';
import img from '../img/33.png';

class ListProjectsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            message:null,
            currentPage: 1,
            prepage: 8
        }
    }

    componentDidMount() {
        this.refreshProjects(this.state.currentPage);
        console.log("SITAS "+this.state.currentPage)
    }

    refreshProjects=(currentPage)=> {
        currentPage-=1;
        Axios.get("http://localhost:8080/api/projects?page="+currentPage+"&size="+this.state.prepage)
            .then(
                response => {
                    this.setState({ projects: response.data })
                }
            )
    }
    downloadProjects(){
                this.downloadProj();
    }
    downloadAllProjects(){
      this.downloadProjAll(this.state.currentPage);
}
   
    downloadProj=()=> {
      AxiosFunctions.exportProjects()
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
  downloadProjAll=(currentPage)=> {
    currentPage-=1;
    Axios.get("http://localhost:8080/api/projects/exportProjects?page="+currentPage+"&size="+this.state.prepage)   
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

    deleteProjectClicked= (id)=> {
        AxiosFunctions.deleteProject( id)
            .then(
                response => {
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
    search = (projects) => {
                 this.setState({projects}); 
    }
    nextPage(){
        this.state.currentPage += 1;
        this.componentDidMount()
      
    }
    priviusPage(){
      if( this.state.currentPage<=0){
        this.state.currentPage = 1;
      }
      this.state.currentPage -= 1;
        this.componentDidMount()
    }
    pagePressed(value){
      this.state.currentPage=value;
      this.componentDidMount()
    }
    
    
     render() {
          return (            
            <div className="container=fluid">
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
             <TaskTest  search={this.search} ser={this.state.currentPage} ser2={this.state.prepage}/>
           
        </li>
    </ul>
    
</nav>


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
            <a class="nav-link text-light"  onClick={this.addProjectClicked} href="#">
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              &nbsp;     New Project
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.downloadAllProjects()} href="#">
              
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              &nbsp;   Export Page&nbsp; &nbsp; &nbsp; 
             
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" onClick={() =>this.downloadProjects()} href="#">
              
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              &nbsp;   Export All &nbsp; &nbsp; &nbsp; 
             
            </a>
          </li>
          
        </ul>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span> &nbsp;  &nbsp; Information</span>
          <a class="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link text-light" href="http://localhost:3000/about">
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              &nbsp;    About PTMP
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light"  href="http://localhost:3000/contibuters">
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              &nbsp;       Contributors
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="https://www.vtmc.lt/"target="_blank">
            &nbsp;&nbsp;&nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              &nbsp;      Partners
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
              
              &nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>
       
         <li class="nav-item">
              
            <a class="nav-link text-light" href="#">
            &nbsp;&nbsp;&nbsp;
              
              &nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </li>
      
        </ul>
       
      </div>
                <br/>
                     {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table table-striped">
                         <thead>
                             <tr>
                                <th>TASK LIST</th>
                             <th>PROJECT NAME</th>
                                <th>DESCRIPTION</th>
                             <th>STATE</th>
                                <th>TASKS</th>
                             <th>NOT DONE TASKS</th>
                                <th>UPDATE</th>
                             <th>DELETE</th>
                               </tr>
                        </thead>
                             <tbody >
                                 {this.state.projects.map(
                                   project =>      
                                        <tr key={project.id}>
                                            <td><button className="btn btn-dark" onClick={() => this.showProjectItems(project.id)}>Task List</button></td>
                                         <td>{project.projectTitle}</td> 
                                            <td>{project.projectDescription}</td>
                                        <td className="text-center">{project.projectState ?
                                            <svg className="bi bi-check" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                                  </svg>:
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
        )
    }
}


export default ListProjectsComponent;

  