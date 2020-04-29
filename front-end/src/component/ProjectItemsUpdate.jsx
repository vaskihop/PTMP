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
               
                taskTitle: response.data.taskTitle,
                taskDescription: response.data.taskDescription,
                 taskPriority: response.data.taskPriority,
                 taskState: response.data.taskState
               
                
            }))
           
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
    goBack=()=>{
        this.props.history.push(`projects/${this.state.projectId}/tasks/`)
    }



    render() {
        let { taskTitle,taskDescription
             ,taskPriority,taskState
         } = this.state

        return (
            <div>
                
                <div className="container">
                <br/>
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
                                    
                                    {/* <fieldset className="form-group">
                                        <label>Task ID</label>
                                        <Field className="form-control" type="text" name="taskId"  />
                                    </fieldset> */}
                                   
                                    <fieldset className="form-group">
                                        <label  className="font-weight-bold" >Task Name:</label>
                                        <Field className="form-control" type="text" name="taskTitle" />
                                    </fieldset>



                                    
                                  
                                    <fieldset className="form-group">
                                        <label className="font-weight-bold" > Task Description:</label>
                                        <Field className="form-control" type="text" name="taskDescription"  />
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
            </div>
        )
    }
}

export default ProjectItemsUpdate;