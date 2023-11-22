import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: 0,
  userType: '',
};

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementByAmount: (state, action = {}) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
