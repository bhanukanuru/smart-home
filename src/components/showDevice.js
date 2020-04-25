import React from "react";
import { connect } from "react-redux";
import { startDeviceAction } from "../actions/showDevice";
// import {startRemoveAction} from '../actions/showDevice'
// import axios from '../config/axios'
//import {findDevice} from '../selectors/showDevice'

class ShowDevice extends React.Component {
  componentDidMount() {
    this.props.dispatch(startDeviceAction(this.props.match.params.id));
  }

  render() {
    // console.log(this.props.match.)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div ClassName="card-header">
                <h5>
                  Device Name:
                  {this.props.viewDevice.response &&
                    " " + this.props.viewDevice.response.device_name}
                </h5>
              </div>
              <div className="card-body">
                {/* <p>
                  {this.props.viewDevice.response &&
                    this.props.viewDevice.response.device_type}
                </p> */}
                <p>
                  {" "}
                  Power :
                  {this.props.viewDevice.response &&
                    this.props.viewDevice.response.device_power}
                </p>
                <p>
                  {" "}
                  Device Value :
                  {this.props.viewDevice.response &&
                    this.props.viewDevice.response.device_value}
                </p>
                <p>
                  Status :
                  {this.props.viewDevice.response &&
                  this.props.viewDevice.response.device_state === true
                    ? "Running"
                    : "Switched off"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    viewDevice: state.viewDevice,
  };
};

export default connect(mapStateToProps)(ShowDevice);
