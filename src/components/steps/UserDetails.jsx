import React, { useState } from "react";

const UserDetails = ({ stepNext, handleData }) => {
  // states
  const [data, setData] = useState({
    full_name: "",
    display_name: "",
  });

  // handle change input
  const HandleChangeInput = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="step__item">
      <h4 className="step__heading">Welcome! First things first...</h4>
      <p className="step__subtitle">You can always change them later.</p>

      <form
        action="#"
        className="px-xl-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleData(data);
          stepNext();
        }}
      >
        <div className="form-group mb-3">
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="full_name"
            name="full_name"
            value={data.full_name}
            onChange={HandleChangeInput}
            placeholder="Steve Jobs"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="display_name">Display Name</label>
          <input
            type="text"
            className="form-control"
            id="display_name"
            name="display_name"
            value={data.display_name}
            onChange={HandleChangeInput}
            placeholder="Steve"
            required
          />
        </div>
        <div className="form-group mb-3">
          <button type="submit" className="btn custom__btn w-100">
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
