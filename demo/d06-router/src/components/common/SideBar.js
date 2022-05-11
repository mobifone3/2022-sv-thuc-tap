import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" className="brand-link">
        <span className="brand-text font-weight-light">HIEUNQ</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar" style={{ minHeight: "100vh" }}>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item menu-open">
              <Link to={{ path: "/content", state: { a: "asdfasdf" } }} className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={{ pathname: "/app", state: { a: "asdfasdf" } }} className="nav-link active">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v1</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/demo" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v2</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/abc" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Dashboard v3</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
