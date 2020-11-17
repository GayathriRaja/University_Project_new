import React, { useState, useEffect } from "react";
import { useHistory, useContext } from "react-router-dom";
import { addVehicleDetails } from "../../services";
import { useAlert } from "react-alert";

const AddVehicle = () => {
  // const [name, setname] = useState("");
  // const [vehicleNumber, setVehicleNumber] = useState("");
  // const [deparment, setDepartment] = useState("");
  const history = useHistory();
  const alert = useAlert();
  useEffect(() => {
    document.title = "Add Vehicle | KAU";
  }, []);

  const [vehicleDetails, setVehicleDetails] = useState({
    // name: "",
    number_plate: "",
    // department: "",
  });

  const handleChangeHandlerVehicle = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setVehicleDetails({ ...vehicleDetails, [name]: value });
  };

  const onClickHandlerSubmit = (e) => {
    addVehicleDetails(vehicleDetails)
      .then((res) => {
        alert.success("Number Plate Added Successfully!!!!");
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   console.log("name:" + name);
  //   console.log("vehicleNumber:" + vehicleNumber);
  //   console.log("deparment:" + deparment);
  // }, [name, vehicleNumber, deparment]);

  const onClickHandlerGoBack = () => {
    // history.push("/home");
    history.goBack();
  };

  return (
    <div className="content-page">
      <div className="content">
        {/* <!-- Start Content--> */}
        <div className="container-fluid">
          <button
            id="back"
            className="btn btn-dark"
            // onClick={history.back}
            style={{ marginBottom: "5vh" }}
            onClick={onClickHandlerGoBack}
          >
            Go Back
          </button>

          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="card-box">
                <h1 className="header-title text-center mt-0 mb-4">
                  Add Vehicle
                </h1>
                <div className="container">
                  <form onSubmit={(e) => e.preventDefault()}>
                    {/* <!--   <form> --> */}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter Name"
                        // name="name"
                        onChange={handleChangeHandlerVehicle}
                        // value={vehicleDetails.name}
                        // name="name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="vehicle"
                        placeholder="Enter Vehicle No."
                        // name="vehicle"
                        onChange={handleChangeHandlerVehicle}
                        value={vehicleDetails.number_plate}
                        name="number_plate"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="deparment"
                        placeholder="Enter Department"
                        // name="deparment"
                        onChange={handleChangeHandlerVehicle}

                        // value={vehicleDetails.department}
                        // name="department"
                      />
                    </div>
                    <button
                      //type="submit"
                      onClick={onClickHandlerSubmit}
                      id="btnSubmit"
                      className="btn btn-success"
                    >
                      Add
                    </button>
                  </form>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
