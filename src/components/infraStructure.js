import React from "react";
import { connect } from "react-redux";
import { startGetInfraAction } from "../actions/infra";
//import Devices from './devices'
import { Link } from "react-router-dom";

function Infrastructure(props) {
  if (!props.infra.message) {
    props.dispatch(startGetInfraAction());
  }
  // const handleClick=(id)=>{
  //     props.history.push(`infrastructures/${id}/devices`)

  // }
  const a1 = props.infra.message && props.infra["response"];
  return (
    <div className="container">
      <center>
        {" "}
        <h4>Infrastructure</h4>
      </center>
      <div className="row">
        <div className="col">
          {props.infra.message &&
            a1.map((inf) => {
              return (
                <ul className="list-group">
                  <li className="list-group-item">
                    Type-{inf.infrastructure_type}
                  </li>
                  {/* <li  className="list-group-item">{inf.infrastructure_file_size}</li> */}
                  <li className="list-group-item">
                    Name-{inf.infrastructure_name}
                  </li>
                  {/* <li  className="list-group-item">{inf.infrastructure_id}</li> */}
                  <Link
                    to={`/infrastructures/${inf.infrastructure_id}/devices`}
                  >
                    View your Devices
                  </Link>
                </ul>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    infra: state.infra,
  };
};

export default connect(mapStateToProps)(Infrastructure);
