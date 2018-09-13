import * as React from 'react';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';

class ExampleCard extends React.Component<{}> {

  public render() {
    return (
      <div>
        <Card className="shadow-sm">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

}

export default ExampleCard;
