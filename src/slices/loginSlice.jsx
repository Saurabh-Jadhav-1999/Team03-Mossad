/*Login slice for the purpose of storing login data along with x-auth-token received from api*/

import { createSlice } from "@reduxjs/toolkit";

/*initializing the state variables*/
const initialState = {
  token: localStorage.getItem("token"),
  user_name:localStorage.getItem("name"),
};
/* Creating reducers for setting state variables */
const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    setToken: (state = initialState, action) => {
      state.token = action.payload.token["x-auth-token"];
      state.user_name=action.payload.token["user_name"];
    
    },
    removeToken: (state = initialState, action) => {
      state.token = null;
      state.user_name=null;
    },
  },
});
/*Exporting actions of the slice*/
export const { setToken, removeToken } = loginSlice.actions;

export default loginSlice.reducer;
