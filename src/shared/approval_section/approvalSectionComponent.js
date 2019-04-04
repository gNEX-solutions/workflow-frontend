import React, { Component } from 'react';
import AvatarComponent from './avatarComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './approvalSection.css';

const ApprovedArray = [
  {
    name: 'Dr. Ruwan Wickramarachchi',
    title: 'HOD'
  },
  {
    name: 'Dr. Ruwan Wickramarachchi',
    title: 'HOD'
  },
  {
    name: 'Dr. Ruwan Wickramarachchi',
    title: 'HOD'
  }
];

const PendingArray = [
  {
    name: 'Dr. Dilani Wickramarachchi',
    title: 'Treasure'
  },
  {
    name: 'Dr. Dilani Wickramarachchi',
    title: 'Treasure'
  }
];

class ApprovalSectionComponent extends Component {
  state = {};

  renderAvetarComponentApprove = () => {
    const arr = [];
    ApprovedArray.forEach((item, index) =>
      arr.push(<AvatarComponent Name={item.name} Title={item.title} />)
    );

    return arr;
  };

  renderAvetarComponentPending = () => {
    const arr = [];
    PendingArray.forEach((item, index) =>
      arr.push(<AvatarComponent Name={item.name} Title={item.title} />)
    );

    return arr;
  };

  render() {
    const componentsApprove = this.renderAvetarComponentApprove();
    const componentsPending = this.renderAvetarComponentPending();

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <p className="Label"> Approved by - </p>
              <div className="ApprovalSection">{componentsApprove}</div>
            </div>
            <div className="col-sm">
              <p className="Label"> Pending Approval - </p>
              <div className="ApprovalSection">{componentsPending}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ApprovalSectionComponent;
