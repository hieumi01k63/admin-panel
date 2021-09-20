import React, { useState } from "react";
import "./styles.scss";
import {
  Home,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  ImportExport,
  Equalizer,
  MailOutline,
  Feedback,
  ChatBubbleOutline,
  WorkOutline,
  ErrorOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeLi, setActiveli] = useState(1);

  const handleClickActiveLi = (currentActiveLi) => {
    setActiveli(currentActiveLi);
  };

  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitlle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/">
              <li
                className={
                  activeLi === 1 ? "sideBarListItem--active" : "sideBarListItem"
                }
                onClick={() => {
                  handleClickActiveLi(1);
                }}
              >
                <Home className="sideBarIcon" />
                Home
              </li>
            </Link>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytisc
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitlle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users">
              <li
                className={
                  activeLi === 4 ? "sideBarListItem--active" : "sideBarListItem"
                }
                onClick={() => {
                  handleClickActiveLi(4);
                }}
              >
                <PermIdentity className="sideBarIcon" />
                User
              </li>
            </Link>
            <li className="sideBarListItem">
              <Storefront className="sideBarIcon" />
              Productions
            </li>
            <li className="sideBarListItem">
              <ImportExport className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarListItem">
              <Equalizer className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitlle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutline className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <Feedback className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitlle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutline className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Analytisc
            </li>
            <li className="sideBarListItem">
              <ErrorOutline className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
