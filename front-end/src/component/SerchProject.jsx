import React, { Component } from 'react';
import AxiosFunctions from '../service/AxiosFunctions';


class SerchProject extends Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      results: [],
     // projectId : this.props.match.params.id
    }
    // console.log(this.state.data)\
    console.log("projectId")
    console.log(props.projectId)
    console.log("projectId")
  }

  handle=(event)=>{

    this.setState({
     data:event.target.value
    })
  }


  
  returnFun = (e) => {
    e.preventDefault();

    AxiosFunctions.taskSearchByIdOrTitle(this.props.projectId,this.state.data)
    .then(res => { 
      const data = res.data;
     
       console.log(data);
          
       this.setState({
        results: data
       })

       console.log("Pagauna");
       console.log(data);
       console.log("Pagauna2");

       this.props.search(data);//Kaskas negerai cia?

       console.log("Cia jau nepagauna");
       console.log(data);
       console.log("Cia jau nepagauna");   
    }) 
    console.log(this.state.data); 
  }
    render() {


        return (
          
            
<div className="row">

    <div className=" container d-flex justify-content-between">
      
      <form className="form-inline my-2 my-lg-0" onSubmit={this.returnFun}>
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" 
      onChange = {this.handle}/>

      <button type="submit" 
      className="btn btn-dark">Search</button>
    </form>
      
      
    </div>
    </div>
 
        )
    }
}
export default SerchProject;



