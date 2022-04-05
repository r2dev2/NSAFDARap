<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 80) {
    dispatch('ended');
  }
</script>

<video src="./sources/verse1end.mp4" autoplay muted />
