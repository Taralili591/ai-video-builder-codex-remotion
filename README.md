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

## What You Will Build

A code-rendered technical video. The sample project explains a beginner developer concept, but the workflow works especially well for AI and programming education:

- "What is a terminal?"
- "Why CUDA made GPUs useful for AI"
- "What is an API?"
- "How GitHub, Git, and SSH work together"
- "How Codex edits a project"

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

## Repo Contents

```text
.
├── docs/
│   ├── tutorial.md
│   ├── video-standard.md
│   ├── prompt-playbook.md
│   └── technical-design.md
├── examples/
│   ├── gpu-cuda-scene.md
│   ├── sample-brief.md
│   ├── generated-video-plan.json
│   └── codex-task.md
├── src/
│   ├── Root.tsx
│   ├── Video.tsx
│   ├── videoPlan.ts
│   └── style.ts
└── package.json
```

## Why This Is Useful

This workflow is powerful because the final video is code:

- You can preview it in a browser.
- You can edit every scene.
- You can reuse a visual standard.
- You can version it on GitHub.
- You can ask Codex to improve the code, not just rewrite text.

