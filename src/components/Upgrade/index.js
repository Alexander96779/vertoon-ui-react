/* eslint-disable no-script-url */
import React, { Component } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

class Upgrade extends Component {
  render() {
    return (
    <div>
    {/* Sidenav */}
        <Sidebar {...this.props}/>
  {/* Main content */}
  <div className="main-content" id="panel">
    {/* Topnav */}
        <Navbar />
    {/* Header */}
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
              <h6 className="h2 text-white d-inline-block mb-0">Upgrade to PRO</h6>
              <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                  <li className="breadcrumb-item"><a href="#">Examples</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Upgrade to pro</li>
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
      <div className="row mt--5">
        <div className="col-md-10 ml-auto mr-auto">
          <div className="card card-upgrade">
            <div className="card-header text-center border-bottom-0">
              <h4 className="card-title">Argon Dashboard PRO</h4>
              <p className="card-category">Are you looking for more components? Please check our Premium Version of Argon Dashboard.</p>
            </div>
            <div className="card-body">
              <div className="table-responsive table-upgrade">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-center">Free</th>
                      <th className="text-center">PRO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Elements</td>
                      <td className="text-center">100</td>
                      <td className="text-center">200</td>
                    </tr>
                    <tr>
                      <td>Plugins</td>
                      <td className="text-center">4</td>
                      <td className="text-center">16</td>
                    </tr>
                    <tr>
                      <td>Example Pages</td>
                      <td className="text-center">6</td>
                      <td className="text-center">25</td>
                    </tr>
                    <tr>
                      <td>DataTables, VectorMap, SweetAlert, Wizard,<br /> jQueryValidation, FullCalendar etc...</td>
                      <td className="text-center"><i className="ni ni-fat-remove text-danger"></i></td>
                      <td className="text-center"><i className="ni ni-check-bold text-success"></i></td>
                    </tr>
                    <tr>
                      <td>Mini Sidebar</td>
                      <td className="text-center"><i className="ni ni-fat-remove text-danger"></i></td>
                      <td className="text-center"><i className="ni ni-check-bold text-success"></i></td>
                    </tr>
                    <tr>
                      <td>Premium Support</td>
                      <td className="text-center"><i className="ni ni-fat-remove text-danger"></i></td>
                      <td className="text-center"><i className="ni ni-check-bold text-success"></i></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="text-center">Free</td>
                      <td className="text-center">Just $79</td>
                    </tr>
                    <tr>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <a href="#" className="btn btn-round btn-default disabled">Current Version</a>
                      </td>
                      <td className="text-center">
                        <a target="_blank" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=ad-update-pro" className="btn btn-round btn-primary">Upgrade to PRO</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Upgrade;
