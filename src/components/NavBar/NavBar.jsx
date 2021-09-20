import React from "react";
import "./styles.scss";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import avatar from "../../assets/images/avatar.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const newUsersQuan = useSelector((state) => state.newUsers.users.length);
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <Link to="/">
            <span className="logo">Hieu's admin panel</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">{newUsersQuan}</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
          </div>
          <img src={avatar} alt="ava" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
