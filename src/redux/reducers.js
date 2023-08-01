import { ActionTypes } from './actions';

const initialState = {
  input1: 0,
  input2: 0,
  currentOperation: '+',
  totalOperations: 0,
  result: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_INPUT: {
      const { inputNum, value } = action.payload;
      return {
        ...state,
        [inputNum]: value,
      };
    }
    case ActionTypes.CHANGE_OPERATION: {
      const { operation } = action.payload;
      return {
        ...state,
        currentOperation: operation,
      };
    }
    case ActionTypes.CALCULATE_RESULT: {
      const { input1, input2, currentOperation } = state;
      let result;
      switch (currentOperation) {
        case '+':
          result = input1 + input2;
          break;
        case '-':
          result = input1 - input2;
          break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            result = input1 / input2;
            break;
        default:
          result = null;
      }
      return {
        ...state,
        result,
        totalOperations: state.totalOperations + 1,
      };
    }
    case ActionTypes.RESET: {
      return {
        ...initialState,
        totalOperations: state.totalOperations,
      };
    }
    default:
      return state;
  }
};
