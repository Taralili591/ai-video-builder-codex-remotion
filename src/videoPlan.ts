export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const VIDEO_FPS = 30;

export type Scene = {
  id: string;
  title: string;
  narration: string;
  visualPrompt: string;
  durationInSeconds: number;
  accent: string;
};

export const scenes: Scene[] = [
  {
    id: "hook",
    title: "The Terminal Looks Scary",
    narration:
      "If you are new to coding, the terminal can look like a secret door with no handle.",
    visualPrompt:
      "A beginner developer looking at a blank command line, with simple labels that explain what is happening.",
    durationInSeconds: 5,
    accent: "#36C5F0"
  },
  {
    id: "definition",
    title: "It Is Just a Text Door",
    narration:
      "A terminal is a text-based way to talk to your computer. You type a command, and the computer answers.",
    visualPrompt:
      "A clean diagram showing user input, a command, the operating system, and a response.",
    durationInSeconds: 7,
    accent: "#10A37F"
  },
  {
    id: "why-it-matters",
    title: "Why Developers Use It",
    narration:
      "Developers use terminals because they are fast, repeatable, and easy to connect with tools like Git, package managers, and AI coding agents.",
    visualPrompt:
      "A workflow map connecting terminal commands to Git, npm, tests, and Codex-assisted edits.",
    durationInSeconds: 8,
    accent: "#FFB020"
  },
  {
    id: "codex-workflow",
    title: "Where Codex Fits",
    narration:
      "Codex can read your project, suggest commands, edit files, and help you understand each step instead of treating the terminal like magic.",
    visualPrompt:
      "A split screen showing a developer brief on the left and Codex editing a project on the right.",
    durationInSeconds: 8,
    accent: "#AB68FF"
  },
  {
    id: "takeaway",
    title: "The Mental Model",
    narration:
      "Do not memorize every command. Learn the pattern: describe your goal, inspect the result, and keep each step visible.",
    visualPrompt:
      "A simple checklist: goal, command, result, next step.",
    durationInSeconds: 6,
    accent: "#F65A5B"
  }
];

export const getTotalFrames = () =>
  scenes.reduce((total, scene) => total + scene.durationInSeconds * VIDEO_FPS, 0);

export const getSceneStartFrame = (sceneIndex: number) =>
  scenes
    .slice(0, sceneIndex)
    .reduce((total, scene) => total + scene.durationInSeconds * VIDEO_FPS, 0);

