import './style.css';

const STORAGE_KEY = 'counter-value';

function loadCount() {
  const saved = Number(localStorage.getItem(STORAGE_KEY));
  return Number.isInteger(saved) ? saved : 0;
}

document.querySelector('#app').innerHTML = `
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
`;

const countEl = document.querySelector('#count');
const decBtn = document.querySelector('#dec');
const resetBtn = document.querySelector('#reset');
const incBtn = document.querySelector('#inc');

let count = loadCount();

function updateView({ flash = false } = {}) {
  countEl.textContent = String(count);
  countEl.classList.remove('is-negative', 'is-zero', 'is-positive', 'is-reset');

  if (count < 0) {
    countEl.classList.add('is-negative');
  } else if (count === 0) {
    countEl.classList.add('is-zero');
  } else {
    countEl.classList.add('is-positive');
  }

  if (flash) {
    countEl.classList.add('is-reset');
  }

  localStorage.setItem(STORAGE_KEY, String(count));
}

decBtn.addEventListener('click', () => {
  count -= 1;
  updateView();
});

incBtn.addEventListener('click', () => {
  count += 1;
  updateView();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateView({ flash: true });
});

updateView();
