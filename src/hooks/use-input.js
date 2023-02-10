import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: action.value, isTouched: true };
  }
  if (action.type === "REST") {
    return { value: "", isTouched: false };
  }
  return initialInputState;
};

const UseInput = (validateValue) => {
  const [inputState, inputStateDispatcher] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    inputStateDispatcher({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    inputStateDispatcher({ type: "BLUR" });
  };

  const reset = (props) => {
    inputStateDispatcher({ type: "REST" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default UseInput;
