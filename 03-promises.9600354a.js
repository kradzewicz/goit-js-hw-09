!function(){var e=document.querySelector(".form"),t=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),o=document.querySelector('[name="amount"]'),u=document.querySelectorAll('[type="number"]'),r=document.querySelector("form button");e.addEventListener("submit",(function(e){e.preventDefault(),r.disabled="true",u.forEach((function(e){e.disabled="true"}));var c=0,a=null;setTimeout((function(){a=setInterval((function(){var e=parseInt(t.value)+parseInt(n.value*c);(function(e,t){var n=Math.random()>.3;return new Promise((function(o,u){n?o("✅ Fulfilled promise ".concat(e+1," in ").concat(t,"ms")):u("❌ Rejected promise ".concat(e+1," in ").concat(t,"ms"))}))})(c,e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),c>=o.value-1&&(clearInterval(a),u.forEach((function(e){e.value="",e.toggleAttribute("disabled")})),r.toggleAttribute("disabled")),c++}),n.value)}),t.value)}))}();
//# sourceMappingURL=03-promises.9600354a.js.map