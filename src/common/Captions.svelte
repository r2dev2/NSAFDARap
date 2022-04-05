<script>
  import { time } from '../store';
  import Sentence from './Sentence.svelte';

  const entryTimings = [
    [12.5],
    [13, 13.3, 13.6, 14.2, 14.5],
    [15, 15.3, 15.6, 16.4, 16.5, 16.9, 17.5],
    [18, 18.1, 20, 20.2, 20.4, 20.8, 21.2, 21.6],
    [22, 22.2, 22.4, 22.6, 22.8],
    [23, 23.2, 23.4, 23.6, 23.8],
    [24, 24.2, 24.4, 24.6, 24.8, 25, 25.6]
  ];

  const lines = [
    '',
    'The National Security Agency',
    'Created under Harry P. Truman\'s presidency',
    'In 1952, during World War I and II',
    'But what\'d they do?',
    'Did they come through?',
    'Let\'s check in with the crew',
  ];

  const getIdxToShow = time => entryTimings.findIndex(timings => {
    return time < timings[timings.length - 1];
  });

  $: i = getIdxToShow($time);
</script>

{#if i != -1}
  <Sentence sentence={lines[i]} entryTimings={entryTimings[i]} {time} />
{/if}
