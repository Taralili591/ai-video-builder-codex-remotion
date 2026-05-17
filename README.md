# AI Video Builder with Codex + Remotion

A developer-experience sample project that shows how Codex and Remotion can turn a plain-language video idea into a structured, editable, code-rendered video.

This project is designed as a technical documentation and demo repo for AI builders who want to understand how large language models can help create software, not just text. It demonstrates a workflow where a user writes an idea, Codex helps design the video plan and edit the code, and Remotion renders the final video with React components.

## Why This Project Exists

Many new AI builders get stuck between three worlds:

- They can describe an idea in natural language.
- They can use AI chat tools to generate scripts or copy.
- But they do not know how to turn that idea into a repeatable software workflow.

This project uses video creation as the example because it is visual, practical, and easy to understand. The real lesson is broader: a model can help translate messy user intent into structured data, editable code, and a working product experience.

## What It Demonstrates

- How to decompose a video idea into a script, scenes, visual directions, and timing.
- How Codex can help turn those structured decisions into a Remotion composition.
- How a generated video can remain editable because the output is code and data, not a black-box export.
- How to design an AI workflow that is understandable to beginner developers.

## Demo Concept

The sample video explains a beginner developer concept: "What is a terminal?"

The repo includes:

- A Remotion composition in `src/`.
- A structured scene plan in `src/videoPlan.ts`.
- Example AI planning artifacts in `examples/`.
- A technical design document in `docs/technical-design.md`.
- A tutorial for using Codex to extend the project in `docs/tutorial.md`.

## Quick Start

```bash
npm install
npm run preview
```

Then open the Remotion preview URL shown in your terminal.

To render the sample video:

```bash
npm run render
```

## Project Structure

```text
.
├── docs/
│   ├── technical-design.md
│   ├── tutorial.md
│   └── prompt-playbook.md
├── examples/
│   ├── sample-brief.md
│   ├── generated-video-plan.json
│   └── codex-task.md
├── src/
│   ├── Root.tsx
│   ├── Video.tsx
│   ├── videoPlan.ts
│   └── style.ts
├── package.json
└── README.md
```

## Intended Audience

- Beginner developers learning how AI coding agents fit into a software workflow.
- Content creators who want to build repeatable video systems.
- Developer advocates creating demos for AI products.
- Teams exploring how OpenAI models and Codex-style workflows can convert ideas into software.

## Next Milestones

- Add a CLI that converts a plain-language brief into `videoPlan.ts`.
- Add model-generated narration and captions.
- Add branded visual templates.
- Add a browser UI for editing scenes before rendering.
- Add evaluation checks for script clarity, timing, and visual consistency.

