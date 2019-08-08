<script>
  export let options = [];
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
</style>

<div class="options">
  {#each options as text (text)}
    <div class="option">{text}</div>
  {/each}
</div>
