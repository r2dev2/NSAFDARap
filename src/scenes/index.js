import Beginning from './Beginning.svelte';
import Intro from './Intro.svelte';
import NatSecIntro from './NatSecIntro.svelte';
import CipherDecryption from './CipherDecryption.svelte';
import NatSecNakasoneHype from './NatSecNakasoneHype.svelte';
import ItsNakasone from './ItsNakasone.svelte';
import Verse1End from './Verse1End.svelte';
import InterceptingConversations from './InterceptingConversations.svelte';
import HowNSAPlay from './HowNSAPlay.svelte';
import GiveToCIA from './GiveToCIA.svelte';
import HandleTheMess from './HandleTheMess.svelte';
import FindingCommunism from './FindingCommunism.svelte';
import UseAlgo from './UseAlgo.svelte';
import InfectMalware from './InfectMalware.svelte';
import ItsNakasone2 from './ItsNakasone2.svelte';
import FDAIntro from './FDAIntro.svelte';
import HistoryVein from './HistoryVein.svelte';
import FDAGoal from './FDAGoal.svelte';
import Whiff from './Whiff.svelte';
import FDAFourDept from './FDAFourDept.svelte';
import Seizure from './Seizure.svelte';
import FDAWrapUp from './FDAWrapUp.svelte';
import Ending from './Ending.svelte';
import End from './End.svelte';

/** @type {{ name: string, component: typeof Beginning}} */
export const scenes = [
  // { name: 'beginning', component: Beginning },
  { name: 'intro', component: Intro },
  { name: 'natsec-intro', component: NatSecIntro },
  { name: 'cipher-decryption', component: CipherDecryption },
  { name: 'natsec-nakasone-hype', component: NatSecNakasoneHype },
  { name: 'itsnakasone', component: ItsNakasone },
  { name: 'verse1-end', component: Verse1End },
  { name: 'intercepting-convos', component: InterceptingConversations },
  { name: 'how-nsa-play', component: HowNSAPlay },
  { name: 'give-to-cia', component: GiveToCIA },
  { name: 'handle-the-mess', component: HandleTheMess },
  { name: 'finding-communism', component: FindingCommunism },
  { name: 'use-algo', component: UseAlgo },
  { name: 'infect-with-malware', component: InfectMalware },
  { name: 'itsnakasone-2', component: ItsNakasone2 },
  { name: 'fda-intro', component: FDAIntro },
  { name: 'history-vein', component: HistoryVein },
  { name: 'fda-goal', component: FDAGoal },
  { name: 'whiff', component: Whiff },
  { name: 'fda-four-dept', component: FDAFourDept },
  { name: 'fda-seizures', component: Seizure },
  { name: 'fda-wrapup', component: FDAWrapUp },
  { name: 'ending', component: Ending },
  { name: 'end', component: End }
];
