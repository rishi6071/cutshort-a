import React, { useState } from "react";
import "../styles/Home.css";

// media & icons
import Logo from "../media/logo.png";

// steps components
import UserDetails from "../components/steps/UserDetails";
import WorkspaceDetails from "../components/steps/WorkspaceDetails";
import TeamSetup from "../components/steps/TeamSetup";
import Complete from "../components/steps/Complete";

const Home = () => {
  // current step active
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["User Details", "Workspace Details", "Team Setup", "Workspace Created"];
  const [onboardingData, setOnboardingData] = useState({});

  // handle step next
  const stepNext = () => {
    setCurrentStep((prevState) => {
      if (currentStep < steps.length + 1) return prevState + 1;
    });
  };

  // handle input data showcase
  const HandleData = (data) => {
    setOnboardingData((prevState) => {
      return { ...prevState, ...data };
    });
  };

  // display step component
  const displayStepContent = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <UserDetails stepNext={stepNext} handleData={HandleData} />;

      case 2:
        return <WorkspaceDetails stepNext={stepNext} handleData={HandleData} />;

      case 3:
        return <TeamSetup stepNext={stepNext} handleData={HandleData} />;

      case 4:
        return <Complete stepNext={stepNext} finalData={onboardingData} />;

      default:
        return "";
    }
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-6 col-md-8 offset-lg-3 offset-md-2 py-4">
          {/* Brand Logo */}
          <div className="container">
            <div className="brand__logo__box">
              <img src={Logo} alt="Eden__Logo" />
              <span>Eden</span>
            </div>
          </div>

          {/* Stepper Steps */}
          <div className="container mt-4">
            <div className="mx-4 p-4 px-5 d-flex justify-content-between align-items-center">
              {[...steps].map((step, idx) => {
                return (
                  <>
                    {/* Step Count */}
                    <div className="position-relative d-flex flex-column align-items-center">
                      <div
                        className={`d-flex justify-content-center align-items-center ${
                          idx + 1 <= currentStep ? "active__step" : "initial__step"
                        }`}
                      >
                        {idx + 1}
                      </div>
                    </div>

                    {/* Step Line */}
                    <div
                      style={{
                        display: `${idx + 1 === steps.length ? "none" : "initial"}`,
                        flex: "1 1 auto",
                        border: `0.5px solid ${idx + 1 <= currentStep ? "#664DE6" : "lightgrey"}`,
                        background: "#664DE6",
                        transition: "all 0.5s",
                      }}
                    ></div>
                    <div
                      style={{
                        display: `${idx + 1 === steps.length ? "none" : "initial"}`,
                        flex: "1 1 auto",
                        border: `0.5px solid ${idx + 1 < currentStep ? "#664DE6" : "lightgrey"}`,
                        background: "lightgrey",
                        transition: "all 0.5s",
                      }}
                    ></div>
                  </>
                );
              })}
            </div>
          </div>

          {/* Stepper Components */}
          <div className="container steps__box mt-3">{displayStepContent(currentStep)}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
