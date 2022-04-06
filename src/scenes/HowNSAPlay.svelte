<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 105) {
    dispatch('ended');
  }
</script>

<video src="./sources/hownsaplay.mp4" autoplay muted />
