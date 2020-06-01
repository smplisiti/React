import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import {formatDate, toSentenceCase} from "../shared/helpers"

function RenderCampsite({campsite}) {
    return (
      <div className="col-md-5 m-1">
      <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  function RenderComments({comments}) {
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
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.campsite.comments} />
          </div>
        </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
 
  