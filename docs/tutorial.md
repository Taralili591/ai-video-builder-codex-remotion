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

In this demo repo, the default output path is:

```text
out/ai-video-builder-demo.mp4
```

Open the rendered video on macOS:

```bash
open out/ai-video-builder-demo.mp4
```

If you changed the render command in `package.json`, check the output path there.

## Step 9: Finish the Video in Final Cut Pro or CapCut/Jianying

Remotion is where you generate the clean coded animation. You can do the final creative edit in a normal video editor.

Use Final Cut Pro or CapCut/Jianying for:

- trimming
- voiceover
- music
- sound effects
- subtitles
- speed changes
- hold frames / freeze frames
- platform-specific aspect ratios
- final export settings

### Final Cut Pro

1. Open Final Cut Pro.
2. Create a new Library or open an existing one.
3. Create a new Project.
4. Use the same resolution as the Remotion render, usually 1920 x 1080 for landscape or 1080 x 1920 for vertical.
5. Drag `out/ai-video-builder-demo.mp4` into the media browser or directly into the timeline.
6. Add narration, captions, music, sound effects, and final cuts.
7. Export the final video.

To match a voiceover:

1. Put the voiceover track under the Remotion video.
2. Cut the video at the point where the narration changes idea.
3. If a visual moves too fast, select that clip and slow it down with retiming.
4. If you need the visual to stay on screen while the narration finishes, add a hold frame / freeze frame at the end of that clip.
5. If the narration moves quickly, trim the dead space or speed up the clip slightly.
6. Watch the video once without looking at the timeline. The visual should change when the spoken idea changes.

### CapCut / Jianying

1. Open CapCut or Jianying.
2. Create a new project.
3. Import `out/ai-video-builder-demo.mp4`.
4. Add subtitles, voiceover, music, stickers, zooms, and final pacing edits.
5. Export the final version for Douyin, Xiaohongshu, Bilibili, YouTube, or TikTok.

To match a voiceover:

1. Import the voiceover and place it under the video.
2. Split the video wherever the narration moves to a new point.
3. Use speed adjustment to slow down a clip if the viewer needs more time to understand the diagram.
4. Use freeze frame / hold frame when a diagram should remain visible while you finish explaining it.
5. Use speed-up only for simple transition moments, not for important explanations.
6. Add captions after the timing feels right, otherwise every timing change will force you to fix subtitles again.

## Step 10: Use Speed and Freeze Frames to Match Voiceover

For technical videos, the animation should follow the voiceover, not the other way around.

A good editing pattern is:

```text
one spoken idea = one visual beat
```

Use speed changes when the animation is correct but the timing is wrong:

- Slow down a clip when the diagram needs more reading time.
- Speed up a clip when it is only a transition.
- Avoid speeding up scenes with important text.

Use freeze frames when the visual already reached the right state but the narration needs more time:

- Freeze on a completed diagram while explaining the key idea.
- Freeze on a code snippet while reading the important line.
- Freeze on a comparison table while summarizing the difference.

Example:

```text
Narration: "CUDA opened a programming door for the GPU."
Visual: the cable finishes connecting the GPU chip to the binary numbers too early.
Edit: freeze the final connected frame for 1-2 seconds while the sentence finishes.
```

Another example:

```text
Narration: "Before CUDA, using GPU power for general programming was much harder."
Visual: the old workflow diagram appears too quickly.
Edit: slow that clip to 70 percent, then cut to the CUDA scene on the word "CUDA."
```

Do this after rendering from Remotion:

1. Render the clean animation from Remotion.
2. Import the mp4 into Final Cut Pro or CapCut/Jianying.
3. Add the voiceover.
4. Split the video by spoken ideas.
5. Use speed changes and freeze frames to make each idea land.
6. Add captions after the timing is locked.

## Optional: Render for Vertical Video

If you want to make short-form vertical content, change the Remotion composition size to 1080 x 1920.

In this repo, that means updating `src/videoPlan.ts`:

```ts
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;
```

Then run:

```bash
npm run render
```

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
→ finish editing in Final Cut Pro or CapCut/Jianying
```

That is the point of this project: Codex is not only writing code. It is helping turn a mental image into editable software.
