import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccordionOpen.css";
const AccordionOpen = ({ onClose }) => {
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

  const onIconContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onLightbuttonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="accordion-open">
      <div className="accordion-expanded">
        <div className="customer-details-expanded" data-animate-on-scroll>
          <div className="time">
            <div className="time-child" />
            <div className="image-5-parent">
              <div className="image-5" />
              <div className="frame-child" />
              <div className="frame-item" />
              <div className="hh-mm">HH MM</div>
              <div className="scrool-1" />
              <img className="scroll-1-icon" alt="" />
            </div>
          </div>
          <div className="page-header">
            <div className="container2">
              <div className="view-customer-details">View Customer Details</div>
              <button className="cross-icon">
                <img className="union-icon" alt="" />
                <img className="union-icon1" alt="" src="/union.svg" />
              </button>
            </div>
          </div>
          <div className="details-stepper-card-parent">
            <div className="details-stepper-card">
              <div className="customer-info-card">
                <div className="lightavatar-group">
                  <img
                    className="lightavatar-icon1"
                    alt=""
                    src="/lightavatar.svg"
                  />
                  <div className="john-micheal-parent">
                    <b className="john-micheal1">John Micheal</b>
                    <div className="c200615396">C200615396</div>
                  </div>
                </div>
                <div className="customer-info-card-child" />
                <div className="frame-container">
                  <div className="customer-type-parent">
                    <div className="customer-details">Customer Type:</div>
                    <div className="corporate">Corporate</div>
                  </div>
                  <div className="customer-type-parent">
                    <div className="customer-details">Mobile No.:</div>
                    <div className="corporate">9893473843</div>
                  </div>
                </div>
              </div>
              <div className="stepper">
                <div className="step-01">
                  <div className="frame-div">
                    <div className="group-parent">
                      <img
                        className="frame-inner"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="line-div" />
                    </div>
                    <div className="customer-details-parent">
                      <div className="customer-details">Customer Details</div>
                      <div className="frame-parent1">
                        <div className="john-micheal-parent">
                          <div className="progress-bar">
                            <div className="progress">
                              <div className="start" />
                              <div className="start" />
                            </div>
                          </div>
                        </div>
                        <b className="b">100%</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step-01">
                  <div className="frame-div">
                    <div className="group-parent">
                      <img
                        className="frame-inner"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="line-div" />
                    </div>
                    <div className="customer-details-parent">
                      <div className="customer-details">Customer Profile</div>
                      <div className="frame-parent1">
                        <div className="john-micheal-parent">
                          <div className="progress-bar">
                            <div className="progress">
                              <div className="start" />
                              <div className="start" />
                            </div>
                          </div>
                        </div>
                        <b className="b">100%</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step-01">
                  <div className="frame-div">
                    <div className="group-parent">
                      <img
                        className="frame-inner"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="line-div" />
                    </div>
                    <div className="customer-details-parent">
                      <div className="customer-details">Address</div>
                      <div className="frame-parent1">
                        <div className="john-micheal-parent">
                          <div className="progress-bar">
                            <div className="progress2">
                              <div className="start" />
                              <div className="start" />
                            </div>
                          </div>
                        </div>
                        <b className="b">100%</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step-01">
                  <div className="frame-div">
                    <div className="group-parent">
                      <img
                        className="frame-inner"
                        alt=""
                        src="/group-9554.svg"
                      />
                      <div className="line-div" />
                    </div>
                    <div className="customer-details-parent">
                      <div className="customer-details">Contact</div>
                      <div className="frame-parent1">
                        <div className="john-micheal-parent">
                          <div className="progress-bar">
                            <div className="progress">
                              <div className="start" />
                              <div className="start" />
                            </div>
                          </div>
                        </div>
                        <b className="b">100%</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="step-05">
                  <div className="group-parent">
                    <img className="frame-inner" alt="" src="/group-9554.svg" />
                    <div className="frame-child7" />
                  </div>
                  <div className="customer-details-parent">
                    <div className="customer-details">Account Related</div>
                    <div className="frame-parent1">
                      <div className="john-micheal-parent">
                        <div className="progress-bar">
                          <div className="progress">
                            <div className="start" />
                            <div className="start" />
                          </div>
                        </div>
                      </div>
                      <b className="b">100%</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="customer-details1">
              <div className="heading">
                <b className="customer-details2">Customer Details</b>
              </div>
              <div className="accordion-expanded1">
                <section className="customer-info-expand">
                  <div className="title-collapse">
                    <div className="heading1">
                      <img className="icon30" alt="" src="/icon.svg" />
                      <b className="customer-information">
                        Customer Information
                      </b>
                    </div>
                    <div className="icon31" onClick={onIconContainerClick}>
                      <div className="icon-child" />
                      <img
                        className="vector-54-stroke"
                        alt=""
                        src="/vector-54-stroke.svg"
                      />
                    </div>
                  </div>
                  <div className="divider-01" />
                  <div className="row-1">
                    <div className="enquiry-no">
                      <div className="customer-details">Enquiry No.</div>
                      <div className="placeholder7">12309183</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Customer ID</div>
                      <div className="placeholder7">12309183</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Customer Type</div>
                      <div className="placeholder7">Firm/Company</div>
                    </div>
                  </div>
                  <div className="divider-01" />
                  <div className="row-1">
                    <div className="dummy-major-route-details">
                      <div className="customer-details">{`Dummy Major Route Details `}</div>
                      <div className="customer-details">C1</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Corporate Type</div>
                      <div className="placeholder7">Non-Listed</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Corporate Name</div>
                      <div className="placeholder7">{`Koncept Private Limited `}</div>
                    </div>
                  </div>
                  <div className="divider-01" />
                  <div className="row-1">
                    <div className="enquiry-no">
                      <div className="customer-details">
                        Usage/Application Category
                      </div>
                      <div className="placeholder7">{`Usage Dummy Category `}</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="description7">
                        Usage/Application Sub-Category
                      </div>
                      <div className="placeholder7">{`Usage Dummy Category `}</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Customer Category</div>
                      <div className="placeholder7">Fleet</div>
                    </div>
                  </div>
                  <div className="divider-01" />
                  <div className="row-1">
                    <div className="enquiry-no">
                      <div className="customer-details">Business Details</div>
                      <div className="placeholder7">Dummy Business Details</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">
                        Vehicle Deployment Details
                      </div>
                      <div className="placeholder7">{`Dummy Vehicle Details `}</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Key Role Details</div>
                      <div className="placeholder7">{`Dummy Role Details `}</div>
                    </div>
                  </div>
                  <div className="row-5">
                    <div className="enquiry-no">
                      <div className="customer-details">
                        Major Route Details
                      </div>
                      <div className="placeholder7">{`Dummy Major Route Details `}</div>
                    </div>
                  </div>
                </section>
                <section className="customer-info-expand">
                  <div className="title-collapse">
                    <div className="heading1">
                      <img className="icon30" alt="" src="/icon.svg" />
                      <b className="customer-information">
                        Key Account details
                      </b>
                    </div>
                    <div className="icon33">
                      <div className="icon-child" />
                      <img
                        className="vector-54-stroke"
                        alt=""
                        src="/vector-54-stroke1.svg"
                      />
                    </div>
                  </div>
                  <div className="row-1">
                    <div className="enquiry-no">
                      <div className="customer-details">Account Code</div>
                      <div className="placeholder7">CFG464787</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Account Name</div>
                      <div className="placeholder7">Koncept</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Account Segment</div>
                      <div className="placeholder7">Firm</div>
                    </div>
                  </div>
                  <div className="row-1">
                    <div className="enquiry-no">
                      <div className="customer-details">
                        Account Client Name
                      </div>
                      <div className="placeholder7">Pal Singh</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">
                        Account Mapping Date
                      </div>
                      <div className="placeholder7">Corporate Name</div>
                    </div>
                    <div className="spacing" />
                  </div>
                </section>
                <section className="customer-info-expand">
                  <div className="title-collapse">
                    <div className="heading1">
                      <img className="icon30" alt="" src="/icon.svg" />
                      <b className="customer-information">Authority Details</b>
                    </div>
                    <div className="icon33">
                      <div className="icon-child" />
                      <img
                        className="vector-54-stroke2"
                        alt=""
                        src="/vector-54-stroke2.svg"
                      />
                    </div>
                  </div>
                  <div className="row-1">
                    <div className="enquiry-no">
                      <div className="customer-details">Name Of Person</div>
                      <div className="placeholder7">Vimal Kumar</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Position</div>
                      <div className="placeholder7">Manager</div>
                    </div>
                    <div className="enquiry-no">
                      <div className="customer-details">Company Name</div>
                      <div className="placeholder7">Koncept</div>
                    </div>
                  </div>
                  <div className="row-5">
                    <div className="enquiry-no">
                      <div className="customer-details">Remarks</div>
                      <div className="placeholder7">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and Dummy
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-footer">
          <div className="lightbutton1" onClick={onLightbuttonContainerClick}>
            <b className="b">Close</b>
          </div>
          <div className="lightbutton-parent">
            <div className="lightbutton2">
              <b className="b">Edit</b>
            </div>
            <div className="lightbutton3">
              <b className="b">next</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionOpen;
