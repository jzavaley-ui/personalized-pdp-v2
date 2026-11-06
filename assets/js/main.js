/* Delta Children — PDP + Open Box prototype interactions.
   No dependencies. Everything is progressive: the pages work without JS,
   these only add state (variant, swatches, quantity, tooltip, gallery dots). */
(function () {
  'use strict';

  // ---- Open Box variant: ?variant=open-box-only shows V2 (no new counterpart)
  var params = new URLSearchParams(window.location.search);
  if (params.get('variant') === 'open-box-only') {
    document.body.classList.add('v2');
  }
  document.querySelectorAll('[data-variant-link]').forEach(function (a) {
    var isV2 = a.getAttribute('data-variant-link') === 'v2';
    var current = document.body.classList.contains('v2') === isV2 && document.body.classList.contains('ob');
    if (current) a.setAttribute('aria-current', 'page');
  });

  // ---- Color swatches
  document.querySelectorAll('[data-swatches]').forEach(function (group) {
    var label = document.getElementById(group.getAttribute('data-swatches'));
    group.addEventListener('click', function (e) {
      var btn = e.target.closest('.swatch');
      if (!btn || btn.disabled) return;
      group.querySelectorAll('.swatch').forEach(function (s) { s.setAttribute('aria-pressed', 'false'); });
      btn.setAttribute('aria-pressed', 'true');
      if (label) label.textContent = btn.getAttribute('data-name');
    });
  });

  // ---- Quantity stepper
  document.querySelectorAll('[data-qty]').forEach(function (q) {
    var out = q.querySelector('output');
    var minus = q.querySelector('[data-step="-1"]');
    var plus = q.querySelector('[data-step="1"]');
    var max = parseInt(q.getAttribute('data-max') || '99', 10);
    function render(v) {
      out.textContent = v;
      minus.disabled = v <= 1;
      plus.disabled = v >= max;
    }
    q.addEventListener('click', function (e) {
      var b = e.target.closest('[data-step]');
      if (!b) return;
      var v = parseInt(out.textContent, 10) + parseInt(b.getAttribute('data-step'), 10);
      render(Math.max(1, Math.min(max, v)));
    });
    render(parseInt(out.textContent, 10) || 1);
  });

  // ---- Open Box info tooltip / popover
  var infos = Array.prototype.slice.call(document.querySelectorAll('.ob-info'));
  function closeAll(except) {
    infos.forEach(function (b) { if (b !== except) b.setAttribute('aria-expanded', 'false'); });
  }
  infos.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var open = btn.getAttribute('aria-expanded') === 'true';
      closeAll(btn);
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  });
  document.querySelectorAll('.ob-tip-close').forEach(function (c) {
    c.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      closeAll();
      var wrap = c.closest('.ob-info-wrap');
      if (wrap) wrap.querySelector('.ob-info').focus();
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.ob-info-wrap')) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });
  window.addEventListener('scroll', function () {
    if (window.matchMedia('(max-width: 1023px)').matches) closeAll();
  }, { passive: true });

  // ---- Option C: condition selector. Choosing the other condition loads that page (like Amazon).
  document.querySelectorAll('.cond-opt[data-href] input').forEach(function (input) {
    input.addEventListener('change', function () {
      if (!input.checked) return;
      var opt = input.closest('.cond-opt');
      var fs = input.closest('.cond');
      fs.querySelectorAll('.cond-opt').forEach(function (o) { o.classList.remove('is-selected'); });
      opt.classList.add('is-selected', 'is-loading');
      var legendValue = fs.querySelector('legend span');
      if (legendValue) legendValue.textContent = opt.querySelector('.cond-name').textContent;
      setTimeout(function () { window.location.assign(opt.getAttribute('data-href')); }, 150);
    });
  });

  // ---- Gallery dots (mobile carousel)
  document.querySelectorAll('.gallery').forEach(function (g) {
    var track = g.querySelector('.gallery-track');
    var dots = g.querySelector('.gallery-dots');
    if (!track || !dots) return;
    var slides = track.querySelectorAll('img');
    slides.forEach(function (_, i) {
      var d = document.createElement('button');
      d.type = 'button';
      d.setAttribute('aria-label', 'Show image ' + (i + 1));
      if (i === 0) d.setAttribute('aria-current', 'true');
      d.addEventListener('click', function () {
        track.scrollTo({ left: track.clientWidth * i, behavior: 'smooth' });
      });
      dots.appendChild(d);
    });
    track.addEventListener('scroll', function () {
      var i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
      dots.querySelectorAll('button').forEach(function (d, j) {
        if (j === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
    }, { passive: true });
  });
})();
