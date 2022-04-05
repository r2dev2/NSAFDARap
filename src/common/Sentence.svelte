<script>
  import { readable } from 'svelte/store';

  export let sentence = '';
  export let entryTimings = [];
  export let time = readable(0);

  $: words = sentence.split(' ');
</script>

<div class="sentence">
  {#each words as word, i}
    <div class="word" class:hidden={$time + .2 < entryTimings[i]}>
      {word}
    </div>
  {/each}
</div>

<style>
  .hidden {
    transform: translateX(100vw) scale(0);
  }

  .sentence {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    transform: translateX(-50%);
  }

  .word {
    font-size: 4rem;
    font-weight: 1000;
    -webkit-text-stroke: 2px white;
    color: red;
    transition: transform 200ms ease-out;
  }
</style>
