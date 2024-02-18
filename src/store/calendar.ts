import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/utils/redux/store';

// Define a type for the slice state
interface CalendarState {
  xAxis: number;
  yAxis: number;
  selectedEvent: EventType;
}

// Define the initial state using that type
const initialState: CalendarState = {
  xAxis: 0,
  yAxis: 0,
  selectedEvent: {},
};

export const calendarSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAxis: (state, action) => {
      state.xAxis = action.payload.xAxis;
      state.yAxis = action.payload.yAxis;
    },
    setSelectedEventGlobal: (state, action) => {
      state.selectedEvent = action.payload
    }
  },
});

export const { setAxis, setSelectedEventGlobal } = calendarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.calendar;

export default calendarSlice.reducer;
