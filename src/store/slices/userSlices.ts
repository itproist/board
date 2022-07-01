import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  token: '',
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    clearUser(state) {
      state.email = '';
      state.token = '';
      state.id = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
