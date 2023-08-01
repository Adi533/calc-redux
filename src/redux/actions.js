export const ActionTypes = {
    UPDATE_INPUT: 'UPDATE_INPUT',
    CHANGE_OPERATION: 'CHANGE_OPERATION',
    CALCULATE_RESULT: 'CALCULATE_RESULT',
    RESET: 'RESET',
  };
  
  export const updateInput = (inputNum, value) => ({
    type: ActionTypes.UPDATE_INPUT,
    payload: { inputNum, value },
  });
  
  export const changeOperation = (operation) => ({
    type: ActionTypes.CHANGE_OPERATION,
    payload: { operation },
  });
  
  export const calculateResult = () => ({
    type: ActionTypes.CALCULATE_RESULT,
  });
  
  export const reset = () => ({
    type: ActionTypes.RESET,
  });
  