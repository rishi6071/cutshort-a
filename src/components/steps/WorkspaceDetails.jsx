import React, { useState } from "react";

const WorkspaceDetails = ({ stepNext, handleData }) => {
  // states
  const [data, setData] = useState({
    workspace_name: "",
    workspace_url: "",
  });

  // handle change input
  const HandleChangeInput = (e) => {
    setData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="step__item">
      <h4 className="step__heading">Let's set up a home for all your work</h4>
      <p className="step__subtitle">You can always create another workspace later.</p>

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
          <label htmlFor="workspace_name">Workspace Name</label>
          <input
            type="text"
            className="form-control"
            id="workspace_name"
            name="workspace_name"
            value={data.workspace_name}
            onChange={HandleChangeInput}
            placeholder="Eden"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="workspace_url" className="form-label">
            Workspace URL <span className="ms-1 text-muted fw-light">(optional)</span>
          </label>
          <div className="input-group">
            <span className="input-group-text" id="workspace-example-text">
              https://eden.com/
            </span>
            <input
              type="url"
              className="form-control"
              id="workspace_url"
              name="workspace_url"
              value={data.workspace_url}
              onChange={HandleChangeInput}
              aria-describedby="workspace-example-text"
              placeholder="Example"
            />
          </div>
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

export default WorkspaceDetails;
