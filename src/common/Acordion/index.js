import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import "./Acordion.css";

function Acordion(props) {
  const [chevron, setChevron] = useState("fa fa-chevron-right");
  const accordionClickFun = () => {
    if (chevron === "fa fa-chevron-right") {
      setChevron("fa fa-chevron-down");
    } else if (chevron === "fa fa-chevron-down") {
      setChevron("fa fa-chevron-right");
    }
  };
  return (
    <React.Fragment>
      <Accordion className="accordion">
        <Card onClick={accordionClickFun}>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <span>Click me!</span>
            <i class={chevron} aria-hidden="true"></i>
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
