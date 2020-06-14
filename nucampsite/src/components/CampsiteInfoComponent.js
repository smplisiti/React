import React, {Component} from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from "reactstrap";
import { Link } from "react-router-dom";
import { formatDate, toSentenceCase } from "../shared/helpers";

class CommentForm extends Component {
  render() {
    return (
      <Button outline="true"><i className="fa fa-pencil"/> Submit Comment</Button>
    )
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
