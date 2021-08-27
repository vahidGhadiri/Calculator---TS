import {CalculatorInput, CalculatorState} from "../config/types";


const getState = (inputs: Array<CalculatorInput>): CalculatorState => {
    return {
        displayValue: 0
    }
}

const Calculator = {
    getState
}

export default Calculator
