import React, { Component } from 'react';
import blue from '../../assets/img/brand/blue.png';

class Sidebar extends Component {
  render() {
    const { location } = this.props;
    const dashboardClass = location.pathname.match(/^\/dashboard/) ? 'active' : '';
    const iconsClass = location.pathname.match(/^\/icons/) ? 'active' : '';
    const mapClass = location.pathname.match(/^\/map/) ? 'active' : '';
    const profileClass = location.pathname.match(/^\/profile/) ? 'active' : '';
    const upgradeClass = location.pathname.match(/^\/upgrade/) ? 'active' : '';
    const upgradeProClass = location.pathname.match(/^\/upgrade/) ? 'active active-pro' : '';

    return (
<nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div className="scrollbar-inner">
      <div className="sidenav-header  align-items-center">
        <a className="navbar-brand" href="/dashboard">
          <img src={blue} className="navbar-brand-img" alt="..." />
        </a>
      </div>
      <div className="navbar-inner">
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`${dashboardClass} nav-link`} href="/dashboard">
                <i className="ni ni-tv-2 text-primary"></i>
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`${iconsClass} nav-link`} href="/icons">
                <i className="ni ni-planet text-orange"></i>
                <span className="nav-link-text">Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`${mapClass} nav-link`} href="/map">
                <i className="ni ni-pin-3 text-primary"></i>
                <span className="nav-link-text">Google</span>
              </a>
            </li>
            <li className="nav-item">
              <a className={`${profileClass} nav-link`} href="/profile">
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
              <a className={`${upgradeClass} nav-link`} href="/upgrade">
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
              <a className={`${upgradeProClass} nav-link`} href="/upgrade">
                <i className="ni ni-send text-dark"></i>
                <span className="nav-link-text">Upgrade to PRO</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    );
  }
}

export default Sidebar;
