import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerMaster1.css";
const CustomerMaster1 = () => {
  const navigate = useNavigate();

  const onTableClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='colHeading01Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRow01ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow02ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow03ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow04ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow05ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow06ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow07ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow08ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  const onRow09ContainerClick = useCallback(() => {
    navigate("/accordion");
  }, [navigate]);

  return (
    <div className="customer-master-1">
      <div className="sidebar">
        <div className="container">
          <div className="tabs-logo">
            <div className="logo">
              <img className="robindms-icon" alt="" src="/robindms.svg" />
              <img className="icon" alt="" src="/icon1.svg" />
            </div>
            <div className="tabs">
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon2.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon2" alt="" src="/icon3.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon4.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon5.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon6.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon7.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon8.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon9.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon10.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon11.svg" />
              </div>
              <div className="lightmenutab">
                <img className="icon1" alt="" src="/icon12.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="light-dark-mode">
          <div className="lightmodetoggle">
            <img className="icon" alt="" src="/icon13.svg" />
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="header">
          <div className="address-actions">
            <div className="address">
              <b className="koncept-automobile-pvt">
                Koncept Automobile Pvt Ltd
              </b>
              <div className="frame-parent">
                <div className="vikhroli-w-mumbai-parent">
                  <div className="vikhroli-w-mumbai">Vikhroli (W) Mumbai</div>
                  <img className="left-icon" alt="" src="/icon14.svg" />
                </div>
                <img className="mask-icon" alt="" src="/mask.svg" />
                <div className="vikhroli-w-mumbai-parent">
                  <div className="vikhroli-w-mumbai">FY 2023</div>
                  <img className="left-icon" alt="" src="/icon14.svg" />
                </div>
              </div>
            </div>
            <div className="actions">
              <img className="icon1" alt="" src="/icon15.svg" />
              <div className="support">
                <img className="icon1" alt="" src="/icon16.svg" />
              </div>
              <div className="support">
                <div className="lightavatar-parent">
                  <img
                    className="lightavatar-icon"
                    alt=""
                    src="/lightavatar1.svg"
                  />
                  <div className="joana-doe-parent">
                    <b className="koncept-automobile-pvt">Joana Doe</b>
                    <div className="frame-wrapper">
                      <div className="vikhroli-w-mumbai-parent">
                        <div className="vikhroli-w-mumbai">Super Admin</div>
                        <img className="left-icon" alt="" src="/icon17.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lightnavigationnavtab">
            <div className="lightavatar-parent">
              <b className="koncept-automobile-pvt">Customer Master</b>
              <img className="icon18" alt="" src="/icon18.svg" />
            </div>
            <div className="lightnavigationnavtab-child" />
          </div>
        </div>
        <div className="content">
          <div className="header1">
            <div className="container1">
              <div className="search-container">
                <div className="lighttabmain">
                  <div className="lighttab">
                    <div className="text">Individual</div>
                  </div>
                  <div className="lighttab1">
                    <div className="text">Firm/Corporate</div>
                  </div>
                  <div className="lighttab2">
                    <div className="text">Text</div>
                  </div>
                  <div className="lighttab2">
                    <div className="text">Text</div>
                  </div>
                  <div className="lighttab2">
                    <div className="text">Text</div>
                  </div>
                  <img
                    className="icondownarrow"
                    alt=""
                    src="/icondownarrow.svg"
                  />
                </div>
                <div className="lightsearch-filter">
                  <div className="frame-group">
                    <div className="placeholder-parent">
                      <div className="vikhroli-w-mumbai">Customer Name</div>
                      <img className="left-icon" alt="" src="/icon19.svg" />
                    </div>
                    <div className="placeholder1">John</div>
                  </div>
                  <div className="icon-parent">
                    <img className="icon18" alt="" src="/icon20.svg" />
                    <img className="icon" alt="" src="/icon21.svg" />
                  </div>
                </div>
                <div className="lightsearch">
                  <div className="placeholder2">
                    Search by manufacturer name
                  </div>
                  <img className="icon" alt="" src="/icon22.svg" />
                </div>
              </div>
            </div>
            <div className="lightbutton">
              <b className="text5">View Draft</b>
            </div>
          </div>
          <div className="table" onClick={onTableClick}>
            <div className="header-row">
              <div className="col-heading-07">
                <div className="text">Action</div>
              </div>
              <div className="col-heading-06">
                <h6 className="membership-type">Membership Type</h6>
                <img className="icon23" alt="" src="/icon23.svg" />
              </div>
              <div className="col-heading-05">
                <div className="email-address">Email Address</div>
                <img className="icon23" alt="" src="/icon23.svg" />
              </div>
              <div className="col-heading-04">
                <div className="text">Mobile No.</div>
                <img className="icon23" alt="" src="/icon23.svg" />
              </div>
              <div className="col-heading-03">
                <div className="text">Customer Type</div>
                <img className="icon23" alt="" src="/icon23.svg" />
              </div>
              <div className="col-heading-02">
                <h6 className="customer-name">Customer Name</h6>
                <img className="icon23" alt="" src="/icon23.svg" />
              </div>
              <div
                className="col-heading-01"
                data-scroll-to="colHeading01Container"
              >
                <div className="text">Customer ID</div>
                <img
                  className="ico-sort-down-icon"
                  alt=""
                  src="/icosortdown.svg"
                />
              </div>
            </div>
            <div className="row-01" onClick={onRow01ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <button className="ico-edit">
                  <img className="vector-icon" alt="" src="/vector1.svg" />
                </button>
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johndoe@mahindra.com</div>
              <div className="div">+91-9664321226</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> Doe</span>
              </div>
              <div className="div1">9817239</div>
            </div>
            <div className="row-01" onClick={onRow02ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <button className="ico-edit">
                  <img className="vector-icon" alt="" src="/vector1.svg" />
                </button>
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johnmicheal@mahindra.com</div>
              <div className="div">+91-9348583593</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> micheal</span>
              </div>
              <div className="div1">7293487</div>
            </div>
            <div className="row-01" onClick={onRow03ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <img className="icon" alt="" src="/icoedit.svg" />
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johnwarner@mahindra.com</div>
              <div className="div">+91-9873459873</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> Warner</span>
              </div>
              <div className="div1">9823487</div>
            </div>
            <div className="row-01" onClick={onRow04ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <img className="icon" alt="" src="/icoedit.svg" />
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johndoe@mahindra.com</div>
              <div className="div">+91-9732642374</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> Doe</span>
              </div>
              <div className="div1">9823749</div>
            </div>
            <div className="row-01" onClick={onRow05ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <img className="icon" alt="" src="/icoedit1.svg" />
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johndoe@mahindra.com</div>
              <div className="div">+91-9637248423</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> Doe</span>
              </div>
              <div className="div1">8923462</div>
            </div>
            <div className="row-01" onClick={onRow06ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <img className="icon" alt="" src="/icoedit1.svg" />
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">Pauljohn@mahindra.com</div>
              <div className="div">+91-7623842378</div>
              <div className="individual">Individual</div>
              <div className="paul-john">
                <span>{`Paul `}</span>
                <span className="john">John</span>
              </div>
              <div className="div1">2763489</div>
            </div>
            <div className="row-01" onClick={onRow07ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <img className="icon" alt="" src="/icoedit1.svg" />
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johnbloom@mahindra.com</div>
              <div className="div">+91-9723823623</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> Bloom</span>
              </div>
              <div className="div1">0238038</div>
            </div>
            <div className="row-01" onClick={onRow08ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <img className="icon" alt="" src="/icoedit1.svg" />
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johndoe@mahindra.com</div>
              <div className="div">+91-8682347234</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> Doe</span>
              </div>
              <div className="div1">0233726</div>
            </div>
            <div className="row-01" onClick={onRow09ContainerClick}>
              <div className="action-buttons">
                <img className="icon" alt="" src="/icovisible.svg" />
                <img className="icon" alt="" src="/icoedit1.svg" />
              </div>
              <div className="golden">Golden</div>
              <div className="label">Label</div>
              <div className="label1">Label</div>
              <div className="johndoemahindracom">johndoe@mahindra.com</div>
              <div className="div">+91-9682348329</div>
              <div className="individual">Individual</div>
              <div className="john-doe">
                <span>John</span>
                <span className="doe"> Doe</span>
              </div>
              <div className="div1">2368237</div>
            </div>
          </div>
          <div className="pagination">
            <div className="pagination-dropdown">
              <div className="total-85-items">Total 85 items</div>
              <div className="content1">
                <div className="total-text">
                  <div className="text6">Total 85 items</div>
                </div>
                <div className="componentspagination-prev">
                  <img className="left-icon" alt="" src="/left.svg" />
                </div>
                <div className="componentspagination-item">
                  <div className="div18">1</div>
                </div>
                <div className="componentspagination-item-ell">
                  <div className="ellipsis">•••</div>
                </div>
                <div className="componentspagination-item">
                  <div className="div18">4</div>
                </div>
                <div className="componentspagination-item">
                  <div className="div18">5</div>
                </div>
                <div className="componentspagination-item3">
                  <div className="number">6</div>
                </div>
                <div className="componentspagination-item">
                  <div className="div18">7</div>
                </div>
                <div className="componentspagination-item">
                  <div className="div18">8</div>
                </div>
                <div className="componentspagination-item-ell">
                  <div className="ellipsis">•••</div>
                </div>
                <div className="componentspagination-item">
                  <div className="div18">50</div>
                </div>
                <div className="componentspagination-next">
                  <img className="left-icon" alt="" src="/right.svg" />
                </div>
              </div>
              <div className="size-changer">
                <div className="selection-item">
                  <div className="page">10 / page</div>
                </div>
                <img
                  className="ico-arrow-cut-down-icon"
                  alt=""
                  src="/icoarrowcutdown.svg"
                />
              </div>
              <div className="quick-jumper">
                <div className="go-to">Go to</div>
                <div className="input">
                  <div className="placeholder3">
                    <div className="go-to">example</div>
                  </div>
                </div>
              </div>
              <div className="suffix">页</div>
            </div>
            <div className="pagination-carousel">
              <div className="total-85-items1">Total 85 items</div>
              <div className="content2">
                <div className="total-text1">
                  <div className="text6">Total 85 items</div>
                </div>
                <div className="componentspagination-prev1">
                  <img className="left-icon" alt="" src="/left1.svg" />
                </div>
                <div className="componentspagination-item7">
                  <div className="div18">1</div>
                </div>
                <div className="componentspagination-item-ell2">
                  <div className="ellipsis">•••</div>
                </div>
                <div className="componentspagination-item7">
                  <div className="div18">4</div>
                </div>
                <div className="componentspagination-item7">
                  <div className="div18">5</div>
                </div>
                <div className="componentspagination-item10">
                  <div className="number">6</div>
                </div>
                <div className="componentspagination-item7">
                  <div className="div18">7</div>
                </div>
                <div className="componentspagination-item7">
                  <div className="div18">8</div>
                </div>
                <div className="componentspagination-item-ell2">
                  <div className="ellipsis">•••</div>
                </div>
                <div className="componentspagination-item7">
                  <div className="div18">50</div>
                </div>
                <div className="componentspagination-next1">
                  <img className="left-icon" alt="" src="/right1.svg" />
                </div>
              </div>
              <div className="pagination-options">
                <div className="size-changer1">
                  <div className="selection-item">
                    <div className="text6">10 / page</div>
                  </div>
                  <div className="icon28">
                    <img className="icon29" alt="" src="/icon24.svg" />
                  </div>
                </div>
                <div className="quick-jumper1">
                  <div className="text6">Go to</div>
                  <div className="input1">
                    <div className="placeholder3">
                      <div className="go-to">example</div>
                    </div>
                  </div>
                </div>
                <div className="suffix1">页</div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-2023">Copyright © 2023 ROBIN.</div>
      </div>
    </div>
  );
};

export default CustomerMaster1;
