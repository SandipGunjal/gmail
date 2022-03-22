import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { Route, Switch } from "react-router-dom";
import Mail from "./Mail";
import MailList from "./MailList";
import { BrowserRouter } from "react-router-dom";
import SendMail from "./SendMail";
import { selectSendMessageIsOpen } from "./mailSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { login, selectUser } from './userSlice';
import { useEffect } from 'react';
import { auth } from "./Firebase";

function App() {
  // const dispatch=useDispatch();
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser)

  //  useEffect=(()=>{
  //    auth.onAuthStateChanged((user)=>{
  //      if(user){
  //        dispatch(
  //          login({
  //            displayName:user.displayName,
  //            email:user.email,
  //            photoUrl:user.photoURL,
  //          })
  //        )
  //      }
  //    })
  //  })

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <MailList />
              </Route>
            </Switch>
          </div>
          { sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
