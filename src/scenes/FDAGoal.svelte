<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 181.8) {
    dispatch('ended');
  }
</script>

<video src="./sources/fdagoal.mp4" autoplay muted />
