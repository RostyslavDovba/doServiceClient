import { ITrack } from './tracks';

export interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export enum PlayerActionTypes {
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  SET_ACTIVE = 'SET_ACTIVE',
  SET_VOLUME = 'SET_VOLUME',
  SET_DURATION = 'SET_DURATION',
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
}

interface PlayAction {
  type: PlayerActionTypes.PLAY;
}
interface PauseAction {
  type: PlayerActionTypes.PAUSE;
}
interface SetActiveAction {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: ITrack | null;
}
interface SetVolumeAction {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
}
interface SetDurationAction {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
}
interface SetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
}

export type PlayerActions =
  | PlayAction
  | PauseAction
  | SetActiveAction
  | SetDurationAction
  | SetCurrentTimeAction
  | SetVolumeAction;
