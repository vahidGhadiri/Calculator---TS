import {CalculatorInput, CalculatorState, InputType, Operation, OperationsBuilder, OperatorType} from "../config/types";
import {worker} from "cluster";


const getOperationsBuilder = (inputs: Array<CalculatorInput>): OperationsBuilder => {
    return inputs.reduce<OperationsBuilder>((builder, input) => {
        switch (input.type) {
            case InputType.Numeric:
                const preValue = builder.working?.value || 0
                const newValue = preValue * 10 + input.value
                return {...builder, value: newValue}

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


const getState = (inputs: Array<CalculatorInput>): CalculatorState => {
    const builder = getOperationsBuilder(inputs)
    const {operations} = builder
    const lastOperation = operations.length ? operations[operations.length - 1] : null
    if (!lastOperation) return {displayValue: 0}

    switch (lastOperation.operator) {
        case OperatorType.Equals:
            const total = operations.reduce<number>((sum, operation) => sum + operation.value, 0)
            return {displayValue: total}

        default:
            return {displayValue: builder.working.value}
    }
}

const Calculator = {
    getState,
    getOperationsBuilder
}

export default Calculator

