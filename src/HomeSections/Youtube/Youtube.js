import React from "react";
import { All, Tube } from "./YoutubeStyle";

const YouTube = ()  => {

  return (
    <All>
        <Tube
            src="https://www.youtube.com/embed/N0dCyu_xf3A"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        >
        </Tube>
    </All>
  );
}

export default YouTube;