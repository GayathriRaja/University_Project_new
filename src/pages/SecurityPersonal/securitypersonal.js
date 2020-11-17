import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const SecurityPersonal = () => {
  const history = useHistory();
  const [securityPersonal, setSecurityPersonal] = useState({
    name: "",
    uname: "",
    pswd: "",
    cpswd: "",
    selectgate: "",
  });
  useEffect(() => {
    document.title = "Add Security_Personnel | KAU";
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSecurityPersonal({ ...securityPersonal, [name]: value });
  };
  const handleSubmit = (event) => {
    console.log(securityPersonal);
    event.preventDefault();
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
                  <h1 className="header-title text-center mt-0 mb-4">
                    Add Security Personnel
                  </h1>
                  <div className="container">
                    <form
                      className="needs-validation"
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Name"
                          name="name"
                          value={securityPersonal.name}
                          required
                          onChange={handleChange}
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="uname"
                          placeholder="Enter Username"
                          name="uname"
                          required
                          value={securityPersonal.uname}
                          onChange={handleChange}
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <div className="form-group">
                        <select className="form-control" id="gate">
                          <option
                            value={securityPersonal.selectgate}
                            name="selectgate"
                            disabled
                            defaultValue
                            hidden
                            onChange={handleChange}
                          >
                            Select-Gate
                          </option>
                          <option value="gate-1">Gate-1</option>
                          <option value="gate-2">Gate-2</option>
                          <option value="gate-3">Gate-3</option>
                          <option value="gate-4">Gate-4</option>
                        </select>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                          placeholder="Enter Password"
                          name="pswd"
                          required
                          value={securityPersonal.pswd}
                          onChange={handleChange}
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          id="cpwd"
                          placeholder="Enter Confirm password"
                          name="cpswd"
                          required
                          value={securityPersonal.cpswd}
                          onChange={handleChange}
                        />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">
                          Please fill out this field.
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={handleSubmit}
                      >
                        Add
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

export default SecurityPersonal;
