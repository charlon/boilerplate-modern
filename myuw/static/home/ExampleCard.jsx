import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

export class ExampleCard extends React.Component {
 render() {

   return (
     <div>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>
   )
 }
}
