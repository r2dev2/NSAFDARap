<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  $: if ($time > 84.6) {
    dispatch('ended');
  }
</script>

<video src="./sources/interceptingconversations.mp4" autoplay muted />
