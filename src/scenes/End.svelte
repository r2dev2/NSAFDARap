<script>
  import { onMount } from 'svelte';
  import { rapAudio } from '../store';

  onMount(() => {
    rapAudio.pause();
  });
</script>

<div class="container">
  <p>The End</p>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  p {
    font-size: 20rem;
  }
</style>
