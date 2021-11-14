import React from 'react';
// import { NavLink } from 'react-router-dom';
import './all.css';



function Header() {
    return (
        <React.Fragment>
            <div id="header">
  <div class="topbar">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <ul>
            <li><i class="fa fa-volume-control-phone" aria-hidden="true"></i> Bhilwara, Rajasthan</li>
            <li>|</li>
            <li><a href="mailto:"><i class="fa fa-envelope-o" aria-hidden="true"></i> kumarisandy29@gmail.com</a></li>
            <li>|</li>
            <li><i class="fa fa-clock-o" aria-hidden="true"></i> https://github.com/sandy12345231</li>
          </ul>
        </div>
        <div class="col-sm-4">
          <ul class="social-icon">
            <li class="followus-label">Follow Us:</li>
            <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
                <img src="images/logo.png" alt="Omnific"/>
             
                </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbartoggle">
              <ul class="navbar-nav float-right">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                  
               
                <li class="nav-item">
                  <a class="nav-link" href="#">Logout</a>
                </li>               
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>  
  </header>
</div>
            
        </React.Fragment>
    )
}

export default Header
