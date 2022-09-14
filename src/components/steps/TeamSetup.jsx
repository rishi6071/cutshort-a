import React, { useState } from "react";
import toast from "react-hot-toast";

// media & icons
import { FaUser, FaUsers } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

const TeamSetup = ({ stepNext, handleData }) => {
  const [workspace, setWorkspace] = useState("");

  return (
    <div className="step__item">
      <h4 className="step__heading">How are you planning to use Eden?</h4>
      <p className="step__subtitle">We'll streamline your setup experience accordingly.</p>

      <form
        action="#"
        className="px-xl-5"
        onSubmit={(e) => {
          e.preventDefault();

          if (workspace === "") {
            toast.custom(
              <div
                className="py-2 px-4 rounded text-white small d-flex align-items-center gap-1"
                style={{ background: "#664DE6" }}
              >
                <RiErrorWarningLine size={20} />
                <span>Choose Workspace Size</span>
              </div>
            );
            return false;
          }
          handleData({ workspace_size: workspace });
          stepNext();
        }}
      >
        <div className="row">
          <div className="col-6">
            <div
              className={`form-group mb-3 box__input__control ${workspace === "individual" && "active"}`}
              onClick={() => setWorkspace("individual")}
            >
              <FaUser className="input__icon" />
              <p className="mt-3 box__input__label">For myself</p>
              <p className="box__input__value">Write better. Think more clearly. Stay organized.</p>
            </div>
          </div>
          <div className="col-6">
            <div
              className={`form-group mb-3 box__input__control ${workspace === "team" && "active"}`}
              onClick={() => setWorkspace("team")}
            >
              <FaUsers className="input__icon" style={{ transform: "scale(1.4) translateX(2px)" }} />
              <p className="mt-3 box__input__label">With my team</p>
              <p className="box__input__value">Wikis, docs, tasks &amp; projects, all in one place.</p>
            </div>
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

export default TeamSetup;
