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
            <a href="assets/examples/after-title-fixed.webp" target="_blank" rel="noopener" aria-label="Open repaired title frame full size">
              <img src="assets/examples/after-title-fixed.webp" alt="CD+G title frame after repair" width="1152" height="768" loading="lazy">
            </a>
            <figcaption><b>Repaired title frame</b><span>AFTER 01</span></figcaption>
          </figure>
          <figure class="repair-example-card">
            <a href="assets/examples/after-lyrics-fixed.webp" target="_blank" rel="noopener" aria-label="Open repaired lyric frame full size">
              <img src="assets/examples/after-lyrics-fixed.webp" alt="CD+G lyric frame after repair" width="1152" height="768" loading="lazy">
            </a>
            <figcaption><b>Repaired lyric frame</b><span>AFTER 02</span></figcaption>
          </figure>
        </div>
      </div>

      <div class="repair-example-case-heading reveal" style="margin:42px 0 20px">
        <p class="eyebrow"><span class="eyebrow-line"></span> EXAMPLE 2 · FULL HEALTH CHECK REPAIR</p>
        <h3 style="margin:8px 0 8px;font-size:clamp(28px,4vw,42px);color:#f4fbff">Corrupted visuals → clean lyrics.</h3>
        <p style="margin:0;color:#97adbd;max-width:760px">A real CDG Doctor session showing corrupted lyric graphics before repair and the clean display after running Full Health Check. Click either screenshot to inspect the application view.</p>
      </div>

      <div class="repair-example-group before reveal">
        <div class="repair-example-head">
          <div><span class="repair-example-badge">BEFORE</span><strong>CDG Doctor — Corrupted Visuals</strong></div>
          <span class="note">Application view before repair</span>
        </div>
        <div class="repair-example-grid" style="grid-template-columns:1fr">
          <figure class="repair-example-card">
            <a href="assets/examples/full-health-check-before-fullres.webp" target="_blank" rel="noopener" aria-label="Open corrupted CDG Doctor interface screenshot">
              <img src="assets/examples/full-health-check-before-fullres.webp" alt="CDG Doctor showing corrupted overlapping lyric visuals before Full Health Check repair" width="1920" height="1032" loading="lazy" style="aspect-ratio:240/129">
            </a>
            <figcaption><b>Corrupted visuals before repair</b><span>FULL HEALTH CHECK · BEFORE</span></figcaption>
          </figure>
        </div>
      </div>

      <div class="repair-example-group after reveal">
        <div class="repair-example-head">
          <div><span class="repair-example-badge">AFTER</span><strong>Full Health Check — Fixed</strong></div>
          <span class="note">Clean lyric display after repair</span>
        </div>
        <div class="repair-example-grid" style="grid-template-columns:1fr">
          <figure class="repair-example-card">
            <a href="assets/examples/full-health-check-after-fullres.webp" target="_blank" rel="noopener" aria-label="Open repaired CDG Doctor interface screenshot">
              <img src="assets/examples/full-health-check-after-fullres.webp" alt="CDG Doctor showing clean lyric graphics after Full Health Check repair" width="1920" height="1032" loading="lazy" style="aspect-ratio:240/129">
            </a>
            <figcaption><b>Full Health Check repaired display</b><span>FULL HEALTH CHECK · AFTER</span></figcaption>
          </figure>
        </div>
      </div>

      <p class="repair-examples-note reveal"><b>REAL OUTPUT</b><span>These are real repair-workflow screenshots with no visual retouching. The CD+G frame examples are lossless web copies; the full CDG Doctor interface screenshots are full-resolution lossless 1920 × 1032 copies.</span></p>
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

// Real CDG Doctor working demonstration hosted on YouTube.
if (problemStrip && !document.getElementById('demo')) {
  const demoStyles = document.createElement('style');
  demoStyles.id = 'cdg-doctor-demo-style';
  demoStyles.textContent = `
    .demo-section{padding:86px 0 92px;border-bottom:1px solid rgba(82,224,255,.12);background:radial-gradient(circle at 70% 20%,rgba(47,210,255,.08),transparent 34%),linear-gradient(180deg,rgba(7,14,24,.96),rgba(5,10,18,.98))}
    .demo-grid{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:38px;align-items:center}
    .demo-copy h2{margin:0 0 15px;color:#f4fbff;font-size:clamp(36px,5vw,58px);line-height:1.02;letter-spacing:-.045em}
    .demo-copy>p:not(.eyebrow){margin:0 0 22px;color:#97adbd;font-size:17px;line-height:1.7;max-width:590px}
    .demo-proof{display:flex;flex-wrap:wrap;gap:9px;margin:0 0 25px;padding:0;list-style:none}
    .demo-proof li{padding:7px 10px;border:1px solid #17394b;border-radius:999px;background:rgba(9,23,35,.78);color:#9bb5c6;font-size:11px;font-weight:800;letter-spacing:.055em;text-transform:uppercase}
    .demo-video{position:relative;overflow:hidden;aspect-ratio:16/9;border:1px solid rgba(79,223,255,.3);border-radius:16px;background:#020408;box-shadow:0 25px 70px rgba(0,0,0,.38),0 0 50px rgba(58,219,255,.045)}
    .demo-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
    .demo-youtube-link{display:inline-flex;align-items:center;gap:9px;color:#eaf8ff;font-size:13px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;text-decoration:none}
    .demo-youtube-link span{color:#54e9ff}
    .demo-youtube-link:hover{color:#63edff}
    @media(max-width:900px){.demo-section{padding:68px 0 74px}.demo-grid{grid-template-columns:1fr;gap:27px}.demo-copy>p:not(.eyebrow){max-width:760px}}
  `;
  document.head.appendChild(demoStyles);

  const demoSection = document.createElement('section');
  demoSection.id = 'demo';
  demoSection.className = 'demo-section';
  demoSection.innerHTML = `
    <div class="shell demo-grid">
      <div class="demo-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> REAL SOFTWARE DEMO</p>
        <h2>See CDG Doctor working.</h2>
        <p>Watch a real CDG Doctor session and see the repair workstation operating on CD+G graphics rather than relying on screenshots or feature claims alone.</p>
        <ul class="demo-proof" aria-label="Video highlights">
          <li>Real application</li>
          <li>Real CD+G workflow</li>
          <li>No mock-up</li>
        </ul>
        <a class="demo-youtube-link" href="https://www.youtube.com/watch?v=NpO1oQ730og" target="_blank" rel="noopener">Watch on YouTube <span aria-hidden="true">↗</span></a>
      </div>
      <div class="demo-video">
        <iframe src="https://www.youtube-nocookie.com/embed/NpO1oQ730og?rel=0" title="HazzKaraoke CDG Doctor working demonstration" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  `;
  problemStrip.insertAdjacentElement('afterend', demoSection);

  if (nav && !nav.querySelector('a[href="#demo"]')) {
    const demoLink = document.createElement('a');
    demoLink.href = '#demo';
    demoLink.textContent = 'Demo';
    const examplesLink = nav.querySelector('a[href="#examples"]');
    if (examplesLink) examplesLink.insertAdjacentElement('beforebegin', demoLink);
    else {
      const workflowLink = nav.querySelector('a[href="#workflow"]');
      if (workflowLink) workflowLink.insertAdjacentElement('beforebegin', demoLink);
    }
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
