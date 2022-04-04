import Beginning from './Beginning.svelte';
import Test from './Test.svelte';
import End from './End.svelte';

/** @type {{ name: string, component: typeof Beginning}} */
export const scenes = [
  // { name: 'beginning', component: Beginning },
  { name: 'test', component: Test },
  { name: 'end', component: End }
];
