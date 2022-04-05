<script>
  import { createEventDispatcher } from 'svelte';
  import { time } from '../store';

  const dispatch = createEventDispatcher();

  $: if ($time > 25.6) {
    dispatch('ended');
  }
</script>

<video src="./sources/natsecintro.mp4" autoplay muted />
