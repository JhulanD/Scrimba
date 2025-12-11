// script.js
// Converts units when user clicks Convert and rounds down to 3 decimals using Math.floor

(function () {
  'use strict';

  // helpers
  const roundDown3 = (num) => {
    if (!isFinite(num)) return NaN;
    return Math.floor(num * 1000) / 1000;
  };

  // conversion factors
  // 1 L = 0.2641720523581484 gal
  const L_TO_GAL = 0.2641720523581484;
  const KG_TO_LB = 2.2046226218487757; // 1 kg -> pounds
  const M_TO_FT = 3.280839895013123; // 1 m -> feet

  // conversion functions
  const litersToGallons = (L) => L * L_TO_GAL;
  const gallonsToLiters = (gal) => gal / L_TO_GAL;

  const kilosToPounds = (kg) => kg * KG_TO_LB;
  const poundsToKilos = (lb) => lb / KG_TO_LB;

  const metersToFeet = (m) => m * M_TO_FT;
  const feetToMeters = (ft) => ft / M_TO_FT;

  // DOM elements
  const valueInput = document.getElementById('valueInput');
  const convertBtn = document.getElementById('convertBtn');
  const volumeResult = document.getElementById('volumeResult');
  const massResult = document.getElementById('massResult');
  const lengthResult = document.getElementById('lengthResult');

  // main update function (called on click)
  function updateAll() {
    const raw = valueInput.value;

    if (raw === '') {
      volumeResult.textContent = '—';
      massResult.textContent = '—';
      lengthResult.textContent = '—';
      return;
    }

    const n = Number(raw);
    if (Number.isNaN(n)) {
      volumeResult.textContent = 'Invalid input';
      massResult.textContent = 'Invalid input';
      lengthResult.textContent = 'Invalid input';
      return;
    }

    // perform conversions
    const L = n;
    const galFromL = litersToGallons(L);
    const gal = n;
    const LFromGal = gallonsToLiters(gal);

    const kg = n;
    const lbFromKg = kilosToPounds(kg);
    const lb = n;
    const kgFromLb = poundsToKilos(lb);

    const m = n;
    const ftFromM = metersToFeet(m);
    const ft = n;
    const mFromFt = feetToMeters(ft);

    // apply Math.floor rounding down to 3 decimal places
    const fmt = (x) => {
      const val = roundDown3(x);
      // show with upto 3 decimals, trimming trailing zeros
      if (Number.isNaN(val)) return '—';
      // ensure 3 decimal places if needed for display (optional)
      // return val.toFixed(3);  // uncomment if you want exactly 3 decimals (e.g. 1.200)
      // else return trimmed:
      return String(val);
    };

    volumeResult.textContent = `${fmt(L)} liters = ${fmt(galFromL)} gallons | ${fmt(gal)} gallons = ${fmt(LFromGal)} liters`;
    massResult.textContent = `${fmt(kg)} kilos = ${fmt(lbFromKg)} pounds | ${fmt(lb)} pounds = ${fmt(kgFromLb)} kilos`;
    lengthResult.textContent = `${fmt(m)} meters = ${fmt(ftFromM)} feet | ${fmt(ft)} feet = ${fmt(mFromFt)} meters`;
  }

  // only trigger on button click (per requirement)
  convertBtn.addEventListener('click', updateAll);

  // optional: allow Enter to trigger (keeps requirement intact — primary action is click)
  valueInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateAll();
    }
  });

  // initialize display on load
  document.addEventListener('DOMContentLoaded', updateAll);
})();
