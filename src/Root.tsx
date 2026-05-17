import React from "react";
import {Composition} from "remotion";
import {AiVideoBuilderDemo} from "./Video";
import {VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH, getTotalFrames} from "./videoPlan";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="AiVideoBuilderDemo"
      component={AiVideoBuilderDemo}
      durationInFrames={getTotalFrames()}
      fps={VIDEO_FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
    />
  );
};

