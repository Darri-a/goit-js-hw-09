!function(){var e=document.querySelector(".form");function n(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(o){o.preventDefault();var t=Number(e.elements.amount.value),a=Number(e.elements.delay.value),c=Number(e.elements.step.value);for(i=0;i<t;i+=1){n(i+1,a+=c).then((function(e){var n=e.position,o=e.delay;console.log("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("Rejected promise ".concat(n," in ").concat(o,"ms"))}))}e.reset()}))}();
//# sourceMappingURL=03-promises.dac6118c.js.map
