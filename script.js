document.documentElement.classList.add('js-ready');

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');

// Real CD+G repair examples supplied from an actual repair test.
const problemStrip = document.querySelector('.problem-strip');
if (problemStrip && !document.getElementById('examples')) {
  const exampleStyles = document.createElement('style');
  exampleStyles.id = 'repair-examples-style';
  exampleStyles.textContent = `
    .repair-examples-section{padding:94px 0 100px;position:relative;background:linear-gradient(180deg,rgba(5,9,20,.28),rgba(8,17,28,.86));border-bottom:1px solid rgba(82,224,255,.12)}
    .repair-examples-heading{max-width:820px;margin-bottom:34px}
    .repair-examples-heading h2{font-size:clamp(36px,5vw,60px);line-height:1.02;letter-spacing:-.045em;margin:0 0 16px;color:#f4fbff}
    .repair-examples-heading p:last-child{color:#97adbd;font-size:17px;max-width:720px;margin:0}
    .repair-example-group{padding:24px;border:1px solid #18394b;border-radius:16px;background:linear-gradient(180deg,rgba(10,24,37,.92),rgba(6,14,23,.96));box-shadow:0 18px 60px rgba(0,0,0,.2)}
    .repair-example-group + .repair-example-group{margin-top:28px}
    .repair-example-group.before{border-color:rgba(255,82,128,.26)}
    .repair-example-group.after{border-color:rgba(83,255,160,.28);box-shadow:0 18px 60px rgba(0,0,0,.2),0 0 50px rgba(83,255,160,.035)}
    .repair-example-head{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:18px}
    .repair-example-head>div{display:flex;align-items:center;gap:12px}
    .repair-example-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 11px;border-radius:999px;font-size:11px;line-height:1;font-weight:900;letter-spacing:.13em}
    .before .repair-example-badge{color:#ffb0c5;background:rgba(255,70,121,.09);border:1px solid rgba(255,82,128,.32)}
    .after .repair-example-badge{color:#8dffc0;background:rgba(74,255,151,.08);border:1px solid rgba(74,255,151,.3)}
    .repair-example-head strong{font-size:20px;color:#eef9ff}
    .repair-example-head span.note{font-size:12px;color:#688296;text-align:right}
    .repair-example-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    .repair-example-card{margin:0;min-width:0}
    .repair-example-card a{display:block;border-radius:11px;overflow:hidden;border:1px solid #18384a;background:#030609;box-shadow:0 12px 30px rgba(0,0,0,.28);transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
    .before .repair-example-card a:hover{transform:translateY(-3px);border-color:rgba(255,89,133,.5);box-shadow:0 16px 42px rgba(0,0,0,.35)}
    .after .repair-example-card a:hover{transform:translateY(-3px);border-color:rgba(91,255,169,.55);box-shadow:0 16px 42px rgba(0,0,0,.35),0 0 26px rgba(77,255,160,.05)}
    .repair-example-card img{display:block;width:100%;height:auto;aspect-ratio:3/2;object-fit:contain;background:#111;image-rendering:auto}
    .repair-example-card figcaption{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 3px 0;color:#92aabd;font-size:13px}
    .repair-example-card figcaption b{color:#e5f6ff}
    .repair-example-card figcaption span{font-size:11px;color:#5f788b}
    .repair-examples-note{display:flex;align-items:flex-start;gap:10px;margin:20px 0 0;padding:13px 15px;border-radius:9px;border:1px solid #153244;background:rgba(6,17,27,.7);color:#7f98aa;font-size:12px}
    .repair-examples-note b{color:#5deea7;white-space:nowrap}
    @media(max-width:760px){.repair-examples-section{padding:68px 0 74px}.repair-example-group{padding:16px}.repair-example-head{align-items:flex-start;flex-direction:column}.repair-example-head span.note{text-align:left}.repair-example-grid{grid-template-columns:1fr}.repair-example-group + .repair-example-group{margin-top:20px}}
    @media(prefers-reduced-motion:reduce){.repair-example-card a{transition:none}}
  `;
  document.head.appendChild(exampleStyles);

  const section = document.createElement('section');
  section.id = 'examples';
  section.className = 'repair-examples-section';
  section.innerHTML = `
    <div class="shell">
      <div class="repair-examples-heading reveal">
        <p class="eyebrow"><span class="eyebrow-line"></span> REAL REPAIR EXAMPLES</p>
        <h2>See the difference.</h2>
        <p>Real CD+G frames from a repair test — first the two source frames, then the two repaired results. Click any image to inspect the full-size frame.</p>
      </div>

      <div class="repair-example-group before reveal">
        <div class="repair-example-head">
          <div><span class="repair-example-badge">BEFORE</span><strong>Source frames</strong></div>
          <span class="note">2 original frames before repair</span>
        </div>
        <div class="repair-example-grid">
          <figure class="repair-example-card">
            <a href="assets/examples/before-title.png" target="_blank" rel="noopener" aria-label="Open source title frame full size">
              <img src="assets/examples/before-title.png" alt="CD+G source title frame before repair" width="1152" height="768" loading="lazy">
            </a>
            <figcaption><b>Source title frame</b><span>BEFORE 01</span></figcaption>
          </figure>
          <figure class="repair-example-card">
            <a href="assets/examples/before-lyrics.png" target="_blank" rel="noopener" aria-label="Open source lyric frame full size">
              <img src="assets/examples/before-lyrics.png" alt="CD+G source lyric frame before repair" width="1152" height="768" loading="lazy">
            </a>
            <figcaption><b>Source lyric frame</b><span>BEFORE 02</span></figcaption>
          </figure>
        </div>
      </div>

      <div class="repair-example-group after reveal">
        <div class="repair-example-head">
          <div><span class="repair-example-badge">AFTER</span><strong>Repaired frames</strong></div>
          <span class="note">2 resulting frames after repair</span>
        </div>
        <div class="repair-example-grid">
          <figure class="repair-example-card">
            <a href="assets/examples/after-title.png" target="_blank" rel="noopener" aria-label="Open repaired title frame full size">
              <img src="assets/examples/after-title.png" alt="CD+G title frame after repair" width="1152" height="768" loading="lazy">
            </a>
            <figcaption><b>Repaired title frame</b><span>AFTER 01</span></figcaption>
          </figure>
          <figure class="repair-example-card">
            <a href="assets/examples/after-lyrics.png" target="_blank" rel="noopener" aria-label="Open repaired lyric frame full size">
              <img src="assets/examples/after-lyrics.png" alt="CD+G lyric frame after repair" width="1152" height="768" loading="lazy">
            </a>
            <figcaption><b>Repaired lyric frame</b><span>AFTER 02</span></figcaption>
          </figure>
        </div>
      </div>

      <p class="repair-examples-note reveal"><b>REAL OUTPUT</b><span>These are original 1152 × 768 screenshots supplied from the repair workflow and are shown without visual retouching.</span></p>
    </div>
  `;
  problemStrip.insertAdjacentElement('afterend', section);

  if (nav && !nav.querySelector('a[href="#examples"]')) {
    const examplesLink = document.createElement('a');
    examplesLink.href = '#examples';
    examplesLink.textContent = 'Before / After';
    const workflowLink = nav.querySelector('a[href="#workflow"]');
    if (workflowLink) workflowLink.insertAdjacentElement('beforebegin', examplesLink);
  }
}

function closeMenu() {
  if (!menuButton || !nav) return;
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}
