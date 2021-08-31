import {CalculatorInput, CalculatorState, InputType, Operation, OperationsBuilder, OperatorType} from "../config/types";


export const getOperationsBuilder = (inputs: Array<CalculatorInput>): OperationsBuilder => {
    return inputs.reduce<OperationsBuilder>((builder, input) => {
        switch (input.type) {
            case InputType.Numeric:
                const preValue = builder.working?.value || 0
                const newValue = preValue * 10 + input.value
                return {
                    ...builder,
                    working: {...builder.working, value: newValue}
                }

            case InputType.Operator:
                if (input.operator === OperatorType.Equals) {
                    return {
                        operations: [...builder.operations, builder.working, {operator: OperatorType.Equals, value: 0}],
                        working: {operator: OperatorType.Add, value: 0}
                    }
                } else {
                    return {
                        operations: [...builder.operations, builder.working],
                        working: {operator: input.operator, value: 0}
                    }
                }
        }
    }, {operations: [], working: {operator: OperatorType.Add, value: 0}})
}

export const getTotal = (operations: Array<Operation>): number =>
    operations.reduce<number>((sum, operation) => {
        switch (operation.operator) {
            case OperatorType.Add:
                return sum + operation.value
            case OperatorType.Subtract:
                return sum - operation.value
            case OperatorType.Equals:
                return sum
        }
    }, 0)

export const getState = (inputs: Array<CalculatorInput>): CalculatorState => {
    const builder = getOperationsBuilder(inputs)
    const {operations} = builder
    const lastOperation = operations.length ? operations[operations.length - 1] : null
    const lastInput = inputs.length ? inputs[inputs.length - 1] : null
    const total = getTotal(operations)

    if (!lastOperation) return {displayValue: builder.working.value}

    switch (lastOperation.operator) {
        case OperatorType.Equals:
            return {displayValue: total}

        default:
            return {displayValue: lastInput && lastInput.type === InputType.Numeric ? builder.working.value : total}
    }
}


const Calculator = {
    getState,
    getOperationsBuilder
}

export default Calculator

