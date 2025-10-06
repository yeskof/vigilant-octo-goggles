import React, { Component, Suspense } from "react";
import Switch from "../../component/Switch";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Section = React.lazy(() => import("./Section"));
const Services = React.lazy(() => import("../../component/Services"));
const Feature = React.lazy(() => import("../../component/Feature"));
const Pricing = React.lazy(() => import("../../component/Pricing"));
const Team = React.lazy(() => import("../../component/Team"));
const Blog = React.lazy(() => import("../../component/Blog"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));

class Layout6 extends Component {
  // Loader
  Loader = () => {
    return (
      <div id="preloader">
      <div id="status">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    </div>
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 3, idnm: "features", navheading: "Features" },
        { id: 4, idnm: "pricing", navheading: "Pricing" },
        { id: 5, idnm: "team", navheading: "Team" },
        { id: 6, idnm: "blog", navheading: "Blog" },
        { id: 7, idnm: "contact", navheading: "Contact Us" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "navbar-light nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />

          {/* Importing Section */}
          <Section />

          {/* Importing Section */}
          <Services />

          {/* Importing Feature */}
          <Feature />

          {/* Importing Pricing */}
          <Pricing />

          {/* Importing Pricing */}
          <Team />

          {/* Importing Blog */}
          <Blog />

          {/* Importing Contact */}
          <Contact />

          {/* Importing Footer */}
          <Footer />

          {/* Importing Mode */}
          <Switch />

        </Suspense>
      </React.Fragment>
    );
  }
}

export default Layout6;
