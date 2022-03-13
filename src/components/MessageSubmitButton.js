import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ text, setText, name }) => {
  return (
    <div>
      <IconButton
        disabled={text === ""}
        onClick={() => {
          pushMessage({ name: "Ken", text });
          setText("");
        }}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default MessageSubmitButton;
