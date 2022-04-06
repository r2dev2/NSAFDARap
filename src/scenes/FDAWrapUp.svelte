<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 215) {
    dispatch('ended');
  }
</script>

<video src="./sources/fdawrapup.mp4" autoplay muted />
