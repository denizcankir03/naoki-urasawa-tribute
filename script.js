
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const btn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) btn.style.display = 'block';
  else btn.style.display = 'none';
});
btn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

const searchInput = document.getElementById('manga-search'); // arama input
const mangaItems = document.querySelectorAll('.manga-item');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();

  mangaItems.forEach(item => {
    const title = item.querySelector('h3').textContent.toLowerCase();
    if(title.includes(query)) {
      item.style.display = ''; // göster
    } else {
      item.style.display = 'none'; // gizle
    }
  });
});

// Tüm animasyonlanacak bölümleri seç
const animSections = document.querySelectorAll("#biography, #quotes, #manga-gallery, #video-section, #contact");

// Başlangıçta gizle ve aşağı kaydır
animSections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
});

// Scroll event
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85; // ekranın %85'i tetikleme noktası

  animSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.6s ease-out";
    }
  });
});

// Sayfa ilk açıldığında da çalışması için:
window.addEventListener("load", () => {
  const event = new Event('scroll');
  window.dispatchEvent(event);
});






