import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '30%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

const TodayDay = 'Today';
const NextWeek = 'Next Week';
const YesterdayDay = 'Yesterday';
const lastweek = 'Last Week';

const TodayNotifications = 0;
const NextWeekNotifications = 0;
const YesterdayNotifications = 0;
const LastweekNotifications = 0;

class NotificationPanelComponent extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <ExpansionPanel
            expanded={expanded === 'panel1'}
            onChange={this.handleChange('panel1')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{TodayDay}</Typography>
              <Typography className={classes.secondaryHeading}>
                you have {TodayNotifications} event(s).
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Event</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel2'}
            onChange={this.handleChange('panel2')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {YesterdayDay}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                you had {YesterdayNotifications} event(s).
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Event</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel3'}
            onChange={this.handleChange('panel3')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{NextWeek}</Typography>
              <Typography className={classes.secondaryHeading}>
                you have {NextWeekNotifications} event(s).
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Event</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel4'}
            onChange={this.handleChange('panel4')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{lastweek}</Typography>
              <Typography className={classes.secondaryHeading}>
                you had {LastweekNotifications} event(s).
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>Event</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </React.Fragment>
    );
  }
}

NotificationPanelComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NotificationPanelComponent);
