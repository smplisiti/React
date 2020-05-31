import React,{ Component } from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import {formatDate, toSentenceCase} from "../shared/helpers"

export default class CampsiteInfo extends Component {
  
  renderCampsite({image, name, description}) {
    return (
      <div className="col-md-5 m-1">
      <Card>
          <CardImg top src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
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
  render() {
    const { campsite } = this.props;
    return campsite ? (
      <div className="row">
        {this.renderCampsite(campsite)} {this.renderComments(campsite.comments)}
      </div>
    ) : (
      <div />
    );
  }
}
 
  