<script>
  import { createEventDispatcher, onMount } from 'svelte';

  import { startFrom, time, rapAudio } from '../store';

  const dispatch = createEventDispatcher();

  onMount(() => {
    rapAudio.play();
    rapAudio.currentTime = startFrom;
  });

  $: showEyes = $time > 9.6;
  $: showLasers = $time > 10.5;
  $: showExplosion = $time > 12;
  $: if ($time > 12.5) {
    dispatch('ended');
  }
</script>

<video src="./sources/intro.mp4" autoplay muted />

<div class="eye chris-1" class:d-none={!showEyes} />
<div class="eye chris-2" class:d-none={!showEyes} />
<div class="eye dylan-1" class:d-none={!showEyes} />
<div class="eye dylan-2" class:d-none={!showEyes} />

<div class="laser chris chris-1" class:show={showLasers} />
<div class="laser chris chris-2" class:show={showLasers} />
<div class="laser dylan dylan-1" class:show={showLasers} />
<div class="laser dylan dylan-2" class:show={showLasers} />

{#if showExplosion}
  <img class="explosion" src="./sources/explosion.gif" />
  <img class="explosion dylan" src="./sources/explosion.gif" />
{/if}

<style>
  .explosion {
    position: absolute;
    top: 15rem;
    left: 0;
    z-index: 30;
    height: 100vh;
  }

  .explosion.dylan {
    left: unset;
    right: 0;
  }

  .laser.chris {
    --laser-direction: 30deg;
  }

  .laser.dylan {
    --laser-direction: -40deg;
  }

  .laser {
    --laser-amount: 0;
    --laser-color: red;
    --width: 0.25rem;
    position: absolute;
    width: var(--width);
    height: 100vw;
    top: var(--top);
    left: calc(var(--left) - 0.5 * var(--width));
    background-color: var(--laser-color);
    transform-origin: top center;
    transform: rotate(var(--laser-direction)) scaleY(var(--laser-amount));
    transition: 300ms linear;
  }

  .laser.show {
    --laser-amount: 1;
  }

  .chris-1 {
    --top: calc(0.8 * 435px);
    --left: calc(0.8 * 695px);
  }

  .chris-2 {
    --top: calc(0.8 * 427px);
    --left: calc(0.8 * 770px);
  }

  .dylan-1 {
    --top: calc(0.8 * 618px);
    --left: calc(0.8 * 1090px);
  }

  .dylan-2 {
    --top: calc(0.8 * 610px);
    --left: calc(0.8 * 1160px);
  }

  .eye {
    --size: 2rem;
    --eye-color: red;
    position: absolute;
    z-index: 20;
    top: var(--top, 0);
    left: var(--left, 0);
    border-radius: 50%;
    height: var(--size);
    width: var(--size);
    background-color: var(--eye-color);
    transform: translate(-50%, -50%);
  }
</style>
