import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import './Comment.css';

/**
 * Display a particular comment
 * @class Comment
 * @extends {React.Component}
 */
class Comment extends React.Component {
  /**
   * Creates an instance of Comment
   * @param {*} props properties passed by the parent element
   * @memberof Comment
   */
  constructor(props) {
    super(props);
    this.keyCount = 0;
    this.getKey = this.getKey.bind(this);
  }

  /**
   * Genereates unique keys for comments
   * @memberof Comment
   */
  getKey() {
    return this.keyCount++;
  }

  /**
   * Render method of the component
   * @returns {React.Component} Comment html component
   * @memberof Comment
   */
  render() {
    const { comments } = this.props;
    return comments
      .slice(0)
      // .reverse()  dinith : latest comments comes first fix 
      .map(comment => (
        <Row>
          <div key={this.getKey()} className="contentWrapper">
            <div className="createdBy-profile-circle">
              {comment.createdBy.split(' ')[0].charAt(0) +
                comment.createdBy.split(' ')[1].charAt(0)}
            </div>
            <div className="comment-text">
              <div className="delete">
                <a href="https://www.google.com" className="deleteText">
                  X
                </a>
              </div>
              <p className="createdBy-profile-name"> <strong>{comment.createdBy}</strong> &nbsp; &nbsp;
                {comment.commentText} </p>
            </div>
          </div>
        </Row>
      ));
  }
}

Comment.defaultProps = {
  event: null
};

Comment.propTypes = {
  comments: PropTypes.instanceOf(Array).isRequired
};

export default Comment;
