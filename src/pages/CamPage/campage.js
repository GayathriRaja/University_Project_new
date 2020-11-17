import React, { component, useState, useEffect } from "react";
import VideoPlayer from "../../components/VideoJs/videojs";
import Uber from "../../images/Uber.png";
import Careem from "../../images/Careem.png";
import HungerStation from "../../images/HungerStation.png";
import maintenanceoverview1 from "../../images/maintenance-overview-1.jpg";
import visitoricon from "../../images/visitor icon.png";
import { getVehicleStatus, addVehicleDetected } from "../../services";
import { Link, useLocation } from "react-router-dom";

const VIDEO_LINKS = {
  "example-1": {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8080/stream/sub_stream_192/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  },
  "example-2": {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8080/stream/sub_stream_190/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  },
  "example-3": {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8080/stream/sub_stream_191/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  },
};

const Campage = ({ location }) => {
  const locationIP = useLocation();

  const currentVideo = VIDEO_LINKS[location.pathname.split("/")[2]];
  const [state, setState] = useState({
    name: "",
    phone: "",
  });

  const [vehicleList, setVehicleList] = useState([]);
  console.log({ vehicleList });
  const [open, setOpen] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [prev, setPrev] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  useEffect(() => {
    console.log("ipAdress:" + locationIP.state.ipAddress);
    document.title = "Dashboard-Home | KAU";
    const interval = setInterval(() => {
      getVehicleStatus({
        camera_info: {
          camera_ip: locationIP.state.ipAddress,
          // vehicleInfo != null
          //   ? vehicleInfo.camera_info.camera_ip
          //   : "192.168.5.192",
        },
      })
        .then((data) => {
          console.log(data, { vehicleList });
          setVehicleInfo(data);
          const lastVehicle = vehicleList[0] || {};
          if (
            JSON.stringify(prev) !== JSON.stringify(data.number_plate) &&
            lastVehicle.ActionTime !== data.ActionTime
          ) {
            setPrev(data.number_plate);

            let list = vehicleList;
            list.reverse();
            list.push(data);
            list.reverse();
            setVehicleList(vehicleList);
          }
        })
        .catch((error) => console.log(error));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="col-xl-12 text-center">
              <div className="card-box bg-dark">
                <h4 className="header-title mt-0 mb-0 text-white">Live View</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-md-8">
                <div className="card-box">
                  <h4 className="header-title mt-0 mb-0">
                    Gate Name/No: Camera Name
                  </h4>
                  <div className="text-center mt-0 mb-0">
                    <div id="example-1">
                      <VideoPlayer width={650} {...currentVideo} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4">
                <div className="card-box">
                  <h2 className="header-title mt-0 mb-5 text-success">
                    {vehicleInfo && vehicleInfo.is_authorised
                      ? "Authorised"
                      : "Non Authorised"}
                  </h2>
                  <div className="text-center mt-5">
                    <h4>
                      {vehicleInfo ? vehicleInfo.number_plate : "No Data"}
                    </h4>
                    <h5>Abdullah Althaf</h5>
                    <h6 className="pb-5">Professor, Computer Science</h6>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Add Entry
                    </button>
                    <div className="modal fade" id="myModal">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header bg-primary">
                            <h4 className="modal-title">Select Below</h4>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                            >
                              &times;
                            </button>
                          </div>

                          <div className="modal-body bg-dark">
                            <form onSubmit={handleSubmit}>
                              <div className="row">
                                <div className="col-lg-4">
                                  <input
                                    type="image"
                                    src={Uber}
                                    alt="Uber"
                                    width="98"
                                    height="78"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <input
                                    type="image"
                                    src={Careem}
                                    alt="Careem"
                                    width="98"
                                    height="78"
                                  />
                                </div>
                                <div className="col-lg-4">
                                  <input
                                    type="image"
                                    src={HungerStation}
                                    alt="HungerStation"
                                    width="98"
                                    height="78"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <input
                                    type="image"
                                    src={maintenanceoverview1}
                                    alt="Maintenance"
                                    width="98"
                                    height="78"
                                  />
                                </div>
                                <div className="col-lg-6">
                                  <button
                                    type="button"
                                    className="btn"
                                    id="formButton"
                                    onClick={() => {
                                      setOpen(!open);
                                    }}
                                  >
                                    <img
                                      src={visitoricon}
                                      className="img-fluid"
                                      width="98"
                                      height="78"
                                      alt="visitor icon"
                                    />
                                  </button>
                                </div>
                              </div>
                              {open && (
                                <div id="form1" className="mt-3">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Name"
                                      id="name"
                                      autocomplete="off"
                                      name="name"
                                      value={state.name}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="form-group">
                                    <input
                                      type="phone"
                                      className="form-control"
                                      placeholder="Vehicle No."
                                      id="phone"
                                      autocomplete="off"
                                      name="phone"
                                      value={state.phone}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <button
                                    type="button"
                                    className="close text-white"
                                    id="close"
                                  >
                                    &times;
                                  </button>
                                </div>
                              )}

                              <button
                                type="submit"
                                className="btn btn-success"
                                id="submit"
                                onClick={handleSubmit}
                              >
                                Submit
                              </button>
                            </form>
                          </div>

                          <div className="modal-footer bg-primary">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4">
                <div className="card-box">
                  <h3 className="header-title mt-0 mb-4">
                    Detected Image of Number Plate
                  </h3>
                  <div className="text-center mt-5 mb-5" id="cam-img">
                    <span>
                      <i className="fas fa-image"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-md-8">
                <div className="card-box">
                  <h3 className="header-title mt-0 mb-4">Vehicle Details</h3>
                  <div className="text-center mt-1 mb-1">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Vehicle No.</th>
                          <th>Time</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vehicleList.map((data) => {
                          return (
                            <tr>
                              <td>{data.number_plate}</td>
                              <td>{`${new Date(
                                data.ActionTime
                              ).toLocaleTimeString()}`}</td>
                              <td>
                                {data.is_authorised
                                  ? "Authorised"
                                  : "Non Authorised"}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Campage;

// const [vehicleDetails, setVehicleDetails] = useState({
//   number_plate: "",
//   camera_info: {
//     camera_name: "Gate-Entry1",
//     camera_ip: "192.168.5.192",
//     direction: "entry",
//   },
// });
