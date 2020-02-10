import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Acordion.css";

function Acordion(props) {
  return (
    <React.Fragment>
      <Accordion className="accordion">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click me!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </React.Fragment>
  );
}

export default Acordion;
