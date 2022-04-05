<script>
  import { scenes } from './scenes';
  import { Captions } from './common';

  let sceneIndex = 0;

  $: scene = scenes[sceneIndex];
  $: console.log('[PLAYBACK] scene', scene.name);
</script>

<svelte:head>
  <title>Moo Security, Moo Agency - Lil D, Chris C</title>
</svelte:head>

<main>
  <svelte:component this={scene.component} on:ended={() => sceneIndex++} />
  <Captions />
</main>

<style>
  :global(body) {
    padding: 0;
    overflow: hidden;
  }

  :global(video:not(.custom-size)) {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>
