(function(){
  function track(event, props){try{window.plausible && window.plausible(event,{props});}catch(e){}}
  // CTA formulario (sin teléfono)
  var formLinks = document.querySelectorAll('a[data-cta="form"]');
  formLinks.forEach(function(a){ a.addEventListener('click', function(){ track('cta_form_click'); }); });
  // CTA Stripe (pago)
  var stLinks = document.querySelectorAll('a[data-cta="stripe"]');
  stLinks.forEach(function(a){ a.addEventListener('click', function(){ track('cta_stripe_click'); }); });
  // Cookie banner
  var banner = document.getElementById('cookie');
  var accept = document.getElementById('cookie-accept');
  if(!localStorage.getItem('cookie_ok')){ banner && banner.classList.add('show'); }
  accept && accept.addEventListener('click', function(){
    localStorage.setItem('cookie_ok','1');
    banner.classList.remove('show');
    track('cookie_accepted');
  });
})();
