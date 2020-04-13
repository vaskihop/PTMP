import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AxiosFunctions from '../service/AxiosFunctions';

class ProjectComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            projectTitle: '',
             projectDescription: '',
            //  projectState: '',
             generalTaskQuantity: '',
             inProgressTaskQuantity: ''
        }
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
                generalTaskQuantity: response.data.generalTaskQuantity,
                inProgressTaskQuantity: response.data.inProgressTaskQuantity
                
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
        
         else if (isNaN(values.generalTaskQuantity)) {
            errors.generalTaskQuantity = 'Please Enter a Number in the Feeld (How Many Tasks Are Complited)'
        }
        else if (isNaN(values.inProgressTaskQuantity)) {
            errors.inProgressTaskQuantity = 'Please Enter a Number in the Feeld (How Many Tasks Not Done)'
        }
        return errors
    }



   

    onSubmit=(values)=> {
 
        let project = {
            id: this.state.id,
            projectTitle: values.projectTitle,
            projectDescription: values.projectDescription,
            projectState: values.projectState,
            generalTaskQuantity: values.generalTaskQuantity,
            inProgressTaskQuantity: values.inProgressTaskQuantity,
            targetDate: values.targetDate
        }
        if (this.state.id === "new-project") {

            AxiosFunctions.addProject(project)
                .then(() => this.props.history.push('/projects'))
        } else {

            AxiosFunctions.updateProject(this.state.id, project)
                .then(() => this.props.history.push('/projects'))
        }
    }

    render() {
        let { projectTitle,projectDescription,projectState,generalTaskQuantity,inProgressTaskQuantity } = this.state

        return (
            <div>
                <br/>
                <h3>Please Add/Update Project Here</h3>
                <br/>
                <div className="container">
                    <Formik
                        initialValues={{ projectTitle, projectDescription ,projectState,generalTaskQuantity,inProgressTaskQuantity }}
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
                                    <ErrorMessage name="generalTaskQuantity" component="div"
                                        className="alert alert-warning" />
                                          <ErrorMessage name="generalTaskQuantity" component="div"
                                        className="alert alert-warning" />
                                          <ErrorMessage name="inProgressTaskQuantity" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Project Name</label>
                                        <Field className="form-control" type="text" name="projectTitle"  />
                                    </fieldset>
                                   
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="projectDescription" />
                                    </fieldset>
                                    {/* <fieldset className="form-group">
                                        <label>Project State</label>
                                        <Field as="select" name="projectState">
                                            <option value='true'>Done</option>
                                            <option value='false'>Not Done</option>
                                        </Field>
                                    </fieldset> */}
{/* 
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div> */}
                                         <fieldset className="dropdown form-group">
                                        <label>Project State</label>
                                        <br/>
                                        <Field className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" as="select" name="projectState">
                                            <option value='true'>Done</option>
                                            <option value='false'>Not Done</option>
                                        </Field>
                                    </fieldset> 
                                    


                                    <br/>
                                  
                                    <fieldset className="form-group">
                                        <label>Amount of Tasks</label>
                                        <Field className="form-control" type="text" name="generalTaskQuantity"  />
                                    </fieldset>
                                  
                                    <fieldset className="form-group">
                                        <label>Uncompleted Tasks</label>
                                        <Field className="form-control" type="text" name="inProgressTaskQuantity"  />
                                    </fieldset>
                                    
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