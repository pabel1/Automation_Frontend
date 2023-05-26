import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiRequest } from "../features/ApiRequest/apiRequest";
// import { apiRequest } from "";
import authReducer from "../features/Auth/authSlice";

// import userReducer from '../State/userSlice'
export const store = configureStore({
  reducer: {
    [apiRequest.reducerPath]: apiRequest.reducer,

    auth: authReducer,
  },
  middleware: (gDM) => gDM().concat(apiRequest.middleware),
  //   devTools: false,
});
setupListeners(store.dispatch);
