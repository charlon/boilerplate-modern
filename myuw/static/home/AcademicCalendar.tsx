import * as React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

export interface Props {
  compiler: string;
  framework: string;
}

interface State {

}

class AcademicCalendar extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {

  }

  public render() {

    return (
      <div>
        <Card className="shadow-sm">
          <CardBody>
            <CardTitle>Academic Calender</CardTitle>
            <CardText>Hello from {this.props.compiler} and {this.props.framework}!</CardText>
          </CardBody>
        </Card>
      </div>
    );

  }

}

export default AcademicCalendar;
