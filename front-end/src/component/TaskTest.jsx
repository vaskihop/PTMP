import React from 'react'

export default function TaskTest(props) {
    return (
        <div>
            {props.taskList.map(task => {
                return (<div  className="card mb-4 shadow-sm " style={{ width: '16rem' }}>
            
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">{task.taskTitle}</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mt-3 mb-4">
                    {/* <li>Description:{taskDescription}</li>
                    <li>Priority:{taskPriority}</li>
                    <li>Was Created:{createdAtDate}</li>
                    <li>Last Updated:{updatedAtDate}</li>   */}
                  </ul>
                  <h4>Move to:</h4>
                  
                  <button type="button" className="btn btn-lg btn-block btn-primary">In Progress</button>
                  <button type="button" className="btn btn-lg btn-block btn-primary">Done</button>
                </div>
              </div>)
            })}
        </div>
    )
}
