<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 204.3) {
    dispatch('ended');
  }
</script>

<video src="./sources/fdafourdept.mp4" autoplay muted />
