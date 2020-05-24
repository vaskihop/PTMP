import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AxiosFunctions from '../service/AxiosFunctions';
import img from '../img/22.jpg';



class ProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            projectTitle: '',
             projectDescription: '',
             projectState: false,
             generalTaskNumber: 0,
             unfinishedTaskNumber: 0
        }
        console.log(this.state);
    }

    componentDidMount() {
        if (this.state.id === "new-project") {
            return
        }
        AxiosFunctions.getProjectById( this.state.id)
            .then(response => this.setState({
                projectTitle: response.data.projectTitle,
                projectDescription: response.data.projectDescription,
                projectState: response.data.projectState,
                generalTaskNumber: response.data.generalTaskNumber,
                unfinishedTaskNumber: response.data.unfinishedTaskNumber             
            }))
    }
    validate=(values)=> {
        let errors = {}
        if (!values.projectTitle) {
            errors.projectTitle = 'Please Enter Project Name'
        } else if (values.projectTitle.length < 3) {
            errors.projectTitle = 'Please Enter at least 3 Characters in the Project Name'
        }
        else if (!values.projectDescription) {
            errors.projectDescription = 'Please Enter a Description'
        } else if (values.projectDescription.length < 5) {
            errors.projectDescription = 'Please Enter at least 5 Characters in Description'
        }
        return errors
    }
    onSubmit=(values)=> {
        let project = {
           
            projectTitle: values.projectTitle,
            projectDescription: values.projectDescription,
            projectState: values.projectState,
            generalTaskNumber: values.generalTaskNumber,
            unfinishedTaskNumber: values.unfinishedTaskNumber,
            targetDate: values.targetDate
        }
        if (this.state.id === "new-project") {
            AxiosFunctions.addProject(project)
                .then(() => this.props.history.push(`/projects`))
        } else {

            AxiosFunctions.updateProject(this.state.id, project)
                .then(() => this.props.history.push(`/projects`))
        }
    }
    render() {
        let { projectTitle,projectDescription
            ,projectState,generalTaskNumber,unfinishedTaskNumber
         } = this.state
        return (

            <div className=""> 
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
                <div className="container ">
                <br/>
                <div className="row ">
                    <div class="col 6">
                <h3>Please Add/Update Project Here</h3>
                <br/>
                    <Formik
                        initialValues={{ projectTitle, projectDescription ,projectState,generalTaskNumber,unfinishedTaskNumber
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
                                    <ErrorMessage name="projectTitle" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="projectDescription" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="generalTaskNumber" component="div"
                                        className="alert alert-warning" />
                                          <ErrorMessage name="generalTaskNumber" component="div"
                                        className="alert alert-warning" />
                                          <ErrorMessage name="unfinishedTaskNumber" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label className="font-weight-bold"> Project Name:</label>
                                        <Field className="form-control" style={{width: 500}} type="text" name="projectTitle"  />
                                    </fieldset>                              
                                    <fieldset className="form-group">
                                        <label className="font-weight-bold">Description:</label>
                                        <Field as="textarea" className="form-control" style={{width: 500}} type="text" name="projectDescription" />
                                    </fieldset> 
                                    <a className="btn btn-dark" href="http://localhost:3000/projects" role="button">Go Back</a>&nbsp;&nbsp;
                                    <button className="btn btn-dark" type="submit">Save</button>                                 
                                </Form>
                                
                            )
                        }
                    </Formik>
                    </div>
                    <div class="col 6"></div>
                    <img src={img} style={{width: 550, height: 300}}alt=""/>
                    </div>

                </div>
            </div>
        )
    }
}
export default ProjectComponent;