const e=document.querySelector(".form");function t(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(o=>{o.preventDefault();const n=Number(e.elements.amount.value);let l=Number(e.elements.delay.value);const s=Number(e.elements.step.value);for(let e=0;e<n;e+=1){l+=s,t(e+1,l).then((({position:e,delay:t})=>{console.log(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`Rejected promise ${e} in ${t}ms`)}))}e.reset()}));
//# sourceMappingURL=03-promises.67cdcb4a.js.map
