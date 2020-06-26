import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { required, minLength, maxLength } from "../shared/validation";
import { formatDate, toSentenceCase } from "../shared/helpers";

import { LocalForm, Control, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

class CommentForm extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  handleSubmit = (values) => alert(JSON.stringify(values));

  render() {
    return (
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>
                  Rating
                </Label>
                <Col md={4}>
                  <Control.select
                    model=".rating"
                    className="form-control"
                    name="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="yourName" md={2}>
                  Your Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".yourName"
                    className="form-control"
                    id="yourName"
                    name="yourName"
                    placeholder="Your Name"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".yourName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row row>
                <Label htmlFor="comment" md={2}>
                  Comment
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil" /> Submit Comment
        </Button>
      </>
    );
  }
}

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  return comments ? (
    <div className="col-md-5 m-1">
      <h4>Comments</h4>
      <div>
        {comments.map(({ text, author, date, id }) => (
          <div key={id}>
            <p>{toSentenceCase(text)}</p>
            <p>
              -- {author} {formatDate(date)}
            </p>
          </div>
        ))}
        <CommentForm />
      </div>
    </div>
  ) : (
    <div />
  );
}
function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
