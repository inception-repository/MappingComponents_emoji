import React from "react";

function Emoji(props) {
  return (
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emojiImg}
      </span>
    </dt>
  );
}

export default Emoji;
