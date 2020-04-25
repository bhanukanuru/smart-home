import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav, Breadcrumb, BreadcrumbItem } from "reactstrap";
import firebase from "firebase";

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <h2>Smart-Home</h2>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Nav tabs>
        <NavItem>
          {/* <NavLink href="/">Home</NavLink> */}
          <Link to="/"> Home </Link>
        </NavItem>
      </Nav>
      <Nav tabs>
        <NavItem>
          <Link to="/infrastructures"> Infrastructures  </Link>{" "}
        </NavItem>
      </Nav>
      <Nav tabs>
        <NavItem>
          <Link to="/logout" onClick={() => firebase.auth().signOut()}>
            Logout
          </Link>
        </NavItem>
      </Nav>
    </nav>

    {/* <Link to="/">Home</Link> */}
    {/* <Link to="/infrastructures">Infrastructures</Link> */}
    {/* <li><Link>Devices</Link></li> */}
  </div>
);

export default Header;
