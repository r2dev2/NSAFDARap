var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c,i;function u(e,t){return c||(c=document.createElement("a")),c.href=t,e===c.href}function a(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function d(e,t,n){e.$$.on_destroy.push(a(t,n))}function l(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function f(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function $(){return h(" ")}function y(){return h("")}function g(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t,n){e.classList[n?"add":"remove"](t)}function b(e){i=e}function k(){if(!i)throw new Error("Function called outside component initialization");return i}function x(e){k().$$.on_mount.push(e)}function N(){const e=k();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const s=function(e,t,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,!1,t),o}(t,n);o.slice().forEach((t=>{t.call(e,s)}))}}}const _=[],C=[],R=[],T=[],A=Promise.resolve();let E=!1;function I(e){R.push(e)}const S=new Set;let L=0;function M(){const e=i;do{for(;L<_.length;){const e=_[L];L++,b(e),z(e.$$)}for(b(null),_.length=0,L=0;C.length;)C.pop()();for(let e=0;e<R.length;e+=1){const t=R[e];S.has(t)||(S.add(t),t())}R.length=0}while(_.length);for(;T.length;)T.pop()();E=!1,S.clear(),b(e)}function z(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const D=new Set;let j;function P(){j={r:0,c:[],p:j}}function B(){j.r||o(j.c),j=j.p}function H(e,t){e&&e.i&&(D.delete(e),e.i(t))}function q(e,t,n,o){if(e&&e.o){if(D.has(e))return;D.add(e),j.c.push((()=>{D.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function O(e){e&&e.c()}function W(e,n,r,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:d}=e.$$;i&&i.m(n,r),c||I((()=>{const n=u.map(t).filter(s);a?a.push(...n):o(n),e.$$.on_mount=[]})),d.forEach(I)}function F(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function U(e,t){-1===e.$$.dirty[0]&&(_.push(e),E||(E=!0,A.then(M)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(t,s,r,c,u,a,d,l=[-1]){const p=i;b(t);const f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:s.target||p.$$.root};d&&d(f.root);let h=!1;if(f.ctx=r?r(t,s.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&u(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),h&&U(t,e)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!c&&c(f.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);f.fragment&&f.fragment.l(e),e.forEach(m)}else f.fragment&&f.fragment.c();s.intro&&H(t.$$.fragment),W(t,s.target,s.anchor,s.customElement),M()}b(p)}class Y{$destroy(){F(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const G=[];function J(e,t){return{subscribe:Q(e,t).subscribe}}function Q(t,n=e){let o;const s=new Set;function c(e){if(r(t,e)&&(t=e,o)){const e=!G.length;for(const e of s)e[1](),G.push(e,t);if(e){for(let e=0;e<G.length;e+=2)G[e][0](G[e+1]);G.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(r,i=e){const u=[r,i];return s.add(u),1===s.size&&(o=n(c)||e),r(t),()=>{s.delete(u),0===s.size&&(o(),o=null)}}}}function V(e,t,n){const o=e.slice();return o[5]=t[n],o[7]=n,o}function X(e){let t,n,o,s=e[5]+"";return{c(){t=f("div"),n=h(s),o=$(),w(t,"class","word svelte-144swrb"),v(t,"hidden",e[3]+.1<e[0][e[7]])},m(e,s){p(e,t,s),l(t,n),l(t,o)},p(e,o){4&o&&s!==(s=e[5]+"")&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(n,s),9&o&&v(t,"hidden",e[3]+.1<e[0][e[7]])},d(e){e&&m(t)}}}function Z(t){let n,o=t[2],s=[];for(let e=0;e<o.length;e+=1)s[e]=X(V(t,o,e));return{c(){n=f("div");for(let e=0;e<s.length;e+=1)s[e].c();w(n,"class","sentence svelte-144swrb")},m(e,t){p(e,n,t);for(let e=0;e<s.length;e+=1)s[e].m(n,null)},p(e,[t]){if(13&t){let r;for(o=e[2],r=0;r<o.length;r+=1){const c=V(e,o,r);s[r]?s[r].p(c,t):(s[r]=X(c),s[r].c(),s[r].m(n,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=o.length}},i:e,o:e,d(e){e&&m(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(s,e)}}}function ee(t,n,o){let s,r,c=e,i=()=>(c(),c=a(l,(e=>o(3,r=e))),l);t.$$.on_destroy.push((()=>c()));let{sentence:u=""}=n,{entryTimings:d=[]}=n,{time:l=J(0)}=n;return i(),t.$$set=e=>{"sentence"in e&&o(4,u=e.sentence),"entryTimings"in e&&o(0,d=e.entryTimings),"time"in e&&i(o(1,l=e.time))},t.$$.update=()=>{16&t.$$.dirty&&o(2,s=u.split(" "))},[d,l,s,r,u]}class te extends Y{constructor(e){super(),K(this,e,ee,Z,r,{sentence:4,entryTimings:0,time:1})}}function ne(e){let t,n;return t=new te({props:{sentence:e[2][e[0]],entryTimings:e[1][e[0]],time:ie}}),{c(){O(t.$$.fragment)},m(e,o){W(t,e,o),n=!0},p(e,n){const o={};1&n&&(o.sentence=e[2][e[0]]),1&n&&(o.entryTimings=e[1][e[0]]),t.$set(o)},i(e){n||(H(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function oe(e){let t,n,o=-1!=e[0]&&ne(e);return{c(){o&&o.c(),t=y()},m(e,s){o&&o.m(e,s),p(e,t,s),n=!0},p(e,[n]){-1!=e[0]?o?(o.p(e,n),1&n&&H(o,1)):(o=ne(e),o.c(),H(o,1),o.m(t.parentNode,t)):o&&(P(),q(o,1,1,(()=>{o=null})),B())},i(e){n||(H(o),n=!0)},o(e){q(o),n=!1},d(e){o&&o.d(e),e&&m(t)}}}function se(e,t,n){let o,s;d(e,ie,(e=>n(3,s=e)));const r=(e,t,n)=>Array(t).fill(e).map(((e,t)=>e+t/10)).concat([n]),c=[[12.5],[13,13.3,13.6,14.2,14.5],[15,15.3,15.6,16.4,16.5,16.9,17.5],[18,18.1,20,20.2,20.4,20.8,21.2,21.6],[22,22.2,22.4,22.6,22.8],[23,23.2,23.4,23.6,23.8],[24,24.2,24.4,24.6,24.8,25,25.6],[25.8,26.2,26.5,26.7,27.1,27.3],[27.4,27.5,30],[30,30.1,30.2,30.3,30.7,31.2,31.5,31.6,32],[32,32.2,32.4,32.6,33.4],[33.4,33.6,33.8],[34,34.2,34.4,34.6,34.8,35,35.2,35.4],[35.5,35.8,37.2],[37.5,37.6,37.7,37.8,39.1,39.2,39.3,40],[40.5,40.65,41.5,41.7,41.8,42,44],[44.4,44.6,45,45.3,45.6,45.9,46,47],[47,47.3,47.6,48,48.5,48.7,49.2,49.9,50,50.6],[51,51.1,51.3,51.4,51.9,52,52.2,52.3,53],[53.4,53.5,53.7,53.8,55],[55.2,55.3,55.5,55.6,55.7,55.9,56.1,56.7],[57,57.1,57.3,57.7,57.9,58.1,58.5,59,59.5,60],[60,60.3,60.5,61,61.3,61.5,61.8],[62,62.2,62.4,62.6,62.8,63,63.2],[77.2,77.3,77.5,78,78.3,78.4,78.7,80],[80,81,82],[82,82.2,82.4,82.6,82.8,83,84.2,84.3,84.5],[84.6,84.7,84.8,84.9,85,85.2,85.4],[85.5,86,86.3,86.4,86.8],[87,87.2,87.5,87.6,88,88.2],[88.5,88.6,88.7,88.8,88.9,91],[91.2,91.3,91.4,91.5,91.6,92.9],[93,93.1,93.2,93.4,94.6],[94.7,94.8,94.9,95.8,95.9,96,96.1,96.2,96.3,98],[98.2,98.3,98.4,98.5,98.6,98.7,98.8,98.9,101],[101.1,101.2,...r(102,8,105)],[...r(105.1,7,107)],[...r(107.1,5,108.8)],[...r(108.9,6,111.2)],[...r(111.4,5,112.2)],[...r(112.4,5,114.2)],[...r(114.4,4,116)],[...r(116.1,2,117)],[...r(117.1,4,118)],[...r(118,5,120.2)],[...r(120.4,5,121.6)],[...r(121.8,4,123.2)],[...r(123.4,5,125)],[...r(125.2,6,126.8)],[...r(127,9,129)],[...r(129.2,3,131)],[...r(131.2,5,132.3)],[...r(132.5,5,133.6)],[...r(133.8,8,137)],[...r(137.2,7,138.6)],[...r(140,2,145)],[...r(153.5,20,156)],[...r(156.2,3,157.5)],[...r(157.7,5,159.5)],[...r(159.7,7,162.3)],[...r(162.5,4,163.5)],[...r(163.7,8,166)],[...r(166.2,8,168.8)],[...r(169,7,170.5)],[...r(170.7,7,173.3)],[...r(173.5,4,174.2)],[...r(174.4,6,176.8)],[...r(177,3,178)],[...r(178.2,3,179.2)],[...r(179.4,5,181.5)],[...r(181.7,6,182.8)],[...r(183,6,184.6)],[...r(184.8,6,185.9)],[...r(186.1,4,187.5)],[...r(187.7,9,189.8)],[...r(190,3,191)],[...r(191.2,6,194)],[...r(194.1,6,197)],[...r(197.2,4,198.5)],[...r(198.7,5,200)],[...r(200.2,5,201.4)],[...r(201.6,10,204.3)],[...r(204.5,5,207)],[...r(207.2,5,208.8)],[...r(209,7,210.8)],[...r(211,8,212.8)],[...r(213,6,215)],[...r(215.2,10,219)]];return e.$$.update=()=>{8&e.$$.dirty&&n(0,o=(e=>c.findIndex((t=>e<t[t.length-1])))(s))},[o,c,["","The National Security Agency","Created under Harry P. Truman's presidency","In 1952, during World War I and II","But what'd they do?","Did they come through?","Let's check in with the crew","Cipher decryption. Our operation? Moderation","of communication","That is our mission, to protect our nation,","we search through conversation,","find information","and bring it back to our station","preventing complication","who heads this agency, holding all responsibility","and animosity against our greatest enemies?","No phony, It's Mr. Paul M. Nakasone","Director of the NSA, child's play, have no dismay","The man has finesse. Chief of the CSS.","can dress and brand","hold his rank up in his hand.","He's the Commander of the U.S. Cyber Command","He can protect, he can plan","can give us what we demand","Ladies and gents, welcome to Signals Intelligence","Intercepting conversations","during all of the big events, with precedence","starting with the big Mr. President","Collecting data to protect","is all that we represent","moving on to information assurance","don't fall behind the current,","show us your endurance","spend the day, analyze the data in the USA","both these departments are found in the NSA","one question, what do we do, how do we play","we give our information to the CIA","let them handle the mess","cuz we have stuff to assess","like finding hints of communism","published deep in the press","the difference between tourism","and terrorism","we use our algorithm","and shut down the skepticism","we keep it well kept,","cause we always intercept","the words in other countries","we can hear, cause we're adept","and when we find the people in their armchair","behind the scare","we get in their computers","and infect them with malware","but don't worry it's all for our nation","but you wonder who's behind the operation","it's Nakasone","we move on to the food and drug administration","a department influencing","many parts of our nation","coursing deep down in the history veins","it's not the same","we used to go by many different names","created to search things on a conveyor belt","during the time of President Teddy Roosevelt","our goal is to protect through regulation","of food and drugs","and the products that emit radiation","have no bugs","protect, not infect","through the products we select","make sure the smells we whiff","won't make us stiff in a sec","there's no buts or what if's","with Mr. Robert Califf","a man with a stache that seems to persist","we're moving swift","four subdepartments for all the products","medical, medicine, operation off the trucks","the powers we're granted","are used to regulate stuff","when they break our rules","we get to use our tools. It's rough.","warning letters, seizures, and prosecution","no confusion, but in conclusion","you'll pay for your intrusion and elusion","we ensure for your crimes you will pay","you'll be gone and we'll stay","you'll know not to mess with the F D A"],s]}class re extends Y{constructor(e){super(),K(this,e,se,oe,r,{})}}const ce=new Audio("./sources/rap.mp3"),ie=((e=0,t=50)=>J(0,(n=>{const o=Date.now()-1e3*e,s=setInterval((()=>{n((Date.now()-o)/1e3)}),t);return()=>clearInterval(s)})))(210);function ue(e){let t,n,o,s,r;return{c(){t=f("img"),o=$(),s=f("img"),w(t,"class","explosion svelte-xf90kh"),u(t.src,n="./sources/explosion.gif")||w(t,"src","./sources/explosion.gif"),w(s,"class","explosion dylan svelte-xf90kh"),u(s.src,r="./sources/explosion.gif")||w(s,"src","./sources/explosion.gif")},m(e,n){p(e,t,n),p(e,o,n),p(e,s,n)},d(e){e&&m(t),e&&m(o),e&&m(s)}}}function ae(t){let n,o,s,r,c,i,a,d,l,h,g,b,k,x,N,_,C,R,T,A,E=t[0]&&ue();return{c(){n=f("video"),s=$(),r=f("div"),c=$(),i=f("div"),a=$(),d=f("div"),l=$(),h=f("div"),g=$(),b=f("div"),k=$(),x=f("div"),N=$(),_=f("div"),C=$(),R=f("div"),T=$(),E&&E.c(),A=y(),u(n.src,o="./sources/intro.mp4")||w(n,"src","./sources/intro.mp4"),n.autoplay=!0,n.muted=!0,w(r,"class","eye chris-1 svelte-xf90kh"),v(r,"d-none",!t[2]),w(i,"class","eye chris-2 svelte-xf90kh"),v(i,"d-none",!t[2]),w(d,"class","eye dylan-1 svelte-xf90kh"),v(d,"d-none",!t[2]),w(h,"class","eye dylan-2 svelte-xf90kh"),v(h,"d-none",!t[2]),w(b,"class","laser chris chris-1 svelte-xf90kh"),v(b,"show",t[1]),w(x,"class","laser chris chris-2 svelte-xf90kh"),v(x,"show",t[1]),w(_,"class","laser dylan dylan-1 svelte-xf90kh"),v(_,"show",t[1]),w(R,"class","laser dylan dylan-2 svelte-xf90kh"),v(R,"show",t[1])},m(e,t){p(e,n,t),p(e,s,t),p(e,r,t),p(e,c,t),p(e,i,t),p(e,a,t),p(e,d,t),p(e,l,t),p(e,h,t),p(e,g,t),p(e,b,t),p(e,k,t),p(e,x,t),p(e,N,t),p(e,_,t),p(e,C,t),p(e,R,t),p(e,T,t),E&&E.m(e,t),p(e,A,t)},p(e,[t]){4&t&&v(r,"d-none",!e[2]),4&t&&v(i,"d-none",!e[2]),4&t&&v(d,"d-none",!e[2]),4&t&&v(h,"d-none",!e[2]),2&t&&v(b,"show",e[1]),2&t&&v(x,"show",e[1]),2&t&&v(_,"show",e[1]),2&t&&v(R,"show",e[1]),e[0]?E||(E=ue(),E.c(),E.m(A.parentNode,A)):E&&(E.d(1),E=null)},i:e,o:e,d(e){e&&m(n),e&&m(s),e&&m(r),e&&m(c),e&&m(i),e&&m(a),e&&m(d),e&&m(l),e&&m(h),e&&m(g),e&&m(b),e&&m(k),e&&m(x),e&&m(N),e&&m(_),e&&m(C),e&&m(R),e&&m(T),E&&E.d(e),e&&m(A)}}}function de(e,t,n){let o,s,r,c;d(e,ie,(e=>n(3,c=e)));const i=N();return x((()=>{ce.play(),ce.currentTime=210})),e.$$.update=()=>{8&e.$$.dirty&&n(2,o=c>9.6),8&e.$$.dirty&&n(1,s=c>10.5),8&e.$$.dirty&&n(0,r=c>12),8&e.$$.dirty&&c>12.5&&i("ended")},[r,s,o,c]}function le(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/natsecintro.mp4")||w(n,"src","./sources/natsecintro.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function pe(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>25.6&&s("ended")},[o]}function me(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/cipher_decryption.mp4")||w(n,"src","./sources/cipher_decryption.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function fe(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>32&&s("ended")},[o]}function he(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/natsecnakasonehype.mp4")||w(n,"src","./sources/natsecnakasonehype.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function $e(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>44&&s("ended")},[o]}function ye(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/itsnakasone.mp4")||w(n,"src","./sources/itsnakasone.mp4"),n.muted=!0,n.autoplay=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function ge(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>50.6&&s("ended")},[o]}function we(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/verse1end.mp4")||w(n,"src","./sources/verse1end.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function ve(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>80&&s("ended")},[o]}function be(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/interceptingconversations.mp4")||w(n,"src","./sources/interceptingconversations.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function ke(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>84.6&&s("ended")},[o]}function xe(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/hownsaplay.mp4")||w(n,"src","./sources/hownsaplay.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Ne(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>105&&s("ended")},[o]}function _e(t){let n,o,s,r;return{c(){n=f("video"),u(n.src,o="./sources/givetocia.mp4")||w(n,"src","./sources/givetocia.mp4"),n.autoplay=!0,n.muted=!0},m(e,o){p(e,n,o),isNaN(t[0])||(n.playbackRate=t[0]),s||(r=g(n,"ratechange",t[2]),s=!0)},p(e,[t]){1&t&&!isNaN(e[0])&&(n.playbackRate=e[0])},i:e,o:e,d(e){e&&m(n),s=!1,r()}}}function Ce(e,t,n){let o;d(e,ie,(e=>n(1,o=e)));let s=8/3;const r=N();return e.$$.update=()=>{2&e.$$.dirty&&o>106.8&&r("ended")},[s,o,function(){s=this.playbackRate,n(0,s)}]}function Re(t){let n,o,s,r;return{c(){n=f("video"),u(n.src,o="./sources/handlethemess.mp4")||w(n,"src","./sources/handlethemess.mp4"),n.autoplay=!0,n.muted=!0},m(e,o){p(e,n,o),isNaN(t[0])||(n.playbackRate=t[0]),s||(r=g(n,"ratechange",t[2]),s=!0)},p(e,[t]){1&t&&!isNaN(e[0])&&(n.playbackRate=e[0])},i:e,o:e,d(e){e&&m(n),s=!1,r()}}}function Te(e,t,n){let o;d(e,ie,(e=>n(1,o=e)));let s=6/(111.2-107.1);const r=N();return e.$$.update=()=>{2&e.$$.dirty&&o>111.2&&r("ended")},[s,o,function(){s=this.playbackRate,n(0,s)}]}function Ae(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/findingcommunism.mp4")||w(n,"src","./sources/findingcommunism.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Ee(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>114.2&&s("ended")},[o]}function Ie(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/usealgo.mp4")||w(n,"src","./sources/usealgo.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Se(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>131&&s("ended")},[o]}function Le(t){let n,o,s,r;return{c(){n=f("video"),u(n.src,o="./sources/infectmalware.mp4")||w(n,"src","./sources/infectmalware.mp4"),n.autoplay=!0,n.muted=!0},m(e,o){p(e,n,o),isNaN(t[0])||(n.playbackRate=t[0]),s||(r=g(n,"ratechange",t[2]),s=!0)},p(e,[t]){1&t&&!isNaN(e[0])&&(n.playbackRate=e[0])},i:e,o:e,d(e){e&&m(n),s=!1,r()}}}function Me(e,t,n){let o;d(e,ie,(e=>n(1,o=e)));let s=1.25;const r=N();return e.$$.update=()=>{2&e.$$.dirty&&o>140&&r("ended")},[s,o,function(){s=this.playbackRate,n(0,s)}]}function ze(t){let n,o;return{c(){n=f("img"),u(n.src,o="./sources/nakasone.jpg")||w(n,"src","./sources/nakasone.jpg"),w(n,"class","svelte-o163nh"),v(n,"pulsing",t[0]<141.6),v(n,"rocking",t[0]>141.6)},m(e,t){p(e,n,t)},p(e,[t]){1&t&&v(n,"pulsing",e[0]<141.6),1&t&&v(n,"rocking",e[0]>141.6)},i:e,o:e,d(e){e&&m(n)}}}function De(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>153.5&&s("ended")},[o]}function je(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/fdaintro.mp4")||w(n,"src","./sources/fdaintro.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Pe(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>159.5&&s("ended")},[o]}function Be(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/historyvein.mp4")||w(n,"src","./sources/historyvein.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function He(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>163.5&&s("ended")},[o]}function qe(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/fdagoal.mp4")||w(n,"src","./sources/fdagoal.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Oe(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>181.8&&s("ended")},[o]}function We(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/whiff.mp4")||w(n,"src","./sources/whiff.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Fe(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>184.6&&s("ended")},[o]}function Ue(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/fdafourdept.mp4")||w(n,"src","./sources/fdafourdept.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Ke(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>204.3&&s("ended")},[o]}function Ye(t){let n,o,s,r;return{c(){n=f("video"),u(n.src,o="./sources/seizures.mp4")||w(n,"src","./sources/seizures.mp4"),n.autoplay=!0,n.muted=!0},m(e,o){p(e,n,o),isNaN(t[0])||(n.playbackRate=t[0]),s||(r=g(n,"ratechange",t[2]),s=!0)},p(e,[t]){1&t&&!isNaN(e[0])&&(n.playbackRate=e[0])},i:e,o:e,d(e){e&&m(n),s=!1,r()}}}function Ge(e,t,n){let o;d(e,ie,(e=>n(1,o=e)));let s=2;const r=N();return e.$$.update=()=>{2&e.$$.dirty&&o>207&&r("ended")},[s,o,function(){s=this.playbackRate,n(0,s)}]}function Je(t){let n,o;return{c(){n=f("video"),u(n.src,o="./sources/fdawrapup.mp4")||w(n,"src","./sources/fdawrapup.mp4"),n.autoplay=!0,n.muted=!0},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Qe(e,t,n){let o;d(e,ie,(e=>n(0,o=e)));const s=N();return e.$$.update=()=>{1&e.$$.dirty&&o>215&&s("ended")},[o]}function Ve(t){let n,o,s,r;return{c(){n=f("video"),s=$(),r=f("div"),r.innerHTML='<h2 class="svelte-on6map">Credits</h2> \n  <p class="svelte-on6map">Chris Chan - Big C - Producer</p> \n  <p class="svelte-on6map">Dylan Rances - Lil D - Rapper</p> \n  <p class="svelte-on6map">Ronak Badhe - r2 - video editor</p> \n  <p class="svelte-on6map">David Wang - Wangy - hot boi</p> \n  <p class="svelte-on6map">Nate Flesner - Nathan - the other hot boi</p>',u(n.src,o="./sources/ending.mp4")||w(n,"src","./sources/ending.mp4"),n.autoplay=!0,n.muted=!0,w(r,"class","credits-container svelte-on6map"),v(r,"show",t[0]>219)},m(e,t){p(e,n,t),p(e,s,t),p(e,r,t)},p(e,[t]){1&t&&v(r,"show",e[0]>219)},i:e,o:e,d(e){e&&m(n),e&&m(s),e&&m(r)}}}function Xe(e,t,n){let o;return d(e,ie,(e=>n(0,o=e))),[o]}function Ze(t){let n;return{c(){n=f("div"),n.innerHTML='<p class="svelte-j95qui">The End</p>',w(n,"class","container svelte-j95qui")},m(e,t){p(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function et(e){return x((()=>{ce.pause()})),[]}const tt=[{name:"intro",component:class extends Y{constructor(e){super(),K(this,e,de,ae,r,{})}}},{name:"natsec-intro",component:class extends Y{constructor(e){super(),K(this,e,pe,le,r,{})}}},{name:"cipher-decryption",component:class extends Y{constructor(e){super(),K(this,e,fe,me,r,{})}}},{name:"natsec-nakasone-hype",component:class extends Y{constructor(e){super(),K(this,e,$e,he,r,{})}}},{name:"itsnakasone",component:class extends Y{constructor(e){super(),K(this,e,ge,ye,r,{})}}},{name:"verse1-end",component:class extends Y{constructor(e){super(),K(this,e,ve,we,r,{})}}},{name:"intercepting-convos",component:class extends Y{constructor(e){super(),K(this,e,ke,be,r,{})}}},{name:"how-nsa-play",component:class extends Y{constructor(e){super(),K(this,e,Ne,xe,r,{})}}},{name:"give-to-cia",component:class extends Y{constructor(e){super(),K(this,e,Ce,_e,r,{})}}},{name:"handle-the-mess",component:class extends Y{constructor(e){super(),K(this,e,Te,Re,r,{})}}},{name:"finding-communism",component:class extends Y{constructor(e){super(),K(this,e,Ee,Ae,r,{})}}},{name:"use-algo",component:class extends Y{constructor(e){super(),K(this,e,Se,Ie,r,{})}}},{name:"infect-with-malware",component:class extends Y{constructor(e){super(),K(this,e,Me,Le,r,{})}}},{name:"itsnakasone-2",component:class extends Y{constructor(e){super(),K(this,e,De,ze,r,{})}}},{name:"fda-intro",component:class extends Y{constructor(e){super(),K(this,e,Pe,je,r,{})}}},{name:"history-vein",component:class extends Y{constructor(e){super(),K(this,e,He,Be,r,{})}}},{name:"fda-goal",component:class extends Y{constructor(e){super(),K(this,e,Oe,qe,r,{})}}},{name:"whiff",component:class extends Y{constructor(e){super(),K(this,e,Fe,We,r,{})}}},{name:"fda-four-dept",component:class extends Y{constructor(e){super(),K(this,e,Ke,Ue,r,{})}}},{name:"fda-seizures",component:class extends Y{constructor(e){super(),K(this,e,Ge,Ye,r,{})}}},{name:"fda-wrapup",component:class extends Y{constructor(e){super(),K(this,e,Qe,Je,r,{})}}},{name:"ending",component:class extends Y{constructor(e){super(),K(this,e,Xe,Ve,r,{})}}},{name:"end",component:class extends Y{constructor(e){super(),K(this,e,et,Ze,r,{})}}}];function nt(e){let t,n,o,s,r,c;var i=e[1].component;return i&&(o=new i({}),o.$on("ended",e[2])),r=new re({}),{c(){t=$(),n=f("main"),o&&O(o.$$.fragment),s=$(),O(r.$$.fragment),document.title="Moo Security, Moo Agency - Lil D, Chris C"},m(e,i){p(e,t,i),p(e,n,i),o&&W(o,n,null),l(n,s),W(r,n,null),c=!0},p(e,[t]){if(i!==(i=e[1].component)){if(o){P();const e=o;q(e.$$.fragment,1,0,(()=>{F(e,1)})),B()}i?(o=new i({}),o.$on("ended",e[2]),O(o.$$.fragment),H(o.$$.fragment,1),W(o,n,s)):o=null}},i(e){c||(o&&H(o.$$.fragment,e),H(r.$$.fragment,e),c=!0)},o(e){o&&q(o.$$.fragment,e),q(r.$$.fragment,e),c=!1},d(e){e&&m(t),e&&m(n),o&&F(o),F(r)}}}function ot(e,t,n){let o,s=0;return e.$$.update=()=>{1&e.$$.dirty&&n(1,o=tt[s]),2&e.$$.dirty&&console.log("[PLAYBACK] scene",o.name)},[s,o,()=>n(0,s++,s)]}const st=new class extends Y{constructor(e){super(),K(this,e,ot,nt,r,{})}}({target:document.body,props:{}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{st.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),st}();
//# sourceMappingURL=bundle.js.map