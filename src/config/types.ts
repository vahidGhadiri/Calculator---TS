export enum ButtonType {
    Numeric,
    Operative
}

export enum InputType {
    Numeric,
    Operative
}

export enum OperationType {
    Add,
    Subtract,
    Equals
}

export type CalculatorState = { displayValue: number }

export type CalculatorInput =
    | { type: InputType.Numeric, value: number }
    | { type: InputType.Operative, operation: OperationType }
