import React, {useState} from "react";
import {getState} from "../modules/calculator"
import style from "./Calculator.module.scss"
import {Button} from "./button/Button.component";
import {ButtonType, CalculatorInput, InputType, OperatorType} from "../config/types";

export const Calculator: React.FC = () => {
    const [inputs, setInputs] = useState<Array<CalculatorInput>>([])
    const state = getState(inputs)

    const appendInput = (input: CalculatorInput): void => {
        setInputs(prev => [...prev, input])
    }

    const handleNumerical = (value: number): any => {
        appendInput({type: InputType.Numeric, value})
    }

    const handleOperator = (operator: OperatorType) => {
        appendInput({type: InputType.Operator, operator})
    }

    const handleAllClear = () => {
        setInputs([])
    }

    const handleUndo = () => {
        setInputs((prev) => prev.slice(0, -1))
    }

    return (
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.display}>
                    <p>{state.displayValue}</p>
                </div>
                <Button label="AC" position={[0, 1]} width={2} onClick={() => handleAllClear()}/>
                <Button label="UNDO" position={[2, 1]} width={2} onClick={() => handleUndo()}/>
                <Button label="-" position={[3, 2]} onClick={() => handleOperator(OperatorType.Subtract)}/>
                <Button label="+" position={[3, 3]} onClick={() => handleOperator(OperatorType.Add)}/>
                <Button label="=" position={[3, 4]} height={2} onClick={() => handleOperator(OperatorType.Equals)}/>
                <Button buttonType={ButtonType.Numeric} label="9" position={[2, 2]} onClick={() => handleNumerical(9)}/>
                <Button buttonType={ButtonType.Numeric} label="8" position={[1, 2]} onClick={() => handleNumerical(8)}/>
                <Button buttonType={ButtonType.Numeric} label="7" position={[0, 2]} onClick={() => handleNumerical(7)}/>
                <Button buttonType={ButtonType.Numeric} label="6" position={[2, 3]} onClick={() => handleNumerical(6)}/>
                <Button buttonType={ButtonType.Numeric} label="5" position={[1, 3]} onClick={() => handleNumerical(5)}/>
                <Button buttonType={ButtonType.Numeric} label="4" position={[0, 3]} onClick={() => handleNumerical(4)}/>
                <Button buttonType={ButtonType.Numeric} label="3" position={[2, 4]} onClick={() => handleNumerical(3)}/>
                <Button buttonType={ButtonType.Numeric} label="2" position={[1, 4]} onClick={() => handleNumerical(2)}/>
                <Button buttonType={ButtonType.Numeric} label="1" position={[0, 4]} onClick={() => handleNumerical(1)}/>
                <Button buttonType={ButtonType.Numeric} label="0" position={[0, 5]} width={3}
                        onClick={() => handleNumerical(0)}/>
            </div>
        </div>
    )
}
