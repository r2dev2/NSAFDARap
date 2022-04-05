<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 50.6) {
    dispatch('ended');
  }
</script>

<video src="./sources/itsnakasone.mp4" muted autoplay />
