import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link class="nav-link" to="/Circles">Circles</Link>
          </li>
          <li>
            <Link class="nav-link" to="/Lines">Lines</Link>
          </li>
          <li>
            <Link class="nav-link" to="/Cobweb">Cobweb</Link>
          </li>
          <li>
            <Link class="nav-link" to="/random">Random</Link>
          </li>
        </ul>
        </div>
      </nav>
    

      <Outlet />
    </>
  )
};

export default Layout;