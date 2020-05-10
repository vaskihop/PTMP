import React, { Component } from 'react'
import AxiosFunctions from '../service/AxiosFunctions';
import TaskTest from './TaskTest';
import {CSVLink, CSVDownload} from 'react-csv';

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

    downloadProjects(){
     this.downloadProj();
   
    }
    

   

    downloadProj=()=> {
        AxiosFunctions.exportProjects()
            .then(
                response => {


                    var csvData= response.data;
                    console.log(csvData);

                    var a =document.createElement("a");
                    a.href='data:attachment/csv,' + csvData;
                    a.target ="_Blank";
                    a.download="Projects.csv";
                    document.body.appendChild(a);
                     a.click();
 
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
      
    
     this.props.history.push(`/projects/${id}/tasks`)
    }
  


    addProjectClicked=()=> {
        this.props.history.push(`/projects/new-project`)
    }

    updateProjectClicked=(id)=> {
        this.props.history.push(`/projects/${id}`)
    }

    search = (projects) => {
        console.log("Proshlo");
        console.log(projects);
        this.setState({projects});
        console.log("Proshlo");
    }


  

    render() {
        return (
            <div className="container">
                
                <br/>
                <div className="row">
              
                        <div className="col-7">
                        <button className="btn btn-dark" onClick={this.addProjectClicked}>New Project</button> 
                       
                       <h3 className="d-inline pl-4">All Projects List</h3>
                        </div>
                        <div className="col-5">
                        <div className="row">
                            <TaskTest  search={this.search}  />
                            &nbsp;&nbsp;
                            <button className="btn btn-dark " onClick={() =>this.componentDidMount()}>Refresh</button> 
                            &nbsp;&nbsp;
                            <button className="btn btn-dark " onClick={() =>this.downloadProjects()}>
                            <svg class="bi bi-cloud-download" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.887 5.2l-.964-.165A2.5 2.5 0 103.5 10H6v1H3.5a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.501 2.501 0 0113.5 11H10v-1h3.5a1.5 1.5 0 00.237-2.981L12.7 6.854l.216-1.028a4 4 0 10-7.843-1.587l-.185.96z"/>
  <path fill-rule="evenodd" d="M5 12.5a.5.5 0 01.707 0L8 14.793l2.293-2.293a.5.5 0 11.707.707l-2.646 2.646a.5.5 0 01-.708 0L5 13.207a.5.5 0 010-.707z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 6z" clip-rule="evenodd"/>
</svg>
                                </button> 
                            
                            </div> 
                        </div>
                                   
                </div>
                
                
                <br/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Task List</th>
                                <th>Project Name</th>
                                <th>Description</th>
                                <th>Project State</th>
                                <th>Total Tasks</th>
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
                                            <td><button className="btn btn-dark" onClick={() => this.showProjectItems(project.id)}>Task List</button></td>
                                            <td>{project.projectTitle}</td> 
                                            <td>{project.projectDescription}</td>
                                            <td className="text-center">{project.projectState ?
                                            <svg className="bi bi-check" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                          </svg>
                                             :
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
                  
                </div>
            </div>
        )
    }
}


export default ListProjectsComponent;

