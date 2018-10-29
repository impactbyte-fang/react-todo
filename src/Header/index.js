import React from "react"
import { Row, Col } from "reactstrap"

import "./index.css"

const Header = () => (
  <header>
    <Row className="justify-content-center text-center">
      <Col xs={12} md={6}>
        <h1>Todo</h1>
      </Col>
    </Row>
  </header>
)

export default Header
