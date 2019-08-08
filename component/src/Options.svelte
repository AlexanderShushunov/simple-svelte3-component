<script>
  import { createEventDispatcher } from "svelte";

  export let options = [];
  let selectedOption = undefined;
  $: isSelected = option => option === selectedOption;

  const dispatch = createEventDispatcher();
  function select(option) {
    selectedOption = option;
    dispatch("select", option);
  }
</script>

<style>
  .options {
    display: flex;
    flex-direction: column;
  }
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

<div class="options">
  {#each options as text (text)}
    <div
      on:click={event => select(text)}
      class:selected={isSelected(text)}
      class="option">
      {text}
    </div>
  {/each}
</div>
