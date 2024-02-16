import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/utils/redux/store';

// Define a type for the slice state
interface CalendarState {
  xAxis: number;
  yAxis: number;
}

// Define the initial state using that type
const initialState: CalendarState = {
  xAxis: 0,
  yAxis: 0
};

export const calendarSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAxis: (state, action: PayloadAction<CalendarState>) => {
      state.xAxis = action.payload.xAxis;
      state.yAxis = action.payload.yAxis;
    },
  },
});

export const { setAxis } = calendarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.calendar;

export default calendarSlice.reducer;
