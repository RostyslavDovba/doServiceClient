// // import { createSlice } from '@reduxjs/toolkit';
// import {
//   TrackAction,
//   TrackState,
//   TrackActionTypes,
//   ITrack,
// } from '@/types/tracks';
// // import type { PayloadAction } from '@reduxjs/toolkit';

// // // export interface CounterState {
// // //   value: number;
// // // }

// const initialState: TrackState = {
//   tracks: [],
//   error: '',
// };

// export const trackSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     getTracks: (state, action: PayloadAction<ITrack[]>) => {
//       state.tracks = action.payload;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.error = action.payload;
//     },
//     // incrementByAmount: (state, action: PayloadAction<number>) => {
//     //   //   state.value += action.payload;
//     // },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { getTracks, setError } = trackSlice.actions;
// export default trackSlice.reducer;

// export const trackReducer = (
//   state = initialState,
//   action: TrackAction,
// ): TrackState => {
//   switch (action.type) {
//     case TrackActionTypes.FETCH_TRACKS:
//       return { error: '', tracks: action.payload };
//     case TrackActionTypes.FETCH_TRACKS_ERROR:
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };
