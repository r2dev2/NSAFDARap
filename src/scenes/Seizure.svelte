<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  let playbackRate = 2;

  const dispatch = createEventDispatcher();

  $: if ($time > 207) {
    dispatch('ended');
  }
</script>

<video src="./sources/seizures.mp4" autoplay muted bind:playbackRate />
