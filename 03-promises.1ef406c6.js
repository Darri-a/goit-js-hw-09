const e=document.querySelector(".form");function t(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(o=>{o.preventDefault();const n=Number(e.elements.amount.value);let s=Number(e.elements.delay.value);const l=Number(e.elements.step.value);for(i=0;i<n;i+=1){s+=l,t(i+1,s).then((({position:e,delay:t})=>{console.log(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`Rejected promise ${e} in ${t}ms`)}))}e.reset()}));
//# sourceMappingURL=03-promises.1ef406c6.js.map