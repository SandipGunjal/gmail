import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./emailRow.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from "./mailSlice";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail=()=>{
    dispatch(selectMail({
      id, 
      title, 
      subject, 
      description, 
      time,
    }))
    history.push("/mail")
  }

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_option">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className="emailRow_title">{title}</h3>

      <div className="emailRow_message">
        <h4>
          {subject}
          <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <div className="emailRow_time">{time}</div>
    </div>
  );
};

export default EmailRow;
