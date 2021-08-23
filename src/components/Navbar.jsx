import React from 'react'
import img1 from '../images/yoga1.jpg';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark back-color">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse list-items" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto py-2 mb-2 mb-lg-0 ">
                <li className="nav-item mx-3">
                  <a className="nav-link " aria-current="page" href="#"> <h6 className="text-white"> Exlpore</h6></a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link active text-info " aria-current="page" href="#" > <h6> Instructor</h6> </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link " aria-current="page" href="#"> <h6 className="text-white"> Shop</h6> </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link " aria-current="page" href="#"> <h6 className="text-white">Contact us</h6> </a>
                </li>
              </ul>
              <i className="far fa-bell text-white px-3"> </i>
              <i className="fas fa-cart-plus text-white px-3"></i>
              <a href="#" className="px-3"> <img src={img1} alt="not found" style={{height:'40px',width:'40px',borderRadius:'50px',border:'2px solid aqua'}}/> </a>

            </div>
          </div>
        </nav>
        </div>
    )
}

export default Navbar;
