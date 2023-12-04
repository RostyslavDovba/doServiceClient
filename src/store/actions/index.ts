import * as PlayerActionCreators from '@/store/actions/player';
import {
  increment,
  decrement,
  incrementByAmount,
} from '@/store/slices/counter';

const actions = {
  ...PlayerActionCreators,
  increment,
  decrement,
  incrementByAmount,
};

export default actions;
