import React from "react";
import Emoji from "./Emoji";
import EmojiDesc from "./EmojiDesc";
import EmojiTitle from "./EmojiTitle";
import emojipedia from "../emojipedia";

function Dictionary(props) {
  return (
    <div className="term">
      {props.id}
      <Emoji emojiImg={props.emoji} />
      <EmojiTitle emojititle={props.name} />
      <EmojiDesc decs={props.meaning} />
    </div>
  );
}

export default Dictionary;
