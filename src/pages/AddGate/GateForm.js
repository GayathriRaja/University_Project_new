//
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
