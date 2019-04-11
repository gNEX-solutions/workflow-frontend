import React from "react";
import { Collapse, Button, CardBody, CardHeader, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

let TodayDay = "Today";
let NextWeek = "Next Week";
let NextMonth = "Next Month";

let TodayNotification = 0;
let NextWeekNotification = 0;
let NextMonthNotification = 0;

class NotificationBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: "1rem" }}
        >
          Notifications
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardHeader>
              {TodayDay} Notifications ({TodayNotification})
            </CardHeader>
            <CardBody>Event</CardBody>
          </Card>
          <Card>
            <CardHeader>
              {NextWeek} Notifications ({NextWeekNotification})
            </CardHeader>
            <CardBody>Event</CardBody>
          </Card>
          <Card>
            <CardHeader>
              {NextMonth} Notifications ({NextMonthNotification})
            </CardHeader>
            <CardBody>Event</CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default NotificationBar;
