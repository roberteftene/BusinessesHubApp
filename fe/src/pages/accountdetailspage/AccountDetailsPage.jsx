import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AccountDetailsPage.css";
import RocketImage from "../../_assets/_img/7750-[Converted].png";

function AccountDetailsPage() {
  return (
    <div className="detailsPage-container">
      <Row className="greetings-container">
        <Col sm={7} className="greetings-block-col">
          <div className="greetings-block">
            <h1 className="greetings-heading">Hi Robert!</h1>
            <p className="greetings-message">
              We are glad to see that you want to integrate your business in our
              hub. Please provide us a few more infos about you and your
              business before we get started.
            </p>
          </div>
        </Col>
        <Col sm={4}>
          <div className="greetings-image">
            <img src={RocketImage} alt="rocket" className="greetings-rocket" />
          </div>
        </Col>
      </Row>
      <Row className="additional-details-form-row">
        <div className="additional-details-form">
          <Form className="details-form">
            <h3 className="details-form-headThree">Personal Details</h3>

            <Form.Group controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date" placeholder="Enter date of birth" />
            </Form.Group>

            <h3 className="details-form-headThree">Service details</h3>
            <p>
              If you don't have all the details needed below you can also
              complete later in the application dashboard.
            </p>

            <Form.Group controlId="formServiceName">
              <Form.Label>Service name</Form.Label>
              <Form.Text className="text-muted">
                The name of your service is very important towards promoting it.
              </Form.Text>
              <Form.Control type="text" placeholder="Enter service name" />
            </Form.Group>

            <h5>Service location</h5>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter service city" />
            </Form.Group>

            <Form.Group controlId="formStreet">
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" placeholder="Enter service street" />
            </Form.Group>

            <Form.Group controlId="formNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter service street number"
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Text className="text-muted">
                Provide a short engaging description of your service and its
                benefits for your customers.
              </Form.Text>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group controlId="formServiceCategory">
              <Form.Label>Service category</Form.Label>
              <Form.Text className="text-muted">
                Choosing a category for your service will make it easier to be
                find by the possible clients.
              </Form.Text>
              <Form.Control as="select">
                <option value="">Healthy</option>
                <option value="">Relax</option>
                <option value="">Social</option>
                <option value="">Beauty</option>
                <option value="">Other</option>
              </Form.Control>
            </Form.Group>
            {/* TODO 
            checkboxes with the days of the week and if selected input time range
            prices and products? PDF or PNG or what??
            */}
            <Button variant="primary" type="submit">
              Start Exploring
            </Button>
          </Form>
        </div>
      </Row>
    </div>
  );
}

export default AccountDetailsPage;