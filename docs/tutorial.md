# Tutorial: Make a Technical Video with Codex CLI and Remotion

This is the real workflow I use for AI technical explainer videos.

The goal is not to build a complicated video platform. The goal is to let Codex help you turn the picture in your head into Remotion code.

## Step 1: Install Codex CLI

```bash
npm install -g @openai/codex@latest
codex
```

If `codex` opens an interactive terminal session, you are ready.

## Step 2: Ask Codex to Install Remotion

Inside Codex, say:

```text
Install Remotion for this project.
Create a clean starter project that can preview and render a video.
Add npm scripts for preview, render, and typecheck.
Run the first typecheck after setup.
```

Codex should create or update files such as:

- `package.json`
- `src/index.ts`
- `src/Root.tsx`
- `src/Video.tsx`

## Step 3: Ask Codex to Open Remotion in the Browser

Say:

```text
Start the Remotion preview server and open the preview in the browser.
```

Then use the browser preview as your visual feedback loop. If something looks wrong, describe the problem to Codex in plain language.

## Step 4: Create a New Video Project Folder

Say:

```text
Create a new project folder named xxx.
Use it to make a video about: xxx.
Keep the folder clean and easy to publish on GitHub.
```

Example:

```text
Create a new project folder named gpu-ai-video.
Use it to make a video about: Why CUDA made GPUs useful for AI.
Keep the folder clean and easy to publish on GitHub.
```

## Step 5: Define the Video Standard First

Before making scenes, define the visual standard once. This prevents you from repeating design instructions for every scene.

Say:

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

The standard can live in `docs/video-standard.md` or in a `src/style.ts` file.

## Step 6: Describe the Picture in Your Head

Do not start by asking for code. Start with the visual idea.

Example sentence:

```text
CUDA opened a programming door for the GPU.
```

Your visual description:

```text
Make a scene for this sentence: "CUDA opened a programming door for the GPU."

Visual description:
On the left, show a simple GPU chip icon.
A cable comes out from the chip.
Next to the cable, show many 0s and 1s to represent binary computation and programming.
Make it simple, not too complex.
Use the video standard we already created.
```

Codex should convert this into Remotion code:

- GPU chip icon
- cable line
- binary digits
- simple labels
- timing
- animation

## Step 7: Revise Like a Director

You do not need to know the exact CSS or React code. Tell Codex what feels wrong.

Good revision prompts:

```text
This scene is too complicated.
Make the GPU icon larger, reduce the number of binary digits, and make the cable look like one clean programming path.
Keep the same style standard.
```

```text
The left side feels empty.
Move the GPU chip slightly toward the center and add a small CUDA label above the cable.
```

```text
The animation is too flashy.
Make the binary numbers fade in slowly instead of flying in.
```

## Step 8: Render the Video

```bash
npm run render
```

The rendered video usually appears in the `out/` folder.

## The Core Pattern

The whole workflow is:

```text
Install Codex CLI
→ ask Codex to install Remotion
→ open Remotion preview in browser
→ create a video project folder
→ define the video standard once
→ describe each scene in natural language
→ let Codex write Remotion code
→ preview
→ revise
→ render
```

That is the point of this project: Codex is not only writing code. It is helping turn a mental image into editable software.

