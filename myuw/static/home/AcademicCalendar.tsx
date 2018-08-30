import * as React from 'react';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

interface IProps {

}

interface IState {
    loading: boolean;
    events: [];
}

class AcademicCalendar extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);
  }

  public componentDidMount() {

  }

  public render() {

    return (
      <div>
        <Card>
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
