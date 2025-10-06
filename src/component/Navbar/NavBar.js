import React, { Component } from "react";
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

// Import Logo
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

//import icon
import FeatherIcon from "feather-icons-react";

import ScrollspyNav from "./Scrollspy";

class NavbarPage extends Component {
  // render() {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  toggle = () => {
    this.setState({ isOpenMenu: !this.state.isOpenMenu });
  };

  render() {
    var targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        {/* Navbar Start */}
        <nav
          expand="lg"
          fixed="top"
          className={"navbar navbar-expand-lg fixed-top navbar-custom " + this.props.navClass}
          id="navbar"
        >
          <Container>
            {/* LOGO */}
            <NavbarBrand className="logo" href="/">
              {this.props.imglight === true ? (
                <img src={logolight} alt="" height="28" />
              ) : (
                <img src={logodark} alt="" height="28" />
              )}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <i>
                <FeatherIcon icon="menu" />
              </i>
            </NavbarToggler>
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpenMenu}
              className=" navbar-collapse"
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration="800"
                headerBackground="true"
                activeNavClass="active"
                className="navbar-collapse"
              >
                <Nav navbar className="ms-auto navbar-center" id="mySidenav">
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={item.navheading === "Home" ? "active" : ""}
                    >
                      <NavLink
                        className={item.navheading === "Home" ? "active" : ""}
                        href={"#" + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <Link to="" className="btn btn-sm rounded-pill nav-btn ms-lg-3">
                  Buy Now
                </Link>
              </ScrollspyNav>
            </Collapse>
          </Container>
        </nav>

        {/* </div>
      </nav> */}
        {/* Navbar End */}
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;
