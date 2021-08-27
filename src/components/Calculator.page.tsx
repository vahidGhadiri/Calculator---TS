import React from "react"
import style from "./Calculator.module.scss"

import {Button} from "./button/Button.component";
import {ButtonType} from "../config/types";

export const Calculator: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.grid}>
                <div className={style.display}>
                    <p>0</p>
                </div>
                <Button label="AC" position={[0, 1]} width={2}/>
                <Button label="UNDO" position={[2, 1]} width={2}/>
                <Button label="-" position={[3, 2]}/>
                <Button label="+" position={[3, 3]}/>
                <Button label="=" position={[3, 4]} height={2}/>
                <Button type={ButtonType.Numeric} label="9 " position={[2, 2]}/>
                <Button type={ButtonType.Numeric} label="8" position={[1, 2]}/>
                <Button type={ButtonType.Numeric} label="7" position={[0, 2]}/>
                <Button type={ButtonType.Numeric} label="6" position={[2, 3]}/>
                <Button type={ButtonType.Numeric} label="5" position={[1, 3]}/>
                <Button type={ButtonType.Numeric} label="4" position={[0, 3]}/>
                <Button type={ButtonType.Numeric} label="3" position={[2, 4]}/>
                <Button type={ButtonType.Numeric} label="2" position={[1, 4]}/>
                <Button type={ButtonType.Numeric} label="1" position={[0, 4]}/>
                <Button type={ButtonType.Numeric} label="0" position={[0, 5]} width={3}/>
            </div>
        </div>
    )
}
