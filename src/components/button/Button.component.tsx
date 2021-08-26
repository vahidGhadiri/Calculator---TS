import React from "react"
import style from "./Button.module.scss"

import {ButtonType} from "../../config/types"

interface Props {
    type?: ButtonType
    label: string
    position?: [x: number, y: number]
    width?: number
    height?: number
}


export const Button: React.FC<Props> = (
    {
        height,
        label,
        position,
        width,
        type = ButtonType.Operative
    }
) => {

    const styles: React.CSSProperties = {}
    if (position) {
        styles.gridColumnStart = position[0] + 1
        styles.gridRowStart = position[1] + 1
    }
    if (width) styles.gridColumnEnd = `span ${width}`
    if (height) styles.gridRowStart = `span ${height}`
    if (type === ButtonType.Numeric) {
        styles.backgroundColor = "#e48900"
        styles.color = "#000"
    }

    return <button
        className={`${type === ButtonType.Numeric && style.numericBtn} ${style.button}`}
        style={styles}>
        {label}
    </button>
}
