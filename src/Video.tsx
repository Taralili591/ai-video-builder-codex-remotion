import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import {fullFrame, palette} from "./style";
import {getSceneStartFrame, scenes, VIDEO_FPS} from "./videoPlan";

const SceneCard: React.FC<{sceneIndex: number}> = ({sceneIndex}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const scene = scenes[sceneIndex];
  const localFrame = frame - getSceneStartFrame(sceneIndex);
  const enter = spring({frame: localFrame, fps, config: {damping: 18, stiffness: 120}});
  const progress = Math.min(
    1,
    localFrame / Math.max(1, scene.durationInSeconds * VIDEO_FPS)
  );

  return (
    <AbsoluteFill
      style={{
        ...fullFrame,
        padding: 86,
        justifyContent: "space-between",
        opacity: interpolate(localFrame, [0, 14], [0, 1], {
          extrapolateRight: "clamp"
        })
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${scene.accent}24, transparent 48%)`
        }}
      />
      <header style={{position: "relative", display: "flex", justifyContent: "space-between"}}>
        <div style={{fontSize: 30, color: palette.muted}}>AI Video Builder</div>
        <div style={{fontSize: 30, color: palette.muted}}>
          {sceneIndex + 1}/{scenes.length}
        </div>
      </header>

      <main
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 54,
          alignItems: "center",
          transform: `translateY(${interpolate(enter, [0, 1], [36, 0])}px)`
        }}
      >
        <section>
          <div
            style={{
              width: 96,
              height: 8,
              backgroundColor: scene.accent,
              marginBottom: 34
            }}
          />
          <h1 style={{fontSize: 88, lineHeight: 1.02, margin: 0, maxWidth: 900}}>
            {scene.title}
          </h1>
          <p
            style={{
              fontSize: 42,
              lineHeight: 1.28,
              color: palette.muted,
              marginTop: 34,
              maxWidth: 900
            }}
          >
            {scene.narration}
          </p>
        </section>

        <aside
          style={{
            backgroundColor: palette.panel,
            border: `2px solid ${palette.line}`,
            borderRadius: 8,
            padding: 42,
            boxShadow: "0 24px 80px rgba(16, 20, 24, 0.12)"
          }}
        >
          <div style={{fontSize: 26, color: palette.muted, marginBottom: 20}}>
            Visual direction
          </div>
          <p style={{fontSize: 36, lineHeight: 1.32, margin: 0}}>{scene.visualPrompt}</p>
        </aside>
      </main>

      <footer style={{position: "relative"}}>
        <div style={{height: 6, backgroundColor: "rgba(16, 20, 24, 0.12)"}}>
          <div
            style={{
              height: "100%",
              width: `${progress * 100}%`,
              backgroundColor: scene.accent
            }}
          />
        </div>
      </footer>
    </AbsoluteFill>
  );
};

export const AiVideoBuilderDemo: React.FC = () => {
  return (
    <AbsoluteFill>
      {scenes.map((scene, index) => (
        <Sequence
          key={scene.id}
          from={getSceneStartFrame(index)}
          durationInFrames={scene.durationInSeconds * VIDEO_FPS}
        >
          <SceneCard sceneIndex={index} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

