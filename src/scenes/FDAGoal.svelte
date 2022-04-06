<script>
  import { time } from '../store';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: showRoosevelt = 169 < $time && $time < 171;

  $: if ($time > 181.8) {
    dispatch('ended');
  }
</script>

<video src="./sources/fdagoal.mp4" autoplay muted />

<img class="roos" class:show={showRoosevelt} src="./sources/fdr.jpg" />
<img class="roos ted" class:show={showRoosevelt} src="./sources/tdr.jpg" />

<style>
  .roos {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 20%;
    height: 60%;
    filter: opacity(0);
  }

  .roos.show {
    filter: opacity(1);
  }

  .ted {
    transition: 1.2s linear;
  }
</style>
