# Tutorial: Build a Video with Codex and Remotion

This tutorial shows how a developer can use the repo as a repeatable workflow.

## Step 1: Write a Brief

Start with a short brief like this:

```text
Create a 45-second beginner-friendly video explaining what a terminal is.
Audience: people who use AI tools but have never coded before.
Tone: clear, warm, practical.
Goal: make the terminal feel less intimidating.
```

## Step 2: Ask the Model for a Video Plan

Ask for structured output instead of a loose script:

```text
Turn this brief into a video plan with 5 scenes.
For each scene include:
- title
- narration
- visual prompt
- duration in seconds
- accent color
Keep the language simple and beginner-friendly.
```

## Step 3: Give Codex an Implementation Task

Use Codex to apply the plan to the codebase:

```text
Update src/videoPlan.ts with this video plan.
Then adjust src/Video.tsx if needed so the composition still looks balanced.
Run the typecheck and tell me what changed.
```

## Step 4: Preview the Video

```bash
npm run preview
```

Look for:

- text that overflows
- scenes that feel too long or too short
- narration that is too abstract
- visuals that do not match the teaching goal

## Step 5: Iterate

Good revision prompts are specific:

```text
Scene 2 is still too abstract. Make the terminal analogy more concrete.
Keep the scene duration the same and update only the narration and visual prompt.
```

```text
The video feels too text-heavy. Make the visual direction cards shorter and add stronger scene titles.
```

## Step 6: Render

```bash
npm run render
```

The rendered file will be written to `out/ai-video-builder-demo.mp4`.

## What Developers Learn

This project teaches a full loop:

- natural language brief
- structured model output
- code changes through Codex
- preview
- revision
- render

That loop is the core of many AI software workflows.

