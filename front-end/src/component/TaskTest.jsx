import React, { Component } from 'react';
import Axios from 'axios';


class TaskTest extends Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      results: [],
      currentPage:props.ser,
      prepage:props.ser2      
    }
  }

  handle=(event)=>{
    this.setState({
     data:event.target.value
    })
  }

  returnFun = (e) => {
  e.preventDefault();
    Axios.get("http://localhost:8080/api/projects/projectSearch?title="+this.state.data+"&page="+this.state.currentPage+"&size="+this.state.prepage)
      .then(res => { 
        const data = res.data; 
        console.log("Sitas")  
          console.log(data)
          console.log("Sitas")      
         this.setState({
           results: data
          })
       this.props.search(data); 
    }) 
  }

    render() {    
        return (
<div className="row">
    <div className=" container d-flex justify-content-between">
      <form className="form-inline my-2 my-lg-0" onSubmit={this.returnFun}>
      <span class="glyphicon glyphicon-search"></span>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
          onChange = {this.handle}/>
      </form>
  </div>
</div>
        )
    }
}
export default TaskTest;



