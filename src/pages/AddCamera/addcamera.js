import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const AddCamera = () => {
  const history = useHistory();
  const [cameraDetails, setCameraDetails] = useState({
    gate: "",
    id: "",
    camname: "",
    camip: "",
    camtype: "",
  });
  useEffect(() => {
    document.title = "Add Camera | KAUST";
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCameraDetails({ ...cameraDetails, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(cameraDetails);
  };
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <button
              id="back"
              className="btn btn-dark"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="card-box">
                  <h4 className="header-title text-center mt-0 mb-4">
                    Add Camera Details
                  </h4>
                  <div className="container">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="gate"
                          placeholder="Gate N0:"
                          name="gate"
                          value={cameraDetails.gate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="ip"
                          placeholder="Jetson IP:"
                          name="id"
                          value={cameraDetails.id}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="cam"
                          placeholder="Camera Name:"
                          name="camname"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="cam"
                          placeholder="Camere IP:"
                          name="camip"
                          value={cameraDetails.camip}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group" id="cam">
                        <label>Camera type:</label>
                        <label>
                          In{" "}
                          <input
                            type="radio"
                            value="In"
                            name="camtype"
                            onChange={handleChange}
                            checked={cameraDetails.camtype === "In"}
                          />
                        </label>
                        <label>
                          Out{" "}
                          <input
                            type="radio"
                            value="Out"
                            name="camtype"
                            onChange={handleChange}
                            checked={cameraDetails.camtype === "Out"}
                          />
                        </label>
                      </div>
                      <div className="form-group">
                        <Link to="/addcamera">Add Camera</Link>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </form>
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

export default AddCamera;
