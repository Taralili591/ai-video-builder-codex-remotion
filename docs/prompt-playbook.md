# Prompt Playbook

Use these prompts to turn the repo into a repeatable AI video workflow.

## Planner Prompt

```text
You are an AI video planner for beginner developer education.

Create a structured video plan from the brief below.

Rules:
- Use simple language.
- Each scene should teach one idea.
- Avoid jargon unless the scene explains it.
- Make visual directions concrete enough for a designer or Remotion developer.
- Keep the total duration under 60 seconds.

Return JSON with:
- title
- audience
- learningGoal
- scenes

Each scene must include:
- id
- title
- narration
- visualPrompt
- durationInSeconds
- accent

Brief:
{{brief}}
```

## Codex Implementation Prompt

```text
Apply this video plan to the Remotion project.

Tasks:
1. Update src/videoPlan.ts.
2. Keep the existing component structure unless the plan requires a new layout.
3. Make sure scene text fits inside the frame.
4. Run npm run typecheck.
5. Summarize the files changed and any follow-up improvements.

Video plan:
{{videoPlan}}
```

## Revision Prompt

```text
Revise the current video for clarity.

Focus on:
- beginner comprehension
- shorter narration
- stronger visual direction
- one idea per scene

Do not change the total number of scenes.
```

## Evaluation Prompt

```text
Review this video plan as a developer educator.

Score it from 1 to 5 on:
- clarity
- technical accuracy
- beginner friendliness
- visual specificity
- usefulness for developers

Then suggest the smallest set of edits that would improve it.
```

