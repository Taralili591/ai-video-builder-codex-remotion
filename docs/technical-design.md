# Technical Design

## Product Goal

AI Video Builder with Codex + Remotion helps a builder move from a plain-language video idea to an editable, code-rendered video. The system is intentionally designed to teach the workflow as much as it produces output.

The first version is documentation-first and demo-first. It does not hide the generated structure behind a polished interface. Instead, it exposes the video plan, the React composition, and the Codex task so developers can understand the moving parts.

## Core User Journey

1. The user writes a short creative brief.
2. A model turns the brief into a structured video plan.
3. Codex uses the video plan to update the Remotion project.
4. Remotion previews or renders the video.
5. The user edits the plan or asks Codex to revise the composition.

## System Components

### Creative Brief

The brief captures the user's intent:

- audience
- topic
- length
- tone
- teaching goal
- visual style
- call to action

### Video Plan

The video plan is the contract between language generation and video rendering. It should be structured enough for code and readable enough for a human editor.

Recommended fields:

- `title`
- `audience`
- `learningGoal`
- `scenes`
- `narration`
- `visualPrompt`
- `durationInSeconds`
- `assets`
- `checks`

### Codex Task

The Codex task translates the plan into implementation work:

- update scene data
- create or refine React components
- adjust timing
- add captions
- run type checks
- render a preview
- explain what changed

### Remotion Composition

Remotion turns React components into video. This makes the final artifact reproducible and version-controlled.

In this demo, the composition reads `src/videoPlan.ts`, maps scenes into `Sequence` components, and renders text plus visual direction cards. Future versions can add generated images, waveform animations, captions, and voiceover.

## Why Remotion

Remotion is useful for AI-assisted video creation because it treats video as code. That gives the model and the developer a shared surface:

- scenes are data
- visuals are components
- timing is explicit
- changes are reviewable in git
- output can be regenerated

## What Makes This a Developer Experience Demo

This project is not only a video tool. It is a demonstration of how AI coding agents can work with structured intent.

The developer-facing lessons are:

- Use models to turn vague ideas into structured plans.
- Keep the plan editable and inspectable.
- Let Codex operate on files, not just isolated snippets.
- Use familiar engineering loops: edit, preview, test, render.
- Teach the workflow so other developers can reproduce it.

## Future Architecture

```text
User Brief
   ↓
OpenAI model: script + scene planner
   ↓
Structured video plan
   ↓
Codex: code edits + Remotion implementation
   ↓
Preview + render
   ↓
Human feedback
   ↓
Revised plan and composition
```

## Safety and Quality Checks

The workflow should include checks before rendering:

- Is the explanation accurate for beginners?
- Does each scene have one clear idea?
- Is the narration short enough for the duration?
- Are visual instructions concrete?
- Are claims grounded or clearly framed as examples?
- Does the final code typecheck?

