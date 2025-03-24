
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-left').forEach(el => {
    observer.observe(el);
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  updateNavbar();
  window.addEventListener('scroll', updateNavbar);
});


document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  if (!localStorage.getItem("cookieChoice")) {
    banner.style.display = "flex";
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookieChoice", "accepted");
    banner.style.display = "none";

    // Exempel: Aktivera Google Analytics eller annan spårning
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  });

  declineBtn.addEventListener("click", function () {
    localStorage.setItem("cookieChoice", "declined");
    banner.style.display = "none";
  });
});