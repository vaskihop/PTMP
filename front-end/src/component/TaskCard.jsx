
import React, { Component } from 'react'



class TaskCard extends Component {
    constructor(props) {
        super(props)
        this.state = {   
            blabla:props,
            taskTitle: props.taskList.taskTitle,
            taskDescription: '',
            taskPriority: '',
            createdAtDate: '',
             updatedAtDate: ''
        }
        console.log("CIA2")
        console.log(props)
        
    }
        // return (
        //   <div className={classes.Person}>
        //     <p onClick={props.click}>
        //       I'm {props.name} and I am {props.age} years old!
        //     </p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} value={props.name} />
        //   </div>
        // );


    
        componentDidMount(){
          console.log("CIA")
            console.log(this.state.blabla)
           
    //         else{
    //         console.log("PROSHLO CARD3")
    //    ( response => this.setState({
            
    //         taskTitle: response.data.taskTitle,
    //         taskDescription: response.data.taskDescription,
    //          taskPriority: response.data.taskPriority,
    //          createdAtDate: response.data.createdAtDate,
    //          updatedAtDate: response.data.updatedAtDate
            
    //     }))
    // }
    }


    render() {
        let { taskTitle,taskDescription,taskPriority,createdAtDate,updatedAtDate
         } = this.state.blabla
         console.log("CIA3")
         console.log(this.state.blabla.taskList)

        return(
                                    
            <div  className="card mb-4 shadow-sm " style={{ width: '16rem' }}>
            
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{taskTitle}</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Description:{taskDescription}</li>
                  <li>Priority:{taskPriority}</li>
                  <li>Was Created:{createdAtDate}</li>
                  <li>Last Updated:{updatedAtDate}</li>  
                </ul>
                <h4>Move to:</h4>
                
                <button type="button" className="btn btn-lg btn-block btn-primary">In Progress</button>
                <button type="button" className="btn btn-lg btn-block btn-primary">Done</button>
              </div>
            </div>
            
              )
        }
      }
    
    






export default TaskCard;