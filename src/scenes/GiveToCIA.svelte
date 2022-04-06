<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  let playbackRate = 8/3;

  const dispatch = createEventDispatcher();

  $: if ($time > 106.8) {
    dispatch('ended');
  }
</script>

<video src="./sources/givetocia.mp4" autoplay muted bind:playbackRate />
