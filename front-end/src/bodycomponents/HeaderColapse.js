import React, { Component } from 'react';



class HeaderColapse extends Component {
    render() {
        return (
           


<div className="bg-dark collapse show" id="navbarHeader" style="">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About</h4>
          <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div className="col-sm-4 offset-md-1 py-4">
          <h4 className="text-white">Contact</h4>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white">Follow on Twitter</a></li>
            <li><a href="#" className="text-white">Like on Facebook</a></li>
            <li><a href="#" className="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


)
}
}



export default HeaderColapse;
