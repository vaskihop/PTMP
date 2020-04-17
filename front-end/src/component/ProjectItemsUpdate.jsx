import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import AxiosFunctions from '../service/AxiosFunctions';

class ProjectItemsUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {


             id: this.props.match.params.id, 
            taskId: '',
            taskName: '',
            taskDescription: '',
            taskPriority: false,
            taskState: false,
            taskDate: 0
        }
    }

    componentDidMount() {
        if (this.state.id === "new-list") {

            return
        }

        AxiosFunctions.getProjectById( this.state.id)
            .then(response => this.setState({
                taskId: response.data.taskId,
                taskName: response.data.taskName,
                taskDescription: response.data.taskDescription,
                taskPriority: response.data.taskPriority,
                taskState: response.data.taskState,
                taskDate: response.data.taskDate
                
            }))
    }




   

    // onSubmit=(values)=> {
 
    //     let project = {
    //         id: this.state.id,
    //         projectTitle: values.projectTitle,
    //         projectDescription: values.projectDescription,
    //         projectState: values.projectState,
    //         generalTaskQuantity: values.generalTaskQuantity,
    //         inProgressTaskQuantity: values.inProgressTaskQuantity,
    //         targetDate: values.targetDate
    //     }
    //     if (this.state.id === "new-list") {

    //         AxiosFunctions.addProject(project)
    //             .then(() => this.props.history.push('/project'))
    //     } else {

    //         AxiosFunctions.updateProject(this.state.id, project)
    //             .then(() => this.props.history.push('/project'))
    //     }
    // }

    render() {
        let { taskId,taskName,taskDescription,taskPriority,taskState,taskDate } = this.state

        return (
            <div>
                <br/>
                <h3>Please Add/Update Project List Here</h3>
                <br/>
                <div className="container">
                    <Formik
                        initialValues={{ taskId, taskName ,taskDescription,taskPriority,taskState,taskDate }}
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
                                        <label>Task ID</label>
                                        <Field className="form-control" type="text" name="projectTitle"  />
                                    </fieldset>
                                   
                                    <fieldset className="form-group">
                                        <label>Task Name</label>
                                        <Field className="form-control" type="text" name="projectDescription" />
                                    </fieldset>



                                    <fieldset className="form-group">
                                        <label>Task Description</label>
                                        <Field className="btn btn-secondary d-block" as="select" name="projectState">
                                            <option value='true'>Done</option>
                                            <option value='false'>Not Done</option>
                                        </Field>
                                    </fieldset>

                                    
                                    


                                    <br/>
                                  
                                    <fieldset className="form-group">
                                        <label>Task Priority</label>
                                        <Field className="form-control" type="text" name="generalTaskQuantity"  />
                                    </fieldset>
                                  
                                    <fieldset className="form-group">
                                        <label>Task State</label>
                                        <Field className="form-control" type="text" name="inProgressTaskQuantity"  />
                                    </fieldset>


                                    <fieldset className="form-group">
                                        <label>Task date</label>
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

export default ProjectItemsUpdate;