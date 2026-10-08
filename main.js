var burgerBtn = document.getElementById('burgerBtn');
  var skillMenu = document.getElementById('skillMenu');
  var closeMenu = document.getElementById('closeMenu');
  function toggleMenu(){
    burgerBtn.classList.toggle('open');
    skillMenu.classList.toggle('open');
  }
  burgerBtn.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);
  skillMenu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', toggleMenu);
  });

  document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
  document.addEventListener('dragstart', function(e){ e.preventDefault(); });

  // Form modal
  var formModal = document.getElementById('formModal');
  var openFormBtn = document.getElementById('openFormBtn');
  var formModalClose = document.getElementById('formModalClose');
  var formModalBg = document.getElementById('formModalBg');
  if(openFormBtn){
    openFormBtn.addEventListener('click', function(){ formModal.classList.add('open'); });
    formModalClose.addEventListener('click', function(){ formModal.classList.remove('open'); });
    formModalBg.addEventListener('click', function(){ formModal.classList.remove('open'); });
  }
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var skill = document.getElementById('cf-skill').value;
      var msg = document.getElementById('cf-msg').value.trim();
      var subject = encodeURIComponent('Portfolio Inquiry — ' + skill);
      var body = encodeURIComponent(
        'Hi Saim,\n\n' +
        'I came across your portfolio and I\'m interested in your ' + skill + ' services.\n\n' +
        '---\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Service: ' + skill + '\n' +
        '---\n\n' +
        (msg ? msg : '(No additional message)') + '\n\n' +
        'Looking forward to hearing from you!'
      );
      window.location.href = 'mailto:saimxhussain@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

  // Automation case modals
  document.querySelectorAll('.case-mini').forEach(function(mini){
    mini.addEventListener('click', function(){
      var modal = document.getElementById('caseModal' + mini.getAttribute('data-case-open'));
      if(modal) modal.classList.add('open');
    });
  });
  document.querySelectorAll('.case-modal').forEach(function(modal){
    modal.querySelectorAll('[data-case-close]').forEach(function(el){
      el.addEventListener('click', function(){ modal.classList.remove('open'); });
    });
  });

  // GD lightbox
  var gdLightbox = document.getElementById('gdLightbox');
  var gdLightboxImg = document.getElementById('gdLightboxImg');
  var gdLightboxClose = document.getElementById('gdLightboxClose');
  var gdLightboxBg = document.getElementById('gdLightboxBg');
  document.querySelectorAll('.gd-card').forEach(function(card){
    card.addEventListener('click', function(){
      gdLightboxImg.src = card.querySelector('img').src;
      gdLightbox.classList.add('open');
    });
  });
  gdLightboxClose.addEventListener('click', function(){ gdLightbox.classList.remove('open'); });
  gdLightboxBg.addEventListener('click', function(){ gdLightbox.classList.remove('open'); });
  // Sales script tabs
  document.querySelectorAll('.script-tab').forEach(function(tab){
    tab.addEventListener('click', function(){
      document.querySelectorAll('.script-tab').forEach(function(t){ t.classList.remove('active'); });
      document.querySelectorAll('.script-body').forEach(function(b){ b.classList.add('hidden'); });
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.remove('hidden');
    });
  });

  // Business Dev chart
  var bdevData = [
    {m:'Oct\'23', v:500},
    {m:'Nov\'23', v:1000},
    {m:'Dec\'23', v:1500},
    {m:'Jan\'24', v:1300},
    {m:'Feb\'24', v:1700},
    {m:'Mar\'24', v:1900},
    {m:'Apr\'24', v:2000},
    {m:'May\'24', v:1900},
    {m:'Jun\'24', v:1700},
    {m:'Jul\'24', v:2100},
    {m:'Aug\'24', v:2400},
    {m:'Sep\'24', v:2750},
    {m:'Oct\'24', v:3200},
    {m:'Nov\'24', v:2850},
    {m:'Dec\'24', v:2200},
    {m:'Jan\'25', v:2600},
    {m:'Feb\'25', v:2950},
    {m:'Mar\'25', v:2400},
    {m:'Apr\'25', v:2700},
    {m:'May\'25', v:2300},
  ];
  var maxV = Math.max.apply(null, bdevData.map(function(d){ return d.v; }));
  var barsEl = document.getElementById('bdevBars');
  var monthsEl = document.getElementById('bdevMonths');
  if(barsEl && monthsEl){
    bdevData.forEach(function(d){
      var pct = (d.v / maxV) * 160;
      var wrap = document.createElement('div');
      wrap.className = 'bdev-bar-wrap';
      var val = document.createElement('div');
      val.className = 'bdev-val';
      val.textContent = '$' + d.v.toLocaleString();
      wrap.appendChild(val);
      var bar = document.createElement('div');
      bar.className = 'bdev-bar' + (d.v === maxV ? ' peak' : '');
      bar.style.height = pct + 'px';
      bar.setAttribute('data-val', '$' + d.v.toLocaleString());
      wrap.appendChild(bar);
      barsEl.appendChild(wrap);
      var lbl = document.createElement('div');
      lbl.className = 'bdev-month-label';
      lbl.textContent = d.m;
      monthsEl.appendChild(lbl);
    });
  }

  // Lightbox
  var proofBtn = document.getElementById('proofBtn');
  var proofLightbox = document.getElementById('proofLightbox');
  var proofClose = document.getElementById('proofClose');
  var proofBg = document.getElementById('proofBg');
  if(proofBtn){
    proofBtn.addEventListener('click', function(){ proofLightbox.classList.add('open'); });
    proofClose.addEventListener('click', function(){ proofLightbox.classList.remove('open'); });
    proofBg.addEventListener('click', function(){ proofLightbox.classList.remove('open'); });
  }

  var allCards = document.querySelectorAll('.vcard.clickplay');
  allCards.forEach(function(card){
    var vid = card.querySelector('video');
    card.addEventListener('click', function(){
      // once native controls are on, they handle play/pause themselves
      if(vid.hasAttribute('controls')) return;
      allCards.forEach(function(c){
        var v = c.querySelector('video');
        if(v !== vid && !v.paused) v.pause();
      });
      vid.muted = false;
      vid.setAttribute('controls','');
      vid.play();
    });
    vid.addEventListener('play', function(){
      allCards.forEach(function(c){
        var v = c.querySelector('video');
        if(v !== vid && !v.paused) v.pause();
      });
      card.classList.add('playing');
    });
    vid.addEventListener('pause', function(){ card.classList.remove('playing'); });
    vid.addEventListener('ended', function(){
      card.classList.remove('playing');
      vid.removeAttribute('controls');
      vid.currentTime = 0;
    });
  });

  // Arriving from another page of the site: jump straight past the hero to the skill
  var skillId = document.body.getAttribute('data-skill');
  if(skillId && document.referrer.indexOf(location.origin) === 0 && !location.hash){
    var tgt = document.getElementById(skillId);
    if(tgt) window.scrollTo(0, tgt.getBoundingClientRect().top + window.pageYOffset - 70);
  }
  if(location.hash === '#content' && document.getElementById('content')){
    document.getElementById('content').scrollIntoView();
  }
