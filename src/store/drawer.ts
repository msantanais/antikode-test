import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/utils/redux/store';

// Define a type for the slice state
interface DrawerState {
  showDrawer: boolean
}

// Define the initial state using that type
const initialState: DrawerState = {
  showDrawer: false,
};

export const drawerSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setShowDrawer: (state, action) => {
      state.showDrawer = action.payload;
    },
  },
});

export const { setShowDrawer } = drawerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.drawer;

export default drawerSlice.reducer;
