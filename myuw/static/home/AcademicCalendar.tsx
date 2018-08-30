import * as React from 'react';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

interface Props {

}

interface State {
    loading: boolean;
    events: [];
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
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
    );

  }

}

export default AcademicCalendar;
