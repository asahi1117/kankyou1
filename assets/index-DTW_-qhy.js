(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`counter-value`;function t(){let t=Number(localStorage.getItem(e));return Number.isInteger(t)?t:0}document.querySelector(`#app`).innerHTML=`
  <main class="flex min-h-svh items-center justify-center px-4 py-10">
    <section class="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg sm:p-10">
      <h1 class="text-center text-3xl font-bold text-white sm:text-4xl">カウンター</h1>
      <p id="count" class="mt-8 text-center text-6xl font-bold tabular-nums sm:text-7xl">0</p>
      <div class="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <button id="dec" type="button" class="counter-btn">減らす</button>
        <button id="reset" type="button" class="counter-btn counter-btn-reset">リセット</button>
        <button id="inc" type="button" class="counter-btn counter-btn-inc">増やす</button>
      </div>
    </section>
  </main>
`;var n=document.querySelector(`#count`),r=document.querySelector(`#dec`),i=document.querySelector(`#reset`),a=document.querySelector(`#inc`),o=t();function s({flash:t=!1}={}){n.textContent=String(o),n.classList.remove(`is-negative`,`is-zero`,`is-positive`,`is-reset`),o<0?n.classList.add(`is-negative`):o===0?n.classList.add(`is-zero`):n.classList.add(`is-positive`),t&&n.classList.add(`is-reset`),localStorage.setItem(e,String(o))}r.addEventListener(`click`,()=>{--o,s()}),a.addEventListener(`click`,()=>{o+=1,s()}),i.addEventListener(`click`,()=>{o=0,s({flash:!0})}),s();