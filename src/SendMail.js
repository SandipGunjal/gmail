import { Button } from "@mui/material";
import React from "react";
import "./sendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { db } from "./Firebase";
import {firebase} from "@firebase/app"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from "./mailSlice";


const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch=useDispatch();

  const onSubmit=(formData)=>{
      console.log(formData);
      db.collection("emails").add({
        to:formData.to,
        subject:formData.subject,
        message:formData.message,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      })
      dispatch(closeSendMessage())

  }

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Massage</h3>
        <CloseIcon
        onClick={()=>dispatch(closeSendMessage())}
         className="sendMail_close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}/>
        {errors.to && <p className="sendMail_error">To is required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}/>
        
        {errors.subject &&<p className="sendMail_error">Subject is required!</p>}

        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_massage"
          ref={register({ required: true })}/>
        {errors.message && <p className="sendMail_error">Message is required!</p>}

    
        <div className="sendMail_option">
          <Button 
          className="sendMail_send"
          variant="contained"
          color="primary"
          type="submit"
          >
          Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
