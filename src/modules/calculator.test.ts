import {CalculatorInput, InputType, Operation, OperatorType} from "../config/types";
import Calculator from "./calculator";


test("Generate operation", () => {
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
        {operator: OperatorType.Equals, value: 0},
    ]

    expect(Calculator.getOperationsBuilder(inputs).operations).toEqual(operations)
})


test("Has display value 0 with no input", () => {
    const inputs: Array<CalculatorInput> = []
    const state = Calculator.getState(inputs)
    expect(state.displayValue).toEqual(0)
})


test("Derives display value upon new numerical value", () => {
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


test("Derives final state (with addition)", () => {
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


test("Derives final state (with addition and subtraction)", () => {
    const inputs: Array<CalculatorInput> = [
        {type: InputType.Numeric, value: 1},
        {type: InputType.Numeric, value: 2},
        {type: InputType.Operator, operator: OperatorType.Add},
        {type: InputType.Numeric, value: 3},
        {type: InputType.Operator, operator: OperatorType.Subtract},
        {type: InputType.Numeric, value: 5},
        {type: InputType.Operator, operator: OperatorType.Equals},
    ]

    const state = Calculator.getState(inputs)
    expect(state.displayValue).toEqual(10)
})

test("derives displayValue upon first numerical value", () => {
    const inputs: Array<CalculatorInput> = [{type: InputType.Numeric, value: 1}]
    const state = Calculator.getState(inputs)
    expect(state.displayValue).toEqual(1)
})
