import Options from "./Options.svelte";

const app = new Options({
  target: document.body,
  props: {
    options: ["Svelte", "React", "Vue", "Angular"]
  }
});

export default app;
