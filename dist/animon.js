var t=new IntersectionObserver((function(t){t.forEach((function(t){var e=t.target,i=parseInt(e.getAttribute("data-delay"))||0,n=e.getAttribute("data-duration")||null;t.intersectionRatio>0?setTimeout((function(){n&&(e.style.transitionDuration="".concat(n,", ").concat(n)),e.classList.add("is-visible")}),i):(e.classList.remove("is-visible"),e.style.removeProperty("transition-duration"))}))})),e=function(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".animonItem";e="string"==typeof i?document.querySelectorAll(i):i,"IntersectionObserver"in window?e.forEach((function(e){t.observe(e)})):e.forEach((function(t){return t.classList.add("is-visible")}))};export{e as animon};