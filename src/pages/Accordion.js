import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Accordion.css";
const Accordion = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onAddIconClick = useCallback(() => {
    navigate("/accordion-open");
  }, [navigate]);

  const onLightbuttonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLightbuttonContainer2Click = useCallback(() => {
    navigate("/accordion-open");
  }, [navigate]);

  return (
    <div className="accordion">
      <div className="customer-details-collapsed" data-animate-on-scroll>
        <div className="page-header1">
          <div className="container3">
            <div className="view-customer-details1">View Customer Details</div>
            <button className="cross-icon1">
              <img className="union-icon2" alt="" />
              <img className="union-icon3" alt="" src="/union.svg" />
            </button>
          </div>
        </div>
        <div className="main-section1">
          <div className="details-stepper-card1">
            <div className="customer-info-card1">
              <div className="lightavatar-container">
                <img
                  className="lightavatar-icon2"
                  alt=""
                  src="/lightavatar.svg"
                />
                <div className="john-micheal-group">
                  <b className="john-micheal2">John Micheal</b>
                  <div className="c2006153961">C200615396</div>
                </div>
              </div>
              <div className="customer-info-card-item" />
              <div className="frame-parent9">
                <div className="customer-type-group">
                  <div className="customer-type5">Customer Type:</div>
                  <div className="corporate1">Corporate</div>
                </div>
                <div className="customer-type-group">
                  <div className="customer-type5">Mobile No.:</div>
                  <div className="corporate1">9893473843</div>
                </div>
              </div>
            </div>
            <div className="stepper1">
              <div className="step-011">
                <div className="frame-parent10">
                  <div className="group-parent4">
                    <img
                      className="frame-child8"
                      alt=""
                      src="/group-95541.svg"
                    />
                    <div className="frame-child9" />
                  </div>
                  <div className="customer-details-group">
                    <div className="customer-type5">Customer Details</div>
                    <div className="frame-parent11">
                      <div className="john-micheal-group">
                        <div className="progress-bar5">
                          <div className="progress5">
                            <div className="start5" />
                            <div className="start5" />
                          </div>
                        </div>
                      </div>
                      <b className="b5">100%</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-011">
                <div className="frame-parent10">
                  <div className="group-parent4">
                    <img
                      className="frame-child8"
                      alt=""
                      src="/group-95541.svg"
                    />
                    <div className="frame-child9" />
                  </div>
                  <div className="customer-details-group">
                    <div className="customer-type5">Customer Profile</div>
                    <div className="frame-parent11">
                      <div className="john-micheal-group">
                        <div className="progress-bar5">
                          <div className="progress5">
                            <div className="start5" />
                            <div className="start5" />
                          </div>
                        </div>
                      </div>
                      <b className="b5">100%</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-011">
                <div className="frame-parent10">
                  <div className="group-parent4">
                    <img
                      className="frame-child8"
                      alt=""
                      src="/group-95541.svg"
                    />
                    <div className="frame-child9" />
                  </div>
                  <div className="customer-details-group">
                    <div className="customer-type5">Address</div>
                    <div className="frame-parent11">
                      <div className="john-micheal-group">
                        <div className="progress-bar5">
                          <div className="progress7">
                            <div className="start5" />
                            <div className="start5" />
                          </div>
                        </div>
                      </div>
                      <b className="b5">100%</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-011">
                <div className="frame-parent10">
                  <div className="group-parent4">
                    <img
                      className="frame-child8"
                      alt=""
                      src="/group-95541.svg"
                    />
                    <div className="frame-child9" />
                  </div>
                  <div className="customer-details-group">
                    <div className="customer-type5">Contact</div>
                    <div className="frame-parent11">
                      <div className="john-micheal-group">
                        <div className="progress-bar5">
                          <div className="progress5">
                            <div className="start5" />
                            <div className="start5" />
                          </div>
                        </div>
                      </div>
                      <b className="b5">100%</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="step-051">
                <div className="group-parent4">
                  <img className="frame-child8" alt="" src="/group-95541.svg" />
                  <div className="frame-child17" />
                </div>
                <div className="customer-details-group">
                  <div className="customer-type5">Account Related</div>
                  <div className="frame-parent11">
                    <div className="john-micheal-group">
                      <div className="progress-bar5">
                        <div className="progress5">
                          <div className="start5" />
                          <div className="start5" />
                        </div>
                      </div>
                    </div>
                    <b className="b5">100%</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="customer-details-cta">
            <div className="customer-details-cards">
              <div className="title">
                <b className="customer-details4">Customer Details</b>
              </div>
              <div className="accordion-cards">
                <div className="accordion-1">
                  <div className="container4">
                    <div className="heading4">
                      <img className="icon36" alt="" src="/icon.svg" />
                      <b className="customer-information1">
                        Customer Information
                      </b>
                    </div>
                    <button className="add-icon" onClick={onAddIconClick}>
                      <img className="vector-icon2" alt="" src="/vector.svg" />
                    </button>
                  </div>
                </div>
                <div className="accordion-1">
                  <div className="container4">
                    <div className="heading4">
                      <img className="icon36" alt="" src="/icon.svg" />
                      <b className="customer-information1">
                        Key Account Details
                      </b>
                    </div>
                    <img className="add-icon1" alt="" src="/add-icon.svg" />
                  </div>
                </div>
                <div className="accordion-1">
                  <div className="container4">
                    <div className="heading4">
                      <img className="icon36" alt="" src="/icon.svg" />
                      <b className="customer-information1">Authority Details</b>
                    </div>
                    <img className="add-icon1" alt="" src="/add-icon.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-footer1">
              <div
                className="lightbutton4"
                onClick={onLightbuttonContainerClick}
              >
                <b className="b5">Close</b>
              </div>
              <div className="lightbutton-group">
                <div className="lightbutton5">
                  <b className="b5">Edit</b>
                </div>
                <div
                  className="lightbutton6"
                  onClick={onLightbuttonContainer2Click}
                >
                  <b className="b5">next</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
