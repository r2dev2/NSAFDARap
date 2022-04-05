import Beginning from './Beginning.svelte';
import Intro from './Intro.svelte';
import NatSecIntro from './NatSecIntro.svelte';
import End from './End.svelte';

/** @type {{ name: string, component: typeof Beginning}} */
export const scenes = [
  // { name: 'beginning', component: Beginning },
  { name: 'intro', component: Intro },
  { name: 'natsec-intro', component: NatSecIntro },
  { name: 'end', component: End }
];
