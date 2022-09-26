import { Framework } from "./types";
import { blue, green, yellow } from "kolorist";

export const FRAMEWORKS: Framework[] = [
  {
    name: "vue",
    display: "Vue",
    color: green,
    variants: [
      {
        name: "vue",
        display: "JavaScript",
        color: yellow,
      },
      {
        name: "vue-ts",
        display: "TypeScript",
        color: blue,
      },
    ],
  },
];

export const TEMPLATES = FRAMEWORKS.map(
  (f) => (f.variants && f.variants.map((v) => v.name)) || [f.name]
).reduce((a, b) => a.concat(b), []);

export const fileIgnore = ['package.json', '_gitignore'];