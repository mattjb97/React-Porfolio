import React from 'react';
import "./NavBar.css"



function NavBar(props) {
    const styles = {
        headerStyle: {
          background: props.color
        },
        headingStyle: {
          fontSize: 100
        }
      };
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" style={styles.headerStyle} href="/">Matthew Bohl</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/matthew-bohl-93785a127/">LinkedIn</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://github.com/mattjb97">GitHub</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Networks
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="">Certificates</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="/">Resume</a></li>                     
                </ul>
                </li>
             
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar