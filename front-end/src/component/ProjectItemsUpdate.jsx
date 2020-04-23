import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import AxiosFunctions from '../service/AxiosFunctions';

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
            // taskDate: 0
        }
        
        
    }

    componentDidMount() {
        if (this.state.taskId === "new") {
          
            return
        }
 
        AxiosFunctions.getTaskById(this.state.projectId,this.state.taskId,this.state)
            .then(response => this.setState({
                // taskId: response.data.taskId,
                taskTitle: response.data.taskTitle,
                taskDescription: response.data.taskDescription,
                 taskPriority: response.data.taskPriority,
                 taskState: response.data.taskState
                // taskDate: response.data.taskDate
                
            }))
            .then(console.log("SUAKAAA"));
    }
    



   

    onSubmit=(values)=> {
      
        let task = {
            // taskId: this.state.taskId,
            taskTitle: values.taskTitle,
            taskDescription: values.taskDescription,
             taskPriority: values.taskPriority,
             taskState: values.taskState
            // inProgressTaskQuantity: values.inProgressTaskQuantity,
            // targetDate: values.targetDate
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
   

    render() {
        let { taskTitle,taskDescription
             ,taskPriority,taskState
         } = this.state

        return (
            <div>
                <br/>
                <h3>Please Add/Update Project List Here</h3>
                <br/>
                <div className="container">
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
                                    
                                    {/* <fieldset className="form-group">
                                        <label>Task ID</label>
                                        <Field className="form-control" type="text" name="taskId"  />
                                    </fieldset> */}
                                   
                                    <fieldset className="form-group">
                                        <label>Task Name</label>
                                        <Field className="form-control" type="text" name="taskTitle" />
                                    </fieldset>



                                    
                                  
                                    <fieldset className="form-group">
                                        <label> Task Description</label>
                                        <Field className="form-control" type="text" name="taskDescription"  />
                                    </fieldset>
                                  
                                     <fieldset className="form-group">
                                        <label>Task Priority</label>
                                        <Field className="btn btn-secondary d-block" as="select" name="taskPriority">
                                            <option value='LOW'>LOW</option>
                                            <option value='MEDIUM'>MEDIUM</option>
                                            <option value='HIGH'>HIGH</option>
                                        </Field>
                                    </fieldset>

                                    <br/>
                                   
                                    <fieldset className="form-group">
                                        <label>Task State</label>
                                        <Field className="btn btn-secondary d-block" as="select" name="taskState">
                                            <option value='TODO'>TODO</option>
                                            <option value='INPROGRESS'>INPROGRESS</option>
                                            <option value='DONE'>DONE</option>
                                        </Field>
                                    </fieldset> 

                                    <br/>
                                  
                                    


                                   
                                    
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