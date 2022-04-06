<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 153.5) {
    dispatch('ended');
  }
</script>

<img
  class:pulsing={$time < 141.6}
  class:rocking={$time > 141.6}
  src="./sources/nakasone.jpg"
/>

<style>
  img {
    width: 100vw;
  }

  .pulsing {
    animation: pulse 300ms ease-in-out 2;
  }

  .rocking {
    animation: rock 2s linear infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes rock {
    0% {
      transform: rotate(0deg) scale(2);
    }

    25% {
      transform: rotate(20deg) scale(2);
    }

    50% {
      transform: rotate(0deg) scale(2);
    }

    75% {
      transform: rotate(-20deg) scale(2);
    }

    100% {
      transform: rotate(0) scale(2);
    }
  }
</style>
