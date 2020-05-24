import React, { Component } from 'react';
import AxiosFunctions from '../service/AxiosFunctions';
import img from '../img/33.png';
import '../service/Style.css';

class MainPage extends Component {
    
    constructor(props) {
        super(props)
        this.state = {           
        }
    }
    render() {
        return (
           
            
            <div className="background">
           
        
          
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
            <a class="nav-link text-light" href="http://localhost:3000/projects/new-project">
            &nbsp;&nbsp;&nbsp;
            <svg class="bi bi-pen" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"/>
  <path fill-rule="evenodd" d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"/>
  <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z"/>
</svg>              &nbsp;     Create Project&nbsp; &nbsp; &nbsp; 
            </a>
          </li>
          <li class="nav-item">
              
            <a class="nav-link text-light" href="#">
            &nbsp;&nbsp;&nbsp;
              
              &nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <svg class="bi bi-chat-dots" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>             &nbsp;    About PTMP
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light"  href="http://localhost:3000/contibuters">
            &nbsp;&nbsp;&nbsp;
            <svg class="bi bi-people" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
</svg>                &nbsp;       Contributors
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="https://www.vtmc.lt/"target="_blank">
            &nbsp;&nbsp;&nbsp;
            <svg class="bi bi-building" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M15.285.089A.5.5 0 0 1 15.5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .418-.493l5.582-.93V3.5a.5.5 0 0 1 .324-.468l8-3a.5.5 0 0 1 .46.057zM7.5 3.846V8.5a.5.5 0 0 1-.418.493l-5.582.93V15h8v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.222l-7 2.624z"/>
  <path fill-rule="evenodd" d="M6.5 15.5v-7h1v7h-1z"/>
  <path d="M2.5 11h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 2h1v1h-1v-1zm2 0h1v1h-1v-1zm6-10h1v1h-1V3zm2 0h1v1h-1V3zm-4 2h1v1h-1V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm-2 2h1v1h-1V7zm2 0h1v1h-1V7zm-4 0h1v1h-1V7zm0 2h1v1h-1V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-4 2h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
</svg>                 &nbsp;      Partners
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
      <div>


      </div>
      <div class=" container jumbotron mt-3 py-5 ">
    
        <h1>Welcome To PROJECT TASK MANAGMENT PROGRAM!</h1>
        <p class="lead"><b>PTMP is a tool developed by VASKIHOP Company.
         It is used for bug tracking, issue tracking, and project management.</b></p>
           


      </div>
      <div>
     
    
      {/* <div className="container">
      <img src={car} class="img-fluid" alt=""/>
      </div>              */}
              
      </div>      </div>
                    
                </div>
            </div>
        )
    
                        }             
                    }       



export default MainPage;



