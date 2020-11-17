import { BASE_URL } from "../utils";
import axios from "axios";
//Add Gate Details
export const addGateDetails = async (gateDetails) => {
  var response = await axios.post(
    BASE_URL + "api/gate",
    {
      gate_num: gateDetails.gate_num,
      ...gateDetails,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const addVehicleDetails = async (vehicleDetails) => {
  var data = JSON.stringify(vehicleDetails);
  var config = {
    method: "post",
    url: BASE_URL + "api/vehicle",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  var response = await axios(config);
  return response.data;
};
export const addVehicleDetected = async (cam) => {
  var data = JSON.stringify(cam);
  var config = {
    method: "post",
    url: BASE_URL + "api/vehicledetected",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  var response = await axios(config);
  return response.data;
};

export const getVehicleStatus = async (caminfo) => {
  var data = JSON.stringify(caminfo);
  var config = {
    method: "post",
    url: BASE_URL + "api/vehiclestatus",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  var response = await axios(config);
  return response.data;
};
