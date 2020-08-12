/* eslint-disable no-script-url */
import React, { Component } from 'react';
import blue from '../../assets/img/brand/blue.png';
import team from '../../assets/img/theme/team-1.jpg';
import team2 from '../../assets/img/theme/team-2.jpg';
import team3 from '../../assets/img/theme/team-3.jpg';
import team4 from '../../assets/img/theme/team-4.jpg';
import team5 from '../../assets/img/theme/team-5.jpg';

class Map extends Component {
  render() {
    return (
      <div>
  {/* Sidenav */}
  <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div className="scrollbar-inner">
      {/* Brand */}
      <div className="sidenav-header  align-items-center">
        <a className="navbar-brand" href="/dashboard">
        <img src={blue} className="navbar-brand-img" alt="..." />
        </a>
      </div>
      <div className="navbar-inner">
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          {/* Nav items */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                <i className="ni ni-tv-2 text-primary"></i>
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/icons">
                <i className="ni ni-planet text-orange"></i>
                <span className="nav-link-text">Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/map">
                <i className="ni ni-pin-3 text-primary"></i>
                <span className="nav-link-text">Google</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                <i className="ni ni-single-02 text-yellow"></i>
                <span className="nav-link-text">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tables">
                <i className="ni ni-bullet-list-67 text-default"></i>
                <span className="nav-link-text">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                <i className="ni ni-key-25 text-info"></i>
                <span className="nav-link-text">Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                <i className="ni ni-circle-08 text-pink"></i>
                <span className="nav-link-text">Register</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/upgrade">
                <i className="ni ni-send text-dark"></i>
                <span className="nav-link-text">Upgrade</span>
              </a>
            </li>
          </ul>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading p-0 text-muted">
            <span className="docs-normal">Documentation</span>
          </h6>
          {/* Navigation */}
          <ul className="navbar-nav mb-md-3">
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html" target="_blank">
                <i className="ni ni-spaceship"></i>
                <span className="nav-link-text">Getting started</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html" target="_blank">
                <i className="ni ni-palette"></i>
                <span className="nav-link-text">Foundation</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html" target="_blank">
                <i className="ni ni-ui-04"></i>
                <span className="nav-link-text">Components</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://demos.creative-tim.com/argon-dashboard/docs/plugins/charts.html" target="_blank">
                <i className="ni ni-chart-pie-35"></i>
                <span className="nav-link-text">Plugins</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active active-pro" href="/upgrade">
                <i className="ni ni-send text-dark"></i>
                <span className="nav-link-text">Upgrade to PRO</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  {/* Main content */}
  <div className="main-content" id="panel">
    {/* Topnav */}
    <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Search form */}
          <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative input-group-merge">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-search"></i></span>
                </div>
                <input className="form-control" placeholder="Search" type="text" />
              </div>
            </div>
            <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>
          {/* Navbar links */}
          <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item d-xl-none">
              {/* Sidenav toggler */}
              <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li className="nav-item d-sm-none">
              <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                <i className="ni ni-zoom-split-in"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-bell-55"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                {/* Dropdown header */}
                <div className="px-3 py-3">
                  <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">13</strong> notifications.</h6>
                </div>
                {/* List group */}
                <div className="list-group list-group-flush">
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src={team} className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src={team2} className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src={team3} className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>5 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">Your posts have been liked a lot.</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src={team4} className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>2 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                      </div>
                    </div>
                  </a>
                  <a href="#!" className="list-group-item list-group-item-action">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <img alt="Image placeholder" src={team5} className="avatar rounded-circle" />
                      </div>
                      <div className="col ml--2">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-0 text-sm">John Snow</h4>
                          </div>
                          <div className="text-right text-muted">
                            <small>3 hrs ago</small>
                          </div>
                        </div>
                        <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                      </div>
                    </div>
                  </a>
                </div>
                {/* View all */}
                <a href="#!" className="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-ungroup"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                <div className="row shortcuts px-4">
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                      <i className="ni ni-calendar-grid-58"></i>
                    </span>
                    <small>Calendar</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                      <i className="ni ni-email-83"></i>
                    </span>
                    <small>Email</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                      <i className="ni ni-credit-card"></i>
                    </span>
                    <small>Payments</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                      <i className="ni ni-books"></i>
                    </span>
                    <small>Reports</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                      <i className="ni ni-pin-3"></i>
                    </span>
                    <small>Maps</small>
                  </a>
                  <a href="#!" className="col-4 shortcut-item">
                    <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                      <i className="ni ni-basket"></i>
                    </span>
                    <small>Shop</small>
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li className="nav-item dropdown">
              <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src={team4} />
                  </span>
                  <div className="media-body  ml-2  d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu  dropdown-menu-right ">
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-settings-gear-65"></i>
                  <span>Settings</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-support-16"></i>
                  <span>Support</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Header */}
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
              <h6 className="h2 text-white d-inline-block mb-0">Google maps</h6>
              <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                  <li className="breadcrumb-item"><a href="#">Maps</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Google maps</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 col-5 text-right">
              <a href="#" className="btn btn-sm btn-neutral">New</a>
              <a href="#" className="btn btn-sm btn-neutral">Filters</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page content */}
    <div className="container-fluid mt--6">
      <div className="row">
        <div className="col">
          <div className="card border-0">
            <div id="map-default" className="map-canvas" data-lat="40.748817" data-lng="-73.985428"></div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer pt-0">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
            <div className="copyright text-center  text-lg-left  text-muted">
              &copy; 2020 <a href="https://www.creative-tim.com" className="font-weight-bold ml-1" target="_blank">Creative Tim</a>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative Tim</a>
              </li>
              <li className="nav-item">
                <a href="https://www.creative-tim.com/presentation" className="nav-link" target="_blank">About Us</a>
              </li>
              <li className="nav-item">
                <a href="http://blog.creative-tim.com" className="nav-link" target="_blank">Blog</a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" className="nav-link" target="_blank">MIT License</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</div>
    );
  }
}

export default Map;
