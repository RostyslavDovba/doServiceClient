import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { playerReducer } from './playReducer';
import counterReducer from '@/store/slices/counter';
import { trackReducer } from './trackReducer';
// import { trackReducer } from '@/store/slices/track';

const rootReducers = combineReducers({
  player: playerReducer,
  track: trackReducer,
  counter: counterReducer,
});

export const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducers(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducers>;
