import Beginning from './Beginning.svelte';
import Intro from './Intro.svelte';
import NatSecIntro from './NatSecIntro.svelte';
import CipherDecryption from './CipherDecryption.svelte';
import NatSecNakasoneHype from './NatSecNakasoneHype.svelte';
import ItsNakasone from './ItsNakasone.svelte';
import End from './End.svelte';

/** @type {{ name: string, component: typeof Beginning}} */
export const scenes = [
  // { name: 'beginning', component: Beginning },
  { name: 'intro', component: Intro },
  { name: 'natsec-intro', component: NatSecIntro },
  { name: 'cipher-decryption', component: CipherDecryption },
  { name: 'natsec-nakasone-hype', component: NatSecNakasoneHype },
  { name: 'itsnakasone', component: ItsNakasone },
  { name: 'end', component: End }
];