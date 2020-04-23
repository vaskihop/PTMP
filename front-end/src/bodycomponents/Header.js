import React, { Component } from 'react';



class Header extends Component {
    render() {
        return (
            
<div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container d-flex justify-content-between">
      <a href="http://localhost:3000/" className="navbar-brand d-flex align-items-center">
      <svg className="bi bi-exclude" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M1.5 0A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12H4v2.5A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4H12V1.5A1.5 1.5 0 0010.5 0h-9zM12 4H5.5A1.5 1.5 0 004 5.5V12h6.5a1.5 1.5 0 001.5-1.5V4z" clipRule="evenodd"/>
</svg>
        <strong>&nbsp;PTMP</strong>
      </a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
      
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
        )
    }
}
export default Header;


