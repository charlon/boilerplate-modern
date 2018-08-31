import * as React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export interface Props {
  compiler: string;
  framework: string;
}

interface State {
  loading: boolean;
  events : [];
}

class AcademicCalendar extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      events: []
    };
  }

  public componentDidMount() {

    fetch('/calendar.json')
    .then(results => {
        return results.json();
      }).then(data => {
        this.setState({
          events: data,
          loading : false
        });
        console.log(this.state.loading);
        console.log(this.state.events);
      });
  }

  public render() {

    return (
      <div>
        <Card className="shadow-sm">
          <CardBody>
            <CardTitle>Academic Calender</CardTitle>
            <CardSubtitle>Hello from {this.props.compiler} and {this.props.framework}!</CardSubtitle>
            <CardText>asfdasd asdfasdfas</CardText>
          </CardBody>
        </Card>
      </div>
    );

  }

}

export default AcademicCalendar;
