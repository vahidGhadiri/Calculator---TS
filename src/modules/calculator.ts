import {
    CalculatorInput,
    CalculatorState,
    InputType,
    Operation,
    OperationsBuilder,
    OperatorType
} from "../config/types";


const getOperations = (inputs: Array<CalculatorInput>): Array<Operation> => {
    const builder: OperationsBuilder = inputs.reduce<OperationsBuilder>((builder, input) => {
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
    return builder.operations
}


const getState = (inputs: Array<CalculatorInput>): CalculatorState => {
    return {displayValue: 0}
}

const Calculator = {
    getState,
    getOperations
}

export default Calculator
