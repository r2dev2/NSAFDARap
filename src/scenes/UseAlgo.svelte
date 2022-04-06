<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 131) {
    dispatch('ended');
  }
</script>

<video src="./sources/usealgo.mp4" autoplay muted />
