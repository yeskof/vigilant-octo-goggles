import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Our Services</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem ab illo inventore.
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="box" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">Digital Design</h4>
                    <p className="text-muted mb-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4 active">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="layers" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">Awesome Support</h4>
                    <p className="text-muted mb-0">
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="server" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">Easy to customize</h4>
                    <p className="text-muted mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
