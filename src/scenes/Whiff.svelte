<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 184.6) {
    dispatch('ended');
  }
</script>

<video src="./sources/whiff.mp4" autoplay muted />
