import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Background Image
import Background from "../../assets/images/hero-5-bg.png";
import rocket from "../../assets/images/rocket.png";
import hero from "../../assets/images/hero-5-img.jpg";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Hero Start */}
        <section
          className="hero-5 position-relative"
          id="home"
          // Define Background Image
          style={{ background: `url(${Background})` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <img
                    src={rocket}
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                  <h1 className="font-weight-semibold my-4 hero-5-title">
                    We help startups launch their products with awesome website
                  </h1>
                  <p className="mb-5 text-muted subtitle w-75 mx-auto">
                    Nemo enim ipsam voluptatem quia voluptas sit aut aspernatur
                    aut fugit sed consequuntur magni dolores nesciunt.
                  </p>
                  <Link to="#" className="btn btn-primary rounded-pill me-2">
                    Get Started
                  </Link>
                </div>
                <Row className="justify-content-center mt-5">
                  <Col md={8}>
                    <div className="position-relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={hero}
                        alt=""
                        className="img-fluid d-block mx-auto"
                      />
                      <div className="bg-overlay bg-dark"></div>
                      <div className="hero-5-img-content">
                        <div
                          className="d-inline-block"
                          data-bs-toggle="modal"
                          data-bs-target="#watchvideomodal"
                        >
                          <Link
                            to="#"
                            onClick={this.openModal}
                            className="play-icon-circle video-play-icon"
                          >
                            <i>
                              <FeatherIcon icon="play" className="icon ps-1" />
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="12022651"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
