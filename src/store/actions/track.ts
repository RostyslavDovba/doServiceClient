import { TrackAction, TrackActionTypes } from '@/types/tracks';
import axios from 'axios';
import { Dispatch } from 'react';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get('http://localhost:5001/tracks');
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
      return response;
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Виникла помилка!',
      });
    }
  };
};

export const searchTrack = (query: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(
        'http://localhost:5001/tracks/search?query=' + query,
      );
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: response.data });
      return response;
    } catch (e) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Виникла помилка!',
      });
    }
  };
};
