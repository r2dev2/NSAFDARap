<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 163.5) {
    dispatch('ended');
  }
</script>

<video src="./sources/historyvein.mp4" autoplay muted />
