import React, {useState} from "react";
import './../style.css';
import {Button} from "./Button";
import {InputValue} from "./InputValue";

export const App = () => {

    // Local State
    let [counterValue, setCounterValue] = useState(0);
    let [minCounterValue, setMinCounterValue] = useState(0);
    let [maxCounterValue, setMaxCounterValue] = useState(3);

    let [message, setMessage] = useState('enter correct values and press set');

    let [btnIncDisabled, setBtnIncDisabled] = useState(false);
    let [btnResetDisabled, setBtnResetDisabled] = useState(true);
    let [btnSetDisabled, setBtnSetDisabled] = useState(false);

    let [showSettings, setShowSettings] = useState(false);

    // Styles
    let styleForCounterValue = counterValue === maxCounterValue ? 'Error' : '';
    let styleForResetBtnEndCount = counterValue === maxCounterValue ? 'EndCount' : '';
    let styleForValueError = minCounterValue < 0 || maxCounterValue < 0 || minCounterValue >= maxCounterValue || maxCounterValue <= minCounterValue || maxCounterValue > 10 ? 'Error' : '';

    // Styles For Input
    let minInputErrorStyle = minCounterValue < 0 || minCounterValue === maxCounterValue ? 'Error' : '';
    let maxInputErrorStyle = maxCounterValue < 0 || maxCounterValue > 10 || minCounterValue === maxCounterValue ? 'Error' : '';

    // Callbacks
    const incCounterValue = () => {
        setCounterValue(counterValue = counterValue + 1);
        setBtnResetDisabled(false);
        if (counterValue === maxCounterValue) {
            setBtnIncDisabled(true);
        }
    }

    const resetCounterValue = () => {
        setCounterValue(minCounterValue);
        setBtnIncDisabled(false);
        setBtnResetDisabled(true);
    }

    const getMinCounterValue = (value: number) => {
        setMinCounterValue(value);
        if (value < 0) {
            setBtnSetDisabled(true);
            setMessage('min value can\'t be less zero');
        } else if(value === maxCounterValue) {
            setBtnSetDisabled(true);
            setMessage('min value can\'t be equal max value');
        } else if (value > maxCounterValue) {
            setBtnSetDisabled(true);
            setMessage('min value can\'t be more max value');
        } else if (maxCounterValue < 0 || maxCounterValue > 10) {
            setBtnSetDisabled(true);
        }else {
            setMessage('enter correct values and press set');
            setBtnSetDisabled(false);
        }
    }

    const getMaxCounterValue = (value: number) => {
        setMaxCounterValue(value);
        if (value < 0) {
            setBtnSetDisabled(true);
            setMessage('max value can\'t be less zero');
        } else if (value > 10) {
            setBtnSetDisabled(true);
            setMessage('max value can\'t be more 10');
        } else if (value === minCounterValue) {
            setBtnSetDisabled(true);
            setMessage('max value can\'t be equal min value');
        } else if (value < minCounterValue) {
            setBtnSetDisabled(true);
            setMessage('max value can\'t be less min value');
        } else if (minCounterValue < 0) {
            setBtnSetDisabled(true);
        } else {
            setMessage('enter correct values and press set');
            setBtnSetDisabled(false);
        }
    }

    const setCurrentCounterValue = () => {
        setShowSettings(!showSettings);
        setCounterValue(minCounterValue);
    }

    // Min & Max Values For Inputs
    let minValuesForMinInput = -1;

    return (
        <div className='App'>
            {showSettings ?
                <div className='SettingsBlock'>
                    <div className={`MessageBlock ${styleForValueError}`}>
                        <div>{message}</div>
                    </div>

                    <div className='InputValuesBlock'>
                        <div className='InputValue'>
                            max value: <InputValue value={maxCounterValue} onChangeHandler={getMaxCounterValue} error={maxInputErrorStyle} min={minCounterValue} max={11}/>
                        </div>

                        <div className='InputValue'>
                            min value: <InputValue value={minCounterValue} onChangeHandler={getMinCounterValue} error={minInputErrorStyle} min={minValuesForMinInput} max={maxCounterValue}/>
                        </div>
                    </div>

                    <div className='ButtonsBlock BtnCenter'>
                        <Button title='set' onClickHandler={setCurrentCounterValue} disabled={btnSetDisabled}/>
                    </div>
                </div>
                :
                <div className='CounterBlock'>
                    <div className='MessageBlock'>
                        <div>{counterValue} - {maxCounterValue}</div>
                    </div>

                    <div className={`Display ${styleForCounterValue}`}>
                        <div>{counterValue}</div>
                    </div>
                    <div className='ButtonsBlock'>
                        <Button title='inc' onClickHandler={incCounterValue} disabled={btnIncDisabled}/>
                        <Button title='reset' onClickHandler={resetCounterValue} disabled={btnResetDisabled} style={styleForResetBtnEndCount}/>
                        <Button title='set' onClickHandler={setCurrentCounterValue} disabled={btnSetDisabled}/>
                    </div>
                </div>
            }
        </div>
    )
}