<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  let playbackRate = 6/(111.2 - 107.1);
  const dispatch = createEventDispatcher();

  $: if ($time > 111.2) {
    dispatch('ended');
  }
</script>

<video src="./sources/handlethemess.mp4" autoplay muted bind:playbackRate />
