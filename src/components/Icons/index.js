/* eslint-disable no-script-url */
import React, { Component } from 'react';
import blue from '../../assets/img/brand/blue.png';
import team from '../../assets/img/theme/team-1.jpg';
import team2 from '../../assets/img/theme/team-2.jpg';
import team3 from '../../assets/img/theme/team-3.jpg';
import team4 from '../../assets/img/theme/team-4.jpg';
import team5 from '../../assets/img/theme/team-5.jpg';

class Icon extends Component {
  render() {
    return (
            <div>
            // Sidenav
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
                        <a className="nav-link active" href="/icons">
                          <i className="ni ni-planet text-orange"></i>
                          <span className="nav-link-text">Icons</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/map">
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
            // Main content
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
                        <h6 className="h2 text-white d-inline-block mb-0">Icons</h6>
                        <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                          <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                            <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                            <li className="breadcrumb-item"><a href="#">Components</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Icons</li>
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
                <div className="row justify-content-center">
                  <div className=" col ">
                    <div className="card">
                      <div className="card-header bg-transparent">
                        <h3 className="mb-0">Icons</h3>
                      </div>
                      <div className="card-body">
                        <div className="row icon-examples">
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="active-40" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-active-40"></i>
                                <span>active-40</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="air-baloon" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-air-baloon"></i>
                                <span>air-baloon</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="album-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-album-2"></i>
                                <span>album-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="align-center" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-align-center"></i>
                                <span>align-center</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="align-left-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-align-left-2"></i>
                                <span>align-left-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="ambulance" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-ambulance"></i>
                                <span>ambulance</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="app" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-app"></i>
                                <span>app</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="archive-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-archive-2"></i>
                                <span>archive-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="atom" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-atom"></i>
                                <span>atom</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="badge" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-badge"></i>
                                <span>badge</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bag-17" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bag-17"></i>
                                <span>bag-17</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="basket" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-basket"></i>
                                <span>basket</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bell-55" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bell-55"></i>
                                <span>bell-55</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bold-down" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bold-down"></i>
                                <span>bold-down</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bold-left" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bold-left"></i>
                                <span>bold-left</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bold-right" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bold-right"></i>
                                <span>bold-right</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bold-up" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bold-up"></i>
                                <span>bold-up</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bold" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bold"></i>
                                <span>bold</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="book-bookmark" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-book-bookmark"></i>
                                <span>book-bookmark</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="books" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-books"></i>
                                <span>books</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="box-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-box-2"></i>
                                <span>box-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="briefcase-24" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-briefcase-24"></i>
                                <span>briefcase-24</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="building" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-building"></i>
                                <span>building</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bulb-61" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bulb-61"></i>
                                <span>bulb-61</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bullet-list-67" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bullet-list-67"></i>
                                <span>bullet-list-67</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="bus-front-12" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-bus-front-12"></i>
                                <span>bus-front-12</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="button-pause" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-button-pause"></i>
                                <span>button-pause</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="button-play" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-button-play"></i>
                                <span>button-play</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="button-power" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-button-power"></i>
                                <span>button-power</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="calendar-grid-58" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-calendar-grid-58"></i>
                                <span>calendar-grid-58</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="camera-compact" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-camera-compact"></i>
                                <span>camera-compact</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="caps-small" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-caps-small"></i>
                                <span>caps-small</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="cart" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-cart"></i>
                                <span>cart</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="chart-bar-32" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-chart-bar-32"></i>
                                <span>chart-bar-32</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="chart-pie-35" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-chart-pie-35"></i>
                                <span>chart-pie-35</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="chat-round" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-chat-round"></i>
                                <span>chat-round</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="check-bold" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-check-bold"></i>
                                <span>check-bold</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="circle-08" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-circle-08"></i>
                                <span>circle-08</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="cloud-download-95" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-cloud-download-95"></i>
                                <span>cloud-download-95</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="cloud-upload-96" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-cloud-upload-96"></i>
                                <span>cloud-upload-96</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="compass-04" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-compass-04"></i>
                                <span>compass-04</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="controller" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-controller"></i>
                                <span>controller</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="credit-card" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-credit-card"></i>
                                <span>credit-card</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="curved-next" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-curved-next"></i>
                                <span>curved-next</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="delivery-fast" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-delivery-fast"></i>
                                <span>delivery-fast</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="diamond" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-diamond"></i>
                                <span>diamond</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="email-83" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-email-83"></i>
                                <span>email-83</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="fat-add" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-fat-add"></i>
                                <span>fat-add</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="fat-delete" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-fat-delete"></i>
                                <span>fat-delete</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="fat-remove" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-fat-remove"></i>
                                <span>fat-remove</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="favourite-28" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-favourite-28"></i>
                                <span>favourite-28</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="folder-17" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-folder-17"></i>
                                <span>folder-17</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="glasses-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-glasses-2"></i>
                                <span>glasses-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="hat-3" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-hat-3"></i>
                                <span>hat-3</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="headphones" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-headphones"></i>
                                <span>headphones</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="html5" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-html5"></i>
                                <span>html5</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="istanbul" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-istanbul"></i>
                                <span>istanbul</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="circle-08" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-circle-08"></i>
                                <span>circle-08</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="key-25" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-key-25"></i>
                                <span>key-25</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="laptop" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-laptop"></i>
                                <span>laptop</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="like-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-like-2"></i>
                                <span>like-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="lock-circle-open" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-lock-circle-open"></i>
                                <span>lock-circle-open</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="map-big" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-map-big"></i>
                                <span>map-big</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="mobile-button" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-mobile-button"></i>
                                <span>mobile-button</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="money-coins" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-money-coins"></i>
                                <span>money-coins</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="note-03" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-note-03"></i>
                                <span>note-03</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="notification-70" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-notification-70"></i>
                                <span>notification-70</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="palette" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-palette"></i>
                                <span>palette</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="paper-diploma" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-paper-diploma"></i>
                                <span>paper-diploma</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="pin-3" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-pin-3"></i>
                                <span>pin-3</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="planet" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-planet"></i>
                                <span>planet</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="ruler-pencil" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-ruler-pencil"></i>
                                <span>ruler-pencil</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="satisfied" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-satisfied"></i>
                                <span>satisfied</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="scissors" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-scissors"></i>
                                <span>scissors</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="send" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-send"></i>
                                <span>send</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="settings-gear-65" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-settings-gear-65"></i>
                                <span>settings-gear-65</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="settings" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-settings"></i>
                                <span>settings</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="single-02" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-single-02"></i>
                                <span>single-02</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="single-copy-04" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-single-copy-04"></i>
                                <span>single-copy-04</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="sound-wave" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-sound-wave"></i>
                                <span>sound-wave</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="spaceship" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-spaceship"></i>
                                <span>spaceship</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="square-pin" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-square-pin"></i>
                                <span>square-pin</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="support-16" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-support-16"></i>
                                <span>support-16</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="tablet-button" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-tablet-button"></i>
                                <span>tablet-button</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="tag" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-tag"></i>
                                <span>tag</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="tie-bow" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-tie-bow"></i>
                                <span>tie-bow</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="time-alarm" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-time-alarm"></i>
                                <span>time-alarm</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="trophy" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-trophy"></i>
                                <span>trophy</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="tv-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-tv-2"></i>
                                <span>tv-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="umbrella-13" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-umbrella-13"></i>
                                <span>umbrella-13</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="user-run" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-user-run"></i>
                                <span>user-run</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="vector" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-vector"></i>
                                <span>vector</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="watch-time" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-watch-time"></i>
                                <span>watch-time</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="world" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-world"></i>
                                <span>world</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="zoom-split-in" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-zoom-split-in"></i>
                                <span>zoom-split-in</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="collection" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-collection"></i>
                                <span>collection</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="image" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-image"></i>
                                <span>image</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="shop" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-shop"></i>
                                <span>shop</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="ungroup" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-ungroup"></i>
                                <span>ungroup</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="world-2" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-world-2"></i>
                                <span>world-2</span>
                              </div>
                            </button>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <button type="button" className="btn-icon-clipboard" data-clipboard-text="ui-04" title="Copy to clipboard">
                              <div>
                                <i className="ni ni-ui-04"></i>
                                <span>ui-04</span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
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

export default Icon;
