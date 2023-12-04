import { PlayerActionTypes, PlayerActions } from '@/types/player';
import { ITrack } from '@/types/tracks';

export const playTrack = (): PlayerActions => {
  return { type: PlayerActionTypes.PLAY };
};

export const pauseTrack = (): PlayerActions => {
  return { type: PlayerActionTypes.PAUSE };
};

export const setDuration = (payload: number): PlayerActions => {
  return { type: PlayerActionTypes.SET_DURATION, payload };
};

export const setVolume = (payload: number): PlayerActions => {
  return { type: PlayerActionTypes.SET_VOLUME, payload };
};

export const setCurrentTime = (payload: number): PlayerActions => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};

export const setActiveTrack = (payload: ITrack | null): PlayerActions => {
  return { type: PlayerActionTypes.SET_ACTIVE, payload };
};
