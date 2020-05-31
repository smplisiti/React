import React,{ Component } from "react"
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
    render() {
          const {campsite} = this.props
         return campsite ? <div className="row">{this.renderCampsite(this.props.campsite)}</div> : <div />
    }
}

