<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 114.2) {
    dispatch('ended');
  }
</script>

<video src="./sources/findingcommunism.mp4" autoplay muted />
