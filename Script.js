// Simple click action (can be extended)
document.querySelector('.cta-button').addEventListener('click', () => {
  alert("Thanks for showing interest! We’ll get back to you.");
});


/*******************************************************88
                      CONTACT PAGE 
**********************************************8**********8*/
document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      this.reset();
});
    


    // simple, mobile-friendly form behavior (no external dependencies)
    function handleSubmit(e){
      e.preventDefault();
      const status = document.getElementById('formStatus');
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true; btn.style.opacity = 0.85;
      status.textContent = 'Sending...';

      // mimic async send
      setTimeout(()=>{
        status.textContent = 'Thanks — your message has been sent!';
        e.target.reset();
        btn.disabled = false; btn.style.opacity = 1;
      }, 900);
      return false;
    }

    // optional: improve keyboard accessibility for the icon boxes
    document.querySelectorAll('.icon-box').forEach(el=>{
      el.addEventListener('keydown', (ev)=>{
        if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); el.click(); }
      })
    });
