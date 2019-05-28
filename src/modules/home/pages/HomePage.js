import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import * as moment from 'moment';
import CalenderSection from '../../calender/calender';
import EventExplorer from '../../eventExplorer/eventExplorer';
import History from '../../history/history';
import HeaderComponent from '../../../shared/header/headerComponent';
import MainMenuCompoannent from '../../../shared/mainMenu/mainMenu';
import SearchResults from '../../searchResults/searchResults';
import './HomePage.styles.css';

import { getMonthlyEvents } from '../../../store/actions/DashBoardActions';

// export const input = {
//   month: moment().format("MM"),
//   year: moment().year()
// };

export const VIEW_TYPES = {
  calendar: 1001,
  explorer: 1002,
  history: 1003,
  searchResults: 1004
};

class HomePage extends React.Component {
  static defaultProps;

  constructor(props) {
    super(props);

    this.state = {
      currentViewType: VIEW_TYPES.calendar
    };
  }
  input = {
    month: moment().format("MM"),
    year: moment().year()
  };

  componentDidMount() {
    const { getMonthlyEvents } = this.props;
    // console.log(input);
    // getEvent(input);
    getMonthlyEvents(this.input);
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

  handleSearchPress = () => {
    this.setState({ currentViewType: VIEW_TYPES.searchResults });
  }

  renderCalendarView = () => <CalenderSection />;

  renderExplorerView = () => <EventExplorer onEventCalendarPress={this.handleEventCalendarPress} />;

  renderHistoryView = () => (
    <History onEventCalendarPress={this.handleEventCalendarPress} />
  );
  renderSearchResultsView = () => <SearchResults onEventCalendarPress={this.handleEventCalendarPress} />;

  renderContent = () => {
    const viewMap = {
      [VIEW_TYPES.calendar]: this.renderCalendarView,
      [VIEW_TYPES.explorer]: this.renderExplorerView,
      [VIEW_TYPES.history]: this.renderHistoryView,
      [VIEW_TYPES.searchResults]: this.renderSearchResultsView
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
              onSearchPress={this.handleSearchPress}
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
  { getMonthlyEvents }
)(HomePage);
