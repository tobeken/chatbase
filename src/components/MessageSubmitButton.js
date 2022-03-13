import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ inputEl, text, setText, name }) => {
  return (
    <div>
      <IconButton
        disabled={text === ""}
        onClick={() => {
          pushMessage({ name: "Ken", text });
          setText("");
          inputEl.current.focus();
        }}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessageSubmitButton;
