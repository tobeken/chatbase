import { TextField } from "@material-ui/core";
import React, { useState } from "react";

import { pushMessage } from "../firebase";

const MessageField = ({ text, setText, name }) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (isComposed) return;
        const text = e.target.value;
        if (text === "") return;
        if (e.key === "Enter") {
          pushMessage({ name: "ken", text });
          setText("");
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
      value={text}
    />
  );
};

export default MessageField;