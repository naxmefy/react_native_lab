import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../action_types'

export interface CounterState {
  counter: number
}
export type CounterAction = { type: typeof INCREMENT_COUNTER | typeof DECREMENT_COUNTER }

const initialState: CounterState = {
  counter: 0,
}

export function counterReducer(state = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        counter: state.counter + 1,
      }
    }
    case DECREMENT_COUNTER: {
      return {
        counter: state.counter - 1,
      }
    }

    default:
      return state
  }
}
