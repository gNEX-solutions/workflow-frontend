import React, { Component } from "react";
import AvatarComponent from "./avatarComponent";
import 'bootstrap/dist/css/bootstrap.css';
import './approvalSection.css';

const ApprovedArray = [
  {
    name: "Ruwan Wickramarachchi",
    title: "HOD"
  },
  {
    name: "Ruwan Wickramarachchi",
    title: "HOD"
  },
  {
    name: "Ruwan Wickramarachchi",
    title: "HOD"
  }
];

const PendingArray = [
  {
    name: "Dilani Wickramarachchi",
    title: "Treasure"
  },
  {
    name: "Dilani Wickramarachchi",
    title: "Treasure"
  }
];

class ApprovalSectionComponent extends Component {
  state = {};

  renderAvetarComponentApprove = () => {
    const arr = [];
    ApprovedArray.forEach((item, index) => (
      arr.push(<AvatarComponent
        Name={item.name}
        Title={item.title} 
      />)
    ));

    return arr;
  }

  renderAvetarComponentPending = () => {
    const arr = [];
    PendingArray.forEach((item, index) => (
      arr.push(<AvatarComponent
        Name={item.name}
        Title={item.title} 
      />)
    ));

    return arr;
  }

  render() {
    const componentsApprove = this.renderAvetarComponentApprove();
    const componentsPending = this.renderAvetarComponentPending();

    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <p className="Label"> Approved by - </p>     
              <div class="ApprovalSection">
                {componentsApprove}
              </div>
            </div>
            <div class="col-sm">
              <p className="Label"> Pending Approval - </p>         
              <div class="ApprovalSection">
                {componentsPending}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ApprovalSectionComponent;