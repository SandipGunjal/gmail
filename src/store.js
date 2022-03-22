// import {configureStore} from "@reduxjs/toolkit";
// import mailReducer from "./mailSlice";

// export default configureStore({
//     reducer:{
//         mail:mailReducer,
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice"
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});