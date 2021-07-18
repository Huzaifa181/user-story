import React from 'react';
import PropTypes from 'prop-types';
import './TimerButton.css'
type Props={
    buttonValue:string;
    buttonAction:() => void;
}
const TimerButton:React.FC<Props> = ({ buttonAction, buttonValue }) => (
    <div className="button-container"  onClick={() => buttonAction()}>
    <p className="button-value">{buttonValue}</p>
    </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;