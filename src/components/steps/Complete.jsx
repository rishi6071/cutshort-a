import React from "react";

// media & icons
import { BiCheck } from "react-icons/bi";

const Complete = ({ stepNext, finalData }) => {
  return (
    <div className="step__item">
      <div className="d-flex justify-content-center">
        <div className="complete__process__icon mb-4">
          <BiCheck className="process__icon" />
        </div>
      </div>
      <h4 className="step__heading">Congratulations, {finalData?.display_name}!</h4>
      <p className="step__subtitle">You have completed onboarding, you can start using Eden!</p>

      <div className="my-4">
        <button
          type="button"
          className="btn custom__btn d-block mx-auto w-75"
          data-bs-toggle="modal"
          data-bs-target="#edenOnboardingModal"
        >
          Launch Eden
        </button>
      </div>

      {/* Modal to Showcase Info */}
      <div
        className="modal fade"
        id="edenOnboardingModal"
        tabIndex="-1"
        aria-labelledby="edenOnboardingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bolder" id="edenOnboardingModalLabel">
                Eden Onboarding
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="px-lg-5 pt-3 px-4">
                <pre>
                  <code>{JSON.stringify(finalData, null, 4)}</code>
                </pre>
              </div>
            </div>
            <div className="modal-footer pt-0">
              <button type="button" className="btn custom__btn px-4 py-2" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
