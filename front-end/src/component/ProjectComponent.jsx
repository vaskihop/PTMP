import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AxiosFunctions from '../service/AxiosFunctions';
// import axios from "axios";

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
            // id: this.state.id,
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
            <div>              
                <div className="container">
                <br/>
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
                                        <Field className="form-control" type="text" name="projectTitle"  />
                                    </fieldset>                              
                                    <fieldset className="form-group">
                                        <label className="font-weight-bold">Description:</label>
                                        <Field className="form-control" type="text" name="projectDescription" />
                                    </fieldset>                          
                                    <a className="btn btn-dark" href="http://localhost:3000/projects" role="button">Go Back</a>&nbsp;&nbsp;
                                    <button className="btn btn-dark" type="submit">Save</button>                                 
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}
export default ProjectComponent;