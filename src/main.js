import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>カウンター</h1>
  <p id="count">0</p>
  <button id="btn">増やす</button>
`;

const countEl = document.querySelector('#count');
const btn = document.querySelector('#btn');
let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});
