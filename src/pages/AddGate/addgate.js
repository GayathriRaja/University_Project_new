import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addGateDetails } from "../../services";
import { useAlert } from "react-alert";
import GateForm from "./GateForm";

function AddGate() {
  // const { register, handleSubmit, errors } = useForm();
  const [addFormFields, setAddFormFields] = useState([1]);

  const [gateDetails, setGateDetails] = useState({
    gate_num: 0,
    camera_info: [
      {
        camera_name: "",
        camera_ip: "",
        direction: "",
      },
      // {
      //   camera_name: "",
      //   camera_ip: "",
      //   direction: "",
      // },
      // {
      //   camera_name: "",
      //   camera_ip: "",
      //   direction: "",
      // },
    ],
  });
  const history = useHistory();
  const alert = useAlert();
  useEffect(() => {
    document.title = "Add Gate | KAU";
    setAddFormFields([1]);
  }, []);
  const handleChangeCamera = (event) => {
    console.log(event.target.value);
    const { id, name, value } = event.target;
    if (name === "gate_num") {
      setGateDetails({ ...gateDetails, [name]: parseInt(value) });
    } else {
      setGateDetails({
        gate_num: gateDetails.gate_num,
        camera_info: gateDetails.camera_info.map((data, index) => {
          if (index === parseInt(id[0])) {
            return {
              ...data,
              [name]: value,
            };
          }
          return data;
        }),
      });
    }
  };
  const onClickHandlerSave = (event) => {
    // event.preventDefault();
    // console.log(gateDetails);
    console.log("Number:" + addFormFields);

    addFormFields.map((data) => {
      console.log(data);
    });
    gateDetails.camera_info.map((data, index) => {
      if (data.camera_name !== "") {
        console.log(data.camera_name);
      }
    });
    addGateDetails(gateDetails)
      .then((res) => {
        alert.success("Gate Added Successfully!!!!");
      })
      .catch((error) => {
        // alert.error("Gate not Added");
        console.log(error);
      });
  };
  const onClickHandlerGoBack = () => {
    history.goBack();
  };

  const onClickAddFormGate = () => {
    var temp = gateDetails.camera_info;
    temp.concat({
      camera_name: "",
      camera_ip: "",
      direction: "",
    });

    // setGateDetails(temp);
    setAddFormFields(addFormFields.concat(1));
  };

  // useEffect(() => {
  //   console.log("Value:" + value);
  // }, [gateDetails]);
  // useEffect(() => {
  //   alert.show("addFormFields:" + addFormFields);
  // }, [addFormFields]);

  const FormGate = () => {
    return (
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="camera-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="0_camera_name"
            placeholder="Camera Name"
            onChange={handleChangeCamera}
            value={gateDetails.camera_info[0].camera_name}
            name="camera_name"
            // ref={

            // }
            // ref={value ? required : null}
            // {value ? required : null}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="ipaddress">IP Address</label>
          <input
            type="text"
            className="form-control"
            id="0_camera_ip"
            placeholder="IP Address"
            onChange={handleChangeCamera}
            value={gateDetails.camera_info[0].camera_ip}
            name="camera_ip"
            // ref={camerDetails1({ required: true })}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="direction">Direction</label>
          <select
            className="form-control"
            id="0_direction"
            onChange={handleChangeCamera}
            value={gateDetails.camera_info[0].direction}
            name="direction"
            // ref={camerDetails1({ required: true })}
          >
            <option value="">Select Direction</option>
            <option value="in">IN</option>
            <option value="out">OUT</option>
            <option value="entry">ENTRY</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="content-page">
      <div className="col-xl-12 col-md-12">
        <button
          id="back"
          className="btn btn-dark"
          onClick={onClickHandlerGoBack}
          style={{ marginBottom: "3vh" }}
        >
          Go Back
        </button>
        <div className="card-box">
          <div className="container">
            <h3 className="text-center mt-0 mb-4">Add Gate Details</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="inputAddress">Gate No.</label>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  id="gate_num"
                  placeholder="Gate No: ...."
                  onChange={handleChangeCamera}
                  value={gateDetails.gate_num}
                  name="gate_num"
                  required
                />
              </div>
              <h4 className="pb-2 pt-1">Camera Details</h4>
              {/* {
                for (let i = 0; i < addFormFields; i++) {
                  console
                  
                }
              } */}
              {addFormFields.map((data) => {
                console.log(data);
                return <FormGate />;
              })}
              <button onClick={onClickAddFormGate}>+</button>
              <div className="text-center mt-3">
                <button
                  id="btnSave"
                  className="btn btn-success"
                  type="submit"
                  onClick={onClickHandlerSave}
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGate;
