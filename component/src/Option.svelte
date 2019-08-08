<script>
  import { createEventDispatcher } from "svelte";

  export let text;
  export let selected = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  .option {
    font-size: 4rem;
    padding: 0.5rem;
    border: 3px solid transparent;
    border-radius: 1rem;
    cursor: pointer;
  }
  .selected {
    border-color: red;
  }
</style>

<div on:click={() => dispatch('select')} class:selected class="option">
  {text}
</div>
