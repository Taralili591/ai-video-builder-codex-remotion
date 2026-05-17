# AI Video Builder with Codex + Remotion

Use Codex CLI and Remotion to make technical explainer videos from natural-language visual descriptions.

This repo is a practical tutorial, not a big framework. The idea is simple:

1. Install Codex CLI.
2. Ask Codex to install Remotion.
3. Ask Codex to create a video project folder.
4. Define the video style once.
5. Describe the picture in your head.
6. Let Codex turn the description into editable Remotion code.
7. Preview in the browser and keep revising.

## Why This Is Useful

This workflow helps you quickly create animated explanations for complex ideas.

Traditionally, if you want to explain a concept like "what is a GPU" with motion graphics, you may need to spend a long time in After Effects: drawing diagrams, arranging layers, animating paths, adjusting timing, and then restyling everything to match your brand or visual system. Even a simple polished explainer can take a full day.

With Codex + Remotion, you can describe the visual idea in plain language, reuse a video style standard, preview the result in the browser, and often get a usable first version in under 15 minutes.

This is especially useful for abstract technical topics that are hard to explain with talking-head video alone:

- "Why CUDA made GPUs useful for AI"
- "What is a GPU?"
- "What is the Transformer architecture?"
- "What is deep learning?"
- "What is backpropagation?"
- "How do Git, GitHub, and SSH work together?"

The useful part is not only speed. It is repeatability:

- You can define brand colors, typography, card style, background style, and motion rules once.
- You can reuse that visual system across future videos.
- You can edit the animation as code instead of manually rebuilding layers.
- You can ask Codex to adjust the layout, timing, labels, and diagrams.
- You can render the base animation, then finish the pacing, voiceover, subtitles, and music in Final Cut Pro or CapCut/Jianying.

## What You Will Build

A code-rendered technical video. The sample project explains a beginner developer concept, but the workflow works especially well for AI and programming education.

## Prerequisites

- Node.js 20+
- npm
- Git
- Codex CLI

Install Codex CLI:

```bash
npm install -g @openai/codex@latest
codex
```

Official Codex repository: <https://github.com/openai/codex>

## Fast Tutorial

### 1. Start Codex CLI

```bash
codex
```

### 2. Ask Codex to create the project

Copy this into Codex:

```text
Create a new Remotion project folder named gpu-ai-video.
Use it to make a technical explainer video about: Why CUDA made GPUs useful for AI.
Install the dependencies, add npm scripts for preview and render, and run the first typecheck.
```

### 3. Ask Codex to open Remotion in the browser

```text
Start the Remotion preview server and open it in the browser.
```

### 4. Define the video standard once

Before making scenes, give Codex a reusable style standard:

```text
Before making the video, create a video standard file.

Use this standard for every scene:
- Theme colors: black text, warm off-white background, OpenAI green accent, blue secondary accent.
- Font: clean modern sans-serif.
- Card style: floating cards with subtle gradient, light shadow, 8px radius.
- Overall style: clean GitHub-style technical tutorial, simple diagrams, beginner-friendly.
- Background: transparent-friendly layout, no noisy decoration.
- Motion: calm transitions, no excessive animation.

After this, do not ask me to repeat these style requirements. Apply them by default to all later scenes.
```

### 5. Describe the scene in plain language

Now describe the image in your head. Do not try to write code first.

Example:

```text
Make a scene for this sentence: "CUDA opened a programming door for the GPU."

Visual description:
On the left, show a simple GPU chip icon.
A cable comes out from the chip.
Next to the cable, show many 0s and 1s to represent binary computation and programming.
Make it simple, not too complex.
Use the video standard we already created.
```

Codex should translate this into Remotion components: chip shape, cable line, binary digits, labels, timing, and animation.

### 6. Revise by describing what feels wrong

```text
This scene is too complicated.
Make the GPU icon larger, reduce the number of binary digits, and make the cable look like one clean programming path.
Keep the same style standard.
```

### 7. Render

```bash
npm run render
```

By default, the rendered video is here:

```text
out/ai-video-builder-demo.mp4
```

Open it on macOS:

```bash
open out/ai-video-builder-demo.mp4
```

### 8. Continue Editing in Final Cut Pro or CapCut/Jianying

Remotion is best for generating the coded motion graphics. Final Cut Pro or CapCut/Jianying is better for final editing: trimming, music, voiceover, sound effects, captions, and platform-specific exports.

Final Cut Pro:

1. Open Final Cut Pro.
2. Create a new Library or open an existing one.
3. Create a new Project with the same format as your Remotion export, usually 1920 x 1080 or 1080 x 1920.
4. Drag `out/ai-video-builder-demo.mp4` into the media browser or timeline.
5. Add voiceover, music, sound effects, captions, and final cuts.

CapCut/Jianying:

1. Open CapCut or Jianying.
2. Create a new project.
3. Import `out/ai-video-builder-demo.mp4`.
4. Add subtitles, voiceover, music, stickers, zooms, and platform-specific formatting.
5. Export the final version for Douyin, Xiaohongshu, Bilibili, YouTube, or TikTok.

When matching the video to a voiceover, use the editor for timing:

- Split the video when the narration moves to a new idea.
- Slow down clips when a diagram needs more time to read.
- Speed up only simple transition clips.
- Add a freeze frame / hold frame when the visual is already correct but the narration needs more time.
- Add subtitles after the timing is locked.

Example: if the CUDA cable animation finishes before the sentence "CUDA opened a programming door for the GPU" is done, freeze the final connected frame for 1-2 seconds so the visual stays on screen while the narration lands.

More details: [`docs/tutorial.md`](docs/tutorial.md)
