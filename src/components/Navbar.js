import React from 'react'
import {Link} from 'react-router-dom';

const Navbar =()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link " to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item "><Link className="nav-link" to="/about">About</Link> </li>
      <li className="nav-item "><Link className="nav-link" to="/business">Business</Link></li>
      <li className="nav-item "><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li className="nav-item "><Link className="nav-link" to="/general">General</Link></li>
      <li className="nav-item "><Link className="nav-link" to="/health">Health</Link></li>
      <li className="nav-item "><Link className="nav-link" to="/science">Science</Link></li>
      <li className="nav-item "><Link className="nav-link" to="/sports">Sports</Link></li>
      <li className="nav-item "><Link className="nav-link" to="/technology">Technology</Link></li>
    </ul>
    <div>
      <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>

    </div>
  </div>
</nav>
      </div>
    )
}

export default Navbar
