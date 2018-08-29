import * as React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

interface State {
    loading: boolean;
    events: [];
}

interface Props {

}

export default class AcademicCalendar extends React.Component<Props, State> {

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
