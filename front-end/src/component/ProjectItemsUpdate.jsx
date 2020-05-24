import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import AxiosFunctions from '../service/AxiosFunctions';
import img from '../img/22.jpg';

class ProjectItemsUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {   
            projectId: this.props.match.params.id1,
            taskId: this.props.match.params.id2,
            taskTitle: '',
            taskDescription: '',
            taskPriority: 'LOW',
            taskState: 'TODO'
        }       
    }
    componentDidMount() {
        if (this.state.taskId === "new") {      
            return
        }
        AxiosFunctions.getTaskById(this.state.projectId,this.state.taskId,this.state)
      
            .then(response => this.setState({             
                taskTitle: response.data.taskTitle,
                taskDescription: response.data.taskDescription,
                 taskPriority: response.data.taskPriority,
                 taskState: response.data.taskState              
            }))
           
    }

    onSubmit=(values)=> {    
        let task = {

            taskTitle: values.taskTitle,
            taskDescription: values.taskDescription,
             taskPriority: values.taskPriority,
             taskState: values.taskState

        }
        console.log(task.taskTitle)
        console.log(task.taskDescription)
        if (this.state.taskId === "new") {
            AxiosFunctions.addTask(this.state.projectId,task)
                .then(() => this.props.history.push(`projects/task/${this.state.projectId}/tasks/`))
                console.log(task)
                
        } else {
            AxiosFunctions.updateTaskById(this.state.projectId,this.state.taskId,task)
                .then(() => this.props.history.push(`projects/${this.state.projectId}/tasks/`))

                
    }
   
    }
    goBack=()=>{
        this.props.history.push(`projects/${this.state.projectId}/tasks/`)
    }



    render() {
        let { taskTitle,taskDescription
             ,taskPriority,taskState
         } = this.state

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
                <br/>
                <div className="row">
                <div class="col 6">

                <div className="row">
               
                <button className="btn btn-dark" onClick={() => this.goBack(this.state.projectId)}>Go back</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <h3>Please Add/Update Task Here</h3>
                </div>
                <br/>
                    <Formik
                        initialValues={{  taskTitle ,taskDescription
                             ,taskPriority,taskState 
                        }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                            
                                <Form>

                                   
                                    <fieldset className="form-group">
                                        <label  className="font-weight-bold" >Task Name:</label>
                                        <Field className="form-control" style={{width: 500}} type="text" name="taskTitle" />
                                    </fieldset>
                     
                                    <fieldset className="form-group">
                                        <label className="font-weight-bold" > Task Description:</label>
                                        <Field as="textarea" className="form-control"style={{width: 500}} type="text" name="taskDescription"  />
                                    </fieldset>

                                  <div className= "row">
                                     <fieldset className="form-group">
                                        <label className="font-weight-bold" >Task Priority:</label>
                                        <Field className="btn btn-dark d-block" as="select" name="taskPriority">
                                            <option value='LOW'>LOW</option>
                                            <option value='MEDIUM'>MEDIUM</option>
                                            <option value='HIGH'>HIGH</option>
                                        </Field>
                                    </fieldset>

                                    
                                    &nbsp;&nbsp;&nbsp;
                                    <fieldset className="form-group">
                                        <label className="font-weight-bold" >Task State:</label>
                                        <Field className="btn btn-dark d-block" as="select" name="taskState">
                                            <option value='TODO'>TODO</option>
                                            <option value='INPROGRESS'>INPROGRESS</option>
                                            <option value='DONE'>DONE</option>
                                        </Field>
                                    </fieldset>  
                                    &nbsp;&nbsp;&nbsp;


                                    <fieldset className="form-group">
                                        <label className="font-weight-bold" >Save:</label>
                                        <button className="btn btn-dark  d-block" type="submit">Submit</button>
                                    </fieldset>  
                                    &nbsp;
                                 </div>
                                   
                                </Form>
                            )
                        }
                    </Formik>
                    </div>
                    <div class="col 6">  <img src={img} style={{width: 550, height: 300}}alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItemsUpdate;