export enum ButtonType {
    Numeric = "NUMERIC",
    Operator = "OPERATOR"
}

export enum InputType {
    Numeric = "NUMERIC",
    Operator = "OPERATOR",
}

export enum OperatorType {
    Add = "ADD",
    Subtract = "SUBTRACT",
    Equals = "EQUALS"
}

export type Operation = {
    operator: OperatorType,
    value: number
}

export type OperationsBuilder = {
    operations: Operation[]
    working: Operation 

}

export type CalculatorState = { displayValue: number }

export type CalculatorInput =
    | { type: InputType.Numeric, value: number }
    | { type: InputType.Operator, operator: OperatorType }
