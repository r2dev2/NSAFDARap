<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: if ($time > 32) {
    dispatch('ended');
  }
</script>

<video src="./sources/cipher_decryption.mp4" autoplay muted />
