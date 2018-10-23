import React, { Component } from 'react';
export default class ContainerHome extends Component {
  
  render() {
    
    return (
      <div className="container mt-5">
        <h2>Read me</h2>
        <p>learning single page application reactjs and bootstrap 4</p>
        <p> 
          main url: <a href={"/"}> {window.location.hostname}</a><br/>
          admin url: <a href={"/admin"}> {window.location.hostname+"/admin"}</a><br/>
          account: <span className="text-danger">admin@example.com</span><br/>
          password: <span className="text-danger">admin</span>
        </p>
        <i>Main:</i>
        <ul>
          <li><a href="https://nodejs.org/en/">nodejs</a></li>
          <li><a href="https://reactjs.org/docs/getting-started.html">reactjs</a> </li>
          <li><a href="https://redux.js.org/">redux</a></li>
          <li><a href="https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html">redux saga</a></li>
          <li><a href="https://reacttraining.com/react-router/core/guides/philosophy">react router dom</a></li>
        </ul>
        <i>Helpers:</i>
        <ul>
          <li><a href="https://lodash.com/docs/4.17.10">__lodash</a></li>
          <li><a href="https://github.com/axios/axios">axios js</a></li>
          <li><a href="https://www.npmjs.com/package/validatorjs">validatorjs</a></li>
          <li><a href="https://github.com/dcodeIO/bcrypt.js/blob/master/README.md">hash password (bcryptjs)</a></li>
          <li><a href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</a></li>
        </ul>
        <i>Apis:</i>
        <ul>
          <li><a href="https://www.mockapi.io/projects">mockapi (api data)</a></li>
          <li><a href="https://cloudinary.com/documentation/node_integration">cloudinary (api media)</a></li>
        </ul>
        <i>Refers:</i>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API">web development (web api)</a></li>
          <li><a href="https://www.tutorialspoint.com/es6">es6 tutorialspoint</a></li>
          <li><a href="https://httpstatuses.com/">http statuses code</a></li>
          <li><a href="https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp">bootstrap 4</a></li>
          <li><a href="https://fontawesome.com/v4.7.0/">font awesome 4.7</a></li>
        </ul>
      </div>
    )
  }
}
