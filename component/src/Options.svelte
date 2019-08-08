<script>
  import { createEventDispatcher } from "svelte";
  import Option from "./Option.svelte";

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
</style>

<div class="options">
  {#each options as text (text)}
    <Option on:select={() => select(text)} selected={isSelected(text)} {text} />
  {/each}
</div>
