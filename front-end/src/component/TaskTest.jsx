import React, { Component } from 'react';
import AxiosFunctions from '../service/AxiosFunctions';


class TaskTest extends Component {
  constructor(props){
    super(props);
    this.state={
      data:'',
      results: []
    }
    console.log(this.state.data)
  }

  handle=(event)=>{

    this.setState({
     data:event.target.value
    })
  }

  returnFun = (e) => {
    e.preventDefault();
    
    AxiosFunctions.projectSearchByTitle(this.state.data)
    .then(res => { 
      const data = res.data;
     
       console.log(data);
          
       this.setState({
        results: data
       })

       

       this.props.search(data);

          
    }) 
  

    // "bootstrap": {
    //   "version": "4.4.1",
    //   "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.4.1.tgz",
    //   "integrity": "sha512-tbx5cHubwE6e2ZG7nqM3g/FZ5PQEDMWmMGNrCUBVRPHXTJaH7CBDdsLeu3eCh3B1tzAxTnAbtmrzvWEvT2NNEA=="
    // },



    // "react-csv": {
    //   "version": "2.0.3",
    //   "resolved": "https://registry.npmjs.org/react-csv/-/react-csv-2.0.3.tgz",
    //   "integrity": "sha512-exyAdFLAxtuM4wNwLYrlKyPYLiJ7e0mv9tqPAd3kq+k1CiJFtznevR3yP0icv5q/y200w+lzNgi7TQn1Wrhu0w=="
    // },






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
export default TaskTest;



