import * as React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

interface Props {
  title: string;
  subtitle: string;
}

interface State {
  count: number;
}

class ButtonCounter extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  public incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  public render() {

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button onClick={this.incrementCount}>You clicked me {this.state.count} times.</Button>
          </CardBody>
        </Card>
      </div>
    );
  }

};

export default ButtonCounter;
