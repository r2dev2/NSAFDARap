<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 44) {
    dispatch('ended');
  }
</script>

<video src="./sources/natsecnakasonehype.mp4" autoplay muted />
