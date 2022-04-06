<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 159.5) {
    dispatch('ended');
  }
</script>

<video src="./sources/fdaintro.mp4" autoplay muted />
