# Prompt Playbook

These are copy-paste prompts for making videos with Codex CLI and Remotion.

## Create a New Video Project

```text
Create a new Remotion project folder named {{projectName}}.
Use it to make a technical explainer video about: {{topic}}.
Install dependencies, add npm scripts for preview, render, and typecheck, then run the first typecheck.
Keep the project clean and easy to publish on GitHub.
```

## Create the Video Standard

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

## Turn a Mental Image into a Scene

```text
Make a Remotion scene for this sentence:
"{{sentence}}"

Visual description:
{{describe the picture in your head}}

Use the video standard we already created.
Keep it simple and readable.
```

## GPU / CUDA Example

```text
Make a scene for this sentence:
"CUDA opened a programming door for the GPU."

Visual description:
On the left, show a simple GPU chip icon.
A cable comes out from the chip.
Next to the cable, show many 0s and 1s to represent binary computation and programming.
Make it simple, not too complex.
Use the video standard we already created.
```

## Simplify a Scene

```text
This scene is too complicated.
Simplify the shapes, reduce the number of elements, and make the main idea obvious in three seconds.
Keep the same video standard.
```

## Revise the Composition

```text
Revise the current Remotion composition.

Focus on:
- clearer layout
- fewer elements
- stronger visual metaphor
- readable text
- calm motion

Run npm run typecheck after editing.
```

## Open Preview

```text
Start the Remotion preview server and open the preview in the browser.
```

