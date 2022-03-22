import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "./userSlice";
import { auth } from "./Firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch;

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://326219.selcdn.ru/albatoStatic/logos/gmail/original.png"
          alt=""
        />
      </div>

      <div className="header_middle">
        <SearchIcon className="ab" />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>
        <IconButton>
          <NotificationsIcon></NotificationsIcon>
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl}></Avatar>
      </div>
    </div>
  );
};

export default Header;
