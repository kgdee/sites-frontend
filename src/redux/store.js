import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import appReducer from "./appSlice"
import appsReducer from "./appsSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    apps: appsReducer,
  },
});
