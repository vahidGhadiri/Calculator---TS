import {
    CalculatorInput,
    InputType,
    Operation,
    OperatorType
} from "../config/types";
import Calculator from "./calculator";
import {getOperations} from "./calculator";


test("derive state", () => {
    const inputs: Array<CalculatorInput> = [
        {type: InputType.Numeric, value: 1},
        {type: InputType.Numeric, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add},
        {type: InputType.Numeric, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals},
    ]
    const state = Calculator.getState(inputs)
    expect(state.displayValue).toEqual(15)
})

test("generates operations", () => {
    const inputs: Array<CalculatorInput> = [
        {type: InputType.Numeric, value: 1},
        {type: InputType.Numeric, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add},
        {type: InputType.Numeric, value: 3},
        {type: InputType.Operator, operator: OperatorType.Equals},
    ]

    const operations: Array<Operation> = [
        {operator: OperatorType.Add, value: 12},
        {operator: OperatorType.Add, value: 3},
        {operator: OperatorType.Equals, value: 0}
    ]

    expect(Calculator.getOperations(inputs)).toEqual(operations)
})

