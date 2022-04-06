<script>
  import { time } from '../store';
  import Sentence from './Sentence.svelte';

  const genGeneric = (start, amount, end) => Array(amount)
    .fill(start)
    .map((s, i) => s + i / 10)
    .concat([end]);

  const entryTimings = [
    [12.5],
    [13, 13.3, 13.6, 14.2, 14.5],
    [15, 15.3, 15.6, 16.4, 16.5, 16.9, 17.5],
    [18, 18.1, 20, 20.2, 20.4, 20.8, 21.2, 21.6],
    [22, 22.2, 22.4, 22.6, 22.8],
    [23, 23.2, 23.4, 23.6, 23.8],
    [24, 24.2, 24.4, 24.6, 24.8, 25, 25.6],
    [25.8, 26.2, 26.5, 26.7, 27.1, 27.3],
    [27.4, 27.5, 30],
    [30, 30.1, 30.2, 30.3, 30.7, 31.2, 31.5, 31.6, 32],
    [32, 32.2, 32.4, 32.6, 33.4],
    [33.4, 33.6, 33.8],
    [34, 34.2, 34.4, 34.6, 34.8, 35, 35.2, 35.4],
    [35.5, 35.8, 37.2],
    [37.5, 37.6, 37.7, 37.8, 39.1, 39.2, 39.3, 40],
    [40.5, 40.65, 41.5, 41.7, 41.8, 42, 44],
    [44.4, 44.6, 45, 45.3, 45.6, 45.9, 46, 47],
    [47, 47.3, 47.6, 48, 48.5, 48.7, 49.2, 49.9, 50.0, 50.6],
    [51, 51.1, 51.3, 51.4, 51.9, 52, 52.2, 52.3, 53],
    [53.4, 53.5, 53.7, 53.8, 55],
    [55.2, 55.3, 55.5, 55.6, 55.7, 55.9, 56.1, 56.7],
    [57, 57.1, 57.3, 57.7, 57.9, 58.1, 58.5, 59, 59.5, 60],
    [60, 60.3, 60.5, 61, 61.3, 61.5, 61.8],
    [62, 62.2, 62.4, 62.6, 62.8, 63, 63.2],
    [77.2, 77.3, 77.5, 78, 78.3, 78.4, 78.7, 80],
    [80, 81, 82],
    [82, 82.2, 82.4, 82.6, 82.8, 83, 84.2, 84.3, 84.5],
    [84.6, 84.7, 84.8, 84.9, 85, 85.2, 85.4],
    [85.5, 86, 86.3, 86.4, 86.8],
    [87, 87.2, 87.5, 87.6, 88, 88.2],
    [88.5, 88.6, 88.7, 88.8, 88.9, 91],
    [91.2, 91.3, 91.4, 91.5, 91.6, 92.9],
    [93, 93.1, 93.2, 93.4, 94.6],
    [94.7, 94.8, 94.9, 95.8, 95.9, 96, 96.1, 96.2, 96.3, 98],
    [98.2, 98.3, 98.4, 98.5, 98.6, 98.7, 98.8, 98.9, 101],
    [101.1, 101.2, ...genGeneric(102, 8, 105)],
  ];

  const lines = [
    '',
    'The National Security Agency',
    'Created under Harry P. Truman\'s presidency',
    'In 1952, during World War I and II',
    'But what\'d they do?',
    'Did they come through?',
    'Let\'s check in with the crew',
    'Cipher decryption. Our operation? Moderation',
    'of communication',
    'That is our mission, to protect our nation,',
    'we search through conversation,',
    'find information',
    'and bring it back to our station',
    'preventing complication',
    'who heads this agency, holding all responsibility',
    'and animosity against our greatest enemies?',
    'No phony, It\'s Mr. Paul M. Nakasone',
    'Director of the NSA, child\'s play, have no dismay',
    'The man has finesse. Chief of the CSS.',
    'can dress and brand',
    'hold his rank up in his hand.',
    'He\'s the Commander of the U.S. Cyber Command',
    'He can protect, he can plan',
    'can give us what we demand',
    'Ladies and gents, welcome to Signals Intelligence',
    'Intercepting conversations',
    'during all of the big events, with precedence',
    'starting with the big Mr. President',
    'Collecting data to protect',
    'is all that we represent',
    'moving on to information assurance',
    'don\'t fall behind the current,',
    'show us your endurance',
    'spend the day, analyze the data in the USA',
    'both these departments are found in the NSA',
    'one question, what do we do, how do we play',
  ];

  const getIdxToShow = time => entryTimings.findIndex(timings => {
    return time < timings[timings.length - 1];
  });

  $: i = getIdxToShow($time);
</script>

{#if i != -1}
  <Sentence sentence={lines[i]} entryTimings={entryTimings[i]} {time} />
{/if}
