import React from "react";

type PropsType = {
    title: string
    onClickHandler: () => void
    disabled: boolean
    style?: string
}

export const Button = (props: PropsType) => {

    return (
        <button className={`Button ${props.style}`} onClick={props.onClickHandler} disabled={props.disabled}>{props.title}</button>
    )

}