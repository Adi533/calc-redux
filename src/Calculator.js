import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    updateInput,
    changeOperation,
    calculateResult,
    reset,
} from './redux/actions';
import "./Calculator.css";

const Calculator = () => {
    const { input1, input2, currentOperation, totalOperations, result } = useSelector(
        (state) => state
    );

    const dispatch = useDispatch();

    const handleInputChange = (event, inputNum) => {
        const value = parseInt(event.target.value);
        dispatch(updateInput(inputNum, value));
    };

    const handleOperationChange = (operation) => {
        dispatch(changeOperation(operation));
    };

    const handleCalculateResult = () => {
        dispatch(calculateResult());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div class="border-2 border-black rounded-xl m-10 p-10">
            <div class="ml-48 w-52 text-center m-5 p-5 border-2 border-black rounded-xl">
                <p>Total Operations: {totalOperations}</p>
            </div>
            <div class="flex justify-evenly">
                <div class="w-68 m-5 pl-5 py-5 border-2 border-black rounded-xl">
                    <label>Input-1: </label>
                    <input type="number" value={input1} onChange={(e) => handleInputChange(e, 'input1')} />
                </div>
                <div class="mx-4 my-5 py-5 px-6 border-2 border-black rounded-full">
                    {currentOperation}
                </div>
                <div class="w-68 m-5 pl-5 py-5 border-2 border-black rounded-xl">
                    <label>Input-2: </label>
                    <input type="number" value={input2} onChange={(e) => handleInputChange(e, 'input2')} />
                </div>
            </div>
            <div class="flex">
                <button class="ml-96 mx-10 border-2 rounded-full border-black my-5 py-5 px-6" onClick={() => handleOperationChange('+')}>+</button>
                <button class="mx-10 border-2 rounded-full border-black m-5 py-5 px-7" onClick={() => handleOperationChange('-')}>-</button>
                <button class="mx-10 border-2 rounded-full border-black m-5 py-5 px-7" onClick={() => handleOperationChange('*')}>*</button>
                <button class="mx-10 border-2 rounded-full border-black m-5 py-5 px-7" onClick={() => handleOperationChange('/')}>/</button>
            </div>
            <div class="flex justify-between">
                <button class="ml-48 m-5 p-5 border-2 border-black rounded-xl" onClick={handleCalculateResult}>Calculate</button>
                <button class="mr-48 m-5 p-5 border-2 border-black rounded-xl" onClick={handleReset}>Reset</button>
            </div>
            {result !== null && (
                <div class="w-28 ml-48 m-5 p-5 border-2 border-black rounded-xl">
                    <p>Result: {result}</p>
                </div>
            )}
        </div>
    );
};

export default Calculator;
