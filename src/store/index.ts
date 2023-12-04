import { configureStore } from '@reduxjs/toolkit';
import { playerReducer } from '@/store/reducers/playReducer';
import counterReducer from '@/store/slices/counter';
import { reducer } from './reducers';
import { useDispatch } from 'react-redux';
// import { trackReducer } from './reducers/trackReducer';

export const store = configureStore({
  reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export type AppStore = ReturnType<typeof makeStore>;
// export type { AnyAction, ThunkAction };

export const useAppDispatch: () => AppDispatch = useDispatch;
// export type AppDispatch = AppStore['dispatch'];
