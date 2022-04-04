<script>
  import { stopwatch, Sentence } from '../common';

  const time = stopwatch();
  const lines = [
    'The National Security Agency',
    // 'Created under Harry P. Truman\'s presidency'
  ];

  const entryTimings = [
    [1, 1.2, 1.8, 2.4],
    [5, 5.5, 6, 6.3, 6.5, 7]
  ];

  $: console.log('time:', $time);
</script>

{#each lines as line, i}
  <Sentence sentence={line} entryTimings={entryTimings[i]} {time} />
{/each}

<style>
  .hidden {
    transform: translateX(100vw) scale(0);
  }

  .sentence {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    transform: translateX(-50%);
  }

  .word {
    font-size: 4rem;
    transition: 200ms ease-out;
  }
</style>
