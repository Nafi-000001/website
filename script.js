
// script.js

// Show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (demo only)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
      alert('All fields are required');
      return;
    }
    alert(`Thanks, ${name}! Your message has been received. (Demo only)`);
    form.reset();
  });
}

// Mobile nav toggle
const menuBtn = document.getElementById('menuBtn');
if(menuBtn){
  menuBtn.addEventListener('click',()=>{
    const nav = document.querySelector('nav');
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });
}

// Scroll animations: reveal projects when visible
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.2});

document.querySelectorAll('.project').forEach(el=>observer.observe(el));

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link=>{
  link.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});
