import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Comment from './Comment';
import './Comments.css';

/**
 * Display the comment list
 * @class Comments
 * @extends {React.Component}
 */
class Comments extends Component {
  /**
   * Creates an instance of Comments
   * @param {*} props properies passed by the parent element
   * @memberof Comments
   */
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      inputText: ''
    };
    this.getAllComments = this.getAllComments.bind(this);
  }

  /**
   * Gets all the comments for a particular event, when component mounts
   * @memberof Comments
   */
  componentDidMount() {
    const { event } = this.props;
    const comments = this.getAllComments(event.id);
    if (comments) {
      this.setState({
        comments
      });
    } else {
      console.log('Something went wrong while retrieving the comments');
    }
  }
  /**
  * set the entered value in tet area to the inputText in state
  * @memberof Comments
  * @param onChange event
  */
  onMessageTyped = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }


  onSendMessageClicked = () => {
    const { comments, inputText } = this.state;
    const newComment = {

      commentId: 'c005',
      commentText: inputText,
      createdBy: 'Akalanka Jayalath',
      date: Date.now()

    };
    this.setState({
      comments: [...comments, newComment]
    });
  }

  /**
   * Receive all the comments for the active event
   * @param {eventId} props Id of the active event
   * @memberof Comments
   */
  getAllComments(eventId) {
    const comments = [
      {
        commentId: 'c001',
        commentText: 'Can you please change the venue?',
        createdBy: 'Dilani Wickramarachchi',
        date: new Date('2019-2-12')
      },
      {
        commentId: 'c002',
        commentText: 'Can you please change the date?',
        createdBy: 'Ruwan Wickramarachchi',
        date: new Date('2019-2-15')
      },
      {
        commentId: 'c003',
        commentText: 'Can you please change the time?',
        createdBy: 'Chathura Rajapakse',
        date: new Date('2019-2-18')
      }
    ];
    return comments;
  }

  /**
   * Render method of the component
   * @returns {React.Component} Comment html component
   * @memberof Comments
   */
  render() {
    const { event } = this.props;
    const { comments } = this.state;
    return (
      <React.Fragment>
        <div className="commentSection">
          <div className="heading-block">
            <h4>Conversation</h4>
          </div>
          <div className="container comments-display">
            <Comment comments={comments} event={event} />
          </div>
          <div className="row comment-area-block">
            <div className="col-sm-10 form-group basic-textarea rounded-corners comment-text-block">
              <textarea
                className="form-control z-depth-1"
                id="comment-text-area"
                rows="1"
                placeholder="Write your comment..."
                onChange={this.onMessageTyped}
              />
            </div>
            <button type="button" className="col-sm-2 btn btn-light sendbtn" onClick={this.onSendMessageClicked}>
              Send
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Comments.defaultProps = {
  event: { id: 'e001', title: 'IM_Cricket_match' }
};

Comments.propTypes = {
  event: PropTypes.instanceOf(Object)
};

export default Comments;
