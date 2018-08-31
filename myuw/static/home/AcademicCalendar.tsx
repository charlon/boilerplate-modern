import * as React from 'react';
import {
  Card, CardBody,
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

    // use native fetch to consume local json api
    fetch('/calendar.json')
    .then(results => { return results.json() })
    .then(data => {

      this.setState({
        events: data,
        loading : false
      });

      console.log(this.state.loading);
      console.log(this.state.events);

    })
    .catch(error => {
      console.log(error);
    });

  }
  // https://github.com/Lemoncode/react-typescript-samples/tree/master/06%20AJAX%20Call
  // example typescript

  public render() {

    let content;

    if (this.state.loading) {
      content = <div>Loading...</div>;
    } else {
      content =
      <ul>
        {this.state.events.map(event => {
          return (
            <li>asfddasasd</li>
          );
        })}
      </ul>
    }

    return (
      <div>
        <Card className="shadow-sm">
          <CardBody>
            <CardTitle>Academic Calender</CardTitle>
            <CardSubtitle>Hello from {this.props.compiler} and {this.props.framework}!</CardSubtitle>
            <div>{content}</div>
          </CardBody>
        </Card>
      </div>
    );

  }

}

export default AcademicCalendar;
