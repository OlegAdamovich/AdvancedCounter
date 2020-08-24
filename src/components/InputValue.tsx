import React, {ChangeEvent} from "react";

type PropsType = {
    value: number
    onChangeHandler: (value: number) => void
    error: string
    min: number
    max: number
}

export const InputValue = (props: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeHandler(+e.currentTarget.value);
    }

    return <input className={props.error} type="number" value={props.value} onChange={onChangeHandler} min={props.min} max={props.max}/>
}