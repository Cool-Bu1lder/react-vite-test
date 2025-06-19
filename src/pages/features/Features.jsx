/* TODO: 
    - Use React-bootstrap
    - Separate into components

    [for hero section] - use another example
*/

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import './Features.css'

function Features() {
  return (
    <>
      <Container className="px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Custom cards</h2>
        {/* ORIGINAL:
        <Row className="row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        CONVERTED TO: */}
        <Row lg={3} xs={1} className="align-items-stretch g-4 py-5">
          <Col>
            <Card
              className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url('unsplash-photo-1.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i class="bi bi-geo-fill me-2"></i>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i class="bi bi-calendar3 me-2"></i>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>

          <Col>
            <Card
              className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url('unsplash-photo-2.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i class="bi bi-geo-fill me-2"></i>
                    <small>Pakistan</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i class="bi bi-calendar3 me-2"></i>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>

          <Col>
            <Card
              className="card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: "url('unsplash-photo-3.jpg')" }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <i class="bi bi-geo-fill me-2"></i>
                    <small>California</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <i class="bi bi-calendar3 me-2"></i>
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Features
