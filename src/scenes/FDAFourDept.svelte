<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 204.3) {
    // dispatch('ended');
  }
</script>

<video src="./sources/fdafourdept.mp4" autoplay muted />

<img
  class="califf"
  class:show={186.1 < $time && $time < 190}
  src="./sources/califf.jpg"
/>

{#if 187.7 < $time && $time < 190}
  <img class="califf-stache" src="./sources/califfstache.png" />
{/if}

<style>
  .califf, .califf-stache {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 40%;
  }

  .califf {
    transition: 900ms ease-out;
    transform: scale(0);
  }

  .califf.show {
    transform: scale(1);
  }

  .califf-stache {
    transform-origin: 376px 224px;
    animation: pulse 1.5s ease-out alternate infinite;
  }

  @keyframes pulse {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(5);
    }
  }
</style>
