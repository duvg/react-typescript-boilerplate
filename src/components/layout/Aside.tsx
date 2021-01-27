

const Aside  = () => {
    return (
      <div className="main-sidebar sidebar-dark-primary elevation-4">
      {/**  Brand Logo */}
      <a href="index3.html" className="brand-link">
        <img src="img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"  />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
  
      {/**  Sidebar */}
      <div className="sidebar">
        {/**  Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">User name</a>
          </div>
        </div>
  
        {/**  SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
  
        {/**  Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/**  Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link active">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Dashboard v1</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index2.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Dashboard v2</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./index3.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Dashboard v3</p>
                  </a>
                </li>
              </ul>
            </li>
           
                
          </ul>
        </nav>
        {/**  /.sidebar-menu */}
      </div>
      {/**  /.sidebar */}
    </div>
    );
}
 
export default Aside;