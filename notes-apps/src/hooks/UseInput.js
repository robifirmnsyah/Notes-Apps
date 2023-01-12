import { useState } from "react";

function UseInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChangeHandler];
}

export default UseInput;