import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import calendarReducer from '@/store/calendar';
import drawerReducer from '@/store/drawer';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    drawer: drawerReducer
  },
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
