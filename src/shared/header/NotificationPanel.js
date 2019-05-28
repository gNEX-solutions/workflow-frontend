import React from 'react';
import {
  Collapse,
  // Button,
  CardBody,
  CardHeader,
  Card
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './notificatinPannel.css';

const TodayDay = 'Today';
const NextWeek = 'Next Week';
const NextMonth = 'Next Month';

const TodayNotification = 0;
const NextWeekNotification = 0;
const NextMonthNotification = 0;

class NotificationPannel extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: true };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  state = {};
  render() {
    return (
      // <div>
      //   <Button
      //     color="primary"
      //     onClick={this.toggle}
      //     style={{ marginBottom: '1rem' }}
      //   >
      //     Notifications
      //   </Button>
      <Collapse isOpen={this.state.collapse} id="collapse_main">
        <Card>
          <CardHeader>
            {TodayDay} Events ({TodayNotification})
          </CardHeader>
          <CardBody>Event</CardBody>
        </Card>

        <Card>
          <CardHeader>
            {NextWeek} Events ({NextWeekNotification})
          </CardHeader>
          <CardBody>Event</CardBody>
        </Card>
        <Card>
          <CardHeader>
            {NextMonth} Events ({NextMonthNotification})
          </CardHeader>
          <CardBody>Event</CardBody>
        </Card>
        <Card>
          <CardHeader>
            {NextMonth} Events ({NextMonthNotification})
          </CardHeader>
          <CardBody>Event</CardBody>
        </Card>
      </Collapse>
      // </div>
    );
  }
}

export default NotificationPannel;
