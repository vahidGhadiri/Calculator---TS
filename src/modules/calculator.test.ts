import {
    CalculatorInput,
    InputType,
    OperationType
} from "../config/types";
import Calculator from "./calculator";


test("derive state", () => {
    const inputs: Array<CalculatorInput> = [
        {type: InputType.Numeric, value: 1},
        {type: InputType.Numeric, value: 2},
        {type: InputType.Operative, operation: OperationType.Add},
        {type: InputType.Numeric, value: 3},
        {type: InputType.Operative, operation: OperationType.Equals},
    ]
    const state = Calculator.getState(inputs)
    expect(state.displayValue).toEqual(15)
})
