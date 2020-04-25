import React from "react";
import { connect } from "react-redux";
import { startGetDevices } from "../actions/devices";
import CanvasJSReact from "../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Devices extends React.Component {
  constructor() {
    super();
    this.addSymbols = this.addSymbols.bind(this);
  }
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

    if (order > suffixes.length - 1) order = suffixes.length - 1;

    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  handleClick = (id) => {
    this.props.history.push(`/device/${id}`);
  };
  render() {
    const id = this.props.match.params.id;
    if (!this.props.devices.message) {
      this.props.dispatch(startGetDevices(id));
    }
    const a1 =
      this.props.devices.message &&
      this.props.devices.response.device_groups[0].device_sensors;
    const name =
      this.props.devices.message &&
      this.props.devices.response.device_groups[0].device_room;
    // console.log(props.devices.message && a1)\
    let high = [],
      low = [],
      totalPower = 0;
    if (this.props.devices.message) {
      for (let i = 0; i < a1.length; i++) {
        if (a1[i].device_state == true) {
          high.push(a1[i]);
          totalPower = totalPower + a1[i].device_power;
        } else {
          low.push(a1[i]);
        }
      }
    }
    console.log(high, low);
    const length1 = this.props.devices.message && high.length;
    const length2 = this.props.devices.message && low.length;

    const options1 = {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: `Number of Active & Inactive  Devices`,
      },
      dataPointWidth: 90,
      axisY: {
        title: "Devices",
        labelFormatter: this.addSymbols,
        scaleBreaks: {
          autoCalculate: true,
        },
      },
      axisX: {
        title: "Categerios",
        labelAngle: 0,
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Active", y: high.length, color: "limegreen" },
            { label: "In Active", y: low.length, color: "red" },
          ],
        },
      ],
    };

    return (
      <div className="container">
        <center>
          <h2>
            Devices in your {this.props.devices.message && name}{" "}
            {this.props.devices.message && a1.length}
          </h2>
        </center>

        <center>
          <h5>
            Power -{totalPower}
            {" ,"} Total Active Devices -{this.props.devices.message && length1}
            {" , "} Total InActive Devices-
            {this.props.devices.message && length2}
          </h5>
        </center>

        <div className="row">
          {this.props.devices.message &&
            a1.map((device) => {
              return (
                <div className="col col-sm-12 col-md-6">
                  <div
                    className={
                      device.device_state === true
                        ? "card text-white bg-success mb-3"
                        : "card text-white bg-warning mb-3"
                    }
                    style={{ width: "30rem" }}
                  >
                    {device.device_type == "FAN" && (
                      <img
                        className="card-img-top img-fluid"
                        src="https://media.gettyimages.com/photos/low-angle-view-of-ceiling-fan-picture-id763280243?s=2048x2048"
                        alt="card image cap"
                      />
                    )}
                    {device.device_type == "SWITCH" && (
                      <img
                        className="card-img-top img-fluid"
                        src="https://media.gettyimages.com/photos/british-electrical-plug-socket-and-plug-on-a-wall-picture-id184303060?s=2048x2048"
                        alt="card image cap"
                      />
                    )}
                    {device.device_type == "LIGHT" && (
                      <img
                        className="card-img-top img-fluid"
                        src="https://media.gettyimages.com/photos/illuminated-lamp-picture-id565821951?s=2048x2048"
                        alt="card image cap"
                      />
                    )}
                    {device.device_type == "AC" && (
                      <img
                        className="card-img-top img-fluid"
                        src="https://media.gettyimages.com/photos/hand-with-remote-control-air-conditioner-picture-id485158433?s=2048x2048"
                        alt="card image cap"
                      />
                    )}
                    <div className="card-body" key={device.device_id}>
                      <li className="list-group">
                        Devivce Name:{device.device_name}
                      </li>
                      <li className="list-group">
                        Device type:{device.device_type}
                      </li>
                      <li className="list-group">
                        Device Rating:{device.device_power}
                      </li>
                      <li className="list-group">
                        Device Value:{device.device_value}
                      </li>
                      <li className="list-group">
                        Status:
                        {device.device_state === true
                          ? "Running"
                          : "Turned Off"}
                      </li>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.handleClick(device.device_id);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.props.devices.message && (
              <CanvasJSChart
                options={options1}
                onRef={(ref) => (this.chart = ref)}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
// console.log(props.match.params.id)

const mapStateToProps = (state) => {
  return {
    devices: state.devices,
  };
};

export default connect(mapStateToProps)(Devices);
