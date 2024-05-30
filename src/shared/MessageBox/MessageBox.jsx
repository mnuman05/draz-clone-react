import React from "react";
import MessageImg from "../../images/message.png";
import "./message-box.css";
import { Image } from "react-bootstrap";

const MessageBox = () => {
  return (
    <div tabindex="0" class="message-box">
      <Image src={MessageImg} />
      <span>Messges</span>
    </div>
  );
};

export default MessageBox;
