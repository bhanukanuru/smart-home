import axios from "../config/axios";

export const getDevices = (data) => {
  return { type: "GET_DEVICES", payload: data };
};

export const startGetDevices = (id) => {
  return (dispatch) => {
    setInterval(
      axios.get(`/infrastructures/${id}/devices`).then((response) => {
        console.log(response.data);
        const data = response.data;
        dispatch(getDevices(data));
      }),
      30000
    );
  };
};
