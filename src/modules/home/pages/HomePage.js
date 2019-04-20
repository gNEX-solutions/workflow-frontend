import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CalenderSection from '../../calender/calender';
import EventExplorer from '../../eventExplorer/eventExplorer';
import History from '../../history/history';
import HeaderComponent from '../../../shared/header/headerComponent';
import MainMenuCompoannent from '../../../shared/mainMenu/mainMenu';
import './HomePage.styles.css';

import { getEvent } from '../../../store/actions/DashBoardActions';

export const input = {
  month: '05',
  year: '2019'
};

export const VIEW_TYPES = {
  calendar: 1001,
  explorer: 1002,
  history: 1003
};

class HomePage extends React.Component {
  static defaultProps;

  constructor(props) {
    super(props);

    this.state = {
      currentViewType: VIEW_TYPES.calendar
    };
  }

  componentDidMount() {
    const { getEvent } = this.props;
    getEvent(input);
    console.log('test');
  }

  handleEventCalendarPress = () => {
    this.setState({ currentViewType: VIEW_TYPES.calendar });
  };

  handleEventExplorerPress = () => {
    this.setState({ currentViewType: VIEW_TYPES.explorer });
  };

  handleHistoryPress = () => {
    this.setState({ currentViewType: VIEW_TYPES.history });
  };

  renderCalendarView = () => <CalenderSection />;

  renderExplorerView = () => <EventExplorer />;

  renderHistoryView = () => <History />;

  renderContent = () => {
    const viewMap = {
      [VIEW_TYPES.calendar]: this.renderCalendarView,
      [VIEW_TYPES.explorer]: this.renderExplorerView,
      [VIEW_TYPES.history]: this.renderHistoryView
    };
    const view = viewMap[this.state.currentViewType]();

    return (
      <div className="bodyBackground">
        <HeaderComponent onProfClick={this.handleProfClick} />
        <div>
          <div className="menuOuter">
            <MainMenuCompoannent
              onEventCalendarPress={this.handleEventCalendarPress}
              onEventExplorerPress={this.handleEventExplorerPress}
              onEventHistoryPress={this.handleHistoryPress}
            />
            <hr size="80" />
          </div>
          {view}
        </div>
      </div>
    );
  };

  render() {
    const content = this.renderContent();

    return content;
  }
}

HomePage.propTypes = {
  // events: PropTypes.object.isRequired
};

HomePage.defaultProps = {};

const mapStateToProps = (state, ownProps) => ({
  // TODO: Map additional props here
  events: state.events
});

export default connect(
  mapStateToProps,
  { getEvent }
)(HomePage);
