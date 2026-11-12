const projects = [
  {file:'tuki-work-01.jpg',title:'Custom TV media unit & wall panelling',category:'tv',label:'TV & MEDIA WALL'},
  {file:'tuki-work-02.jpg',title:'Full-height wardrobe with loft storage',category:'wardrobe',label:'BEDROOM ALMARI'},
  {file:'tuki-work-03.jpg',title:'Warm living room with custom ceiling woodwork',category:'living',label:'LIVING ROOM'},
  {file:'tuki-work-04.jpg',title:'Modern bedroom interior with custom built-ins',category:'bedroom',label:'BEDROOM INTERIOR'},
  {file:'tuki-work-05.jpg',title:'Designer wooden partition and living interior',category:'living',label:'LIVING & PARTITION'},
  {file:'tuki-work-06.jpg',title:'Modern kitchen cabinetry and storage finish',category:'kitchen',label:'MODULAR KITCHEN'},
  {file:'wood-tv-partition.jpg',title:'Wooden TV wall and slatted partition',category:'tv',label:'TV PANEL & PARTITION'},
  {file:'green-headboard.jpg',title:'Green headboard and bedroom wall design',category:'bedroom',label:'BEDROOM FEATURE WALL'},
  {file:'almari-vanity.jpg',title:'Classic wardrobe with dressing unit',category:'wardrobe',label:'ALMARI & DRESSING UNIT'},
  {file:'almari-wooden.jpg',title:'Warm wooden wardrobe with display shelves',category:'wardrobe',label:'WOODEN ALMARI'},
  {file:'kitchen-island.jpg',title:'A kitchen made for gathering',category:'kitchen',label:'MODULAR KITCHEN'},
  {file:'bedroom-wardrobe.jpg',title:'Quiet lines, warm timber',category:'bedroom',label:'BEDROOM & WARDROBE'},
  {file:'tv-panel.jpg',title:'A statement in walnut and stone',category:'tv',label:'TV & FEATURE WALL'},
  {file:'living-room-sectional.jpg',title:'Soft forms, natural textures',category:'living',label:'LIVING'},
  {file:'living-dining.jpg',title:'Custom dining table and warm living space',category:'living',label:'DINING TABLE & LIVING'},
  {file:'living-dining.jpg',title:'Handcrafted solid wooden dining table',category:'tables',label:'CUSTOM DINING TABLE'},
  {file:'living-room-warm.jpg',title:'An inviting family room',category:'living',label:'LIVING'},
  {file:'living-room-yellow.jpg',title:'A little sunshine at home',category:'living',label:'LIVING'},
  {file:'bedroom-suite.jpg',title:'A restful retreat',category:'bedroom',label:'BEDROOM'},
  {file:'living-room-jaipur.jpg',title:'A contemporary modern home',category:'living',label:'LIVING'},
  {file:'living-room-marble.jpg',title:'Stone, light and elegant details',category:'living',label:'LIVING'},
  {file:'bedroom-marble.jpg',title:'A calm and considered bedroom',category:'bedroom',label:'BEDROOM'},
  {file:'bedroom-wood.jpg',title:'Timber tones for slow mornings',category:'bedroom',label:'BEDROOM'},
  {file:'bedroom-neutral.jpg',title:'Layers of comfort',category:'bedroom',label:'BEDROOM'},
  {file:'living-room-ivory.jpg',title:'Understated, and entirely yours',category:'living',label:'LIVING'},
  {file:'bedroom-classic.jpg',title:'A bedroom with character',category:'bedroom',label:'BEDROOM'},
];
const workVideos = [
  {file:'wardrobe-design.mp4',poster:'wardrobe-design.jpg',title:'Wardrobe and media wall',label:'WARDROBE · BEDROOM WOODWORK',description:'A walkthrough of a custom wardrobe and bedroom wall finish.',service:'wardrobe',duration:'00:26'},
  {file:'work-video-02.mp4',poster:'work-video-02.jpg',title:'Curved reception counter',label:'CUSTOM RECEPTION COUNTER',description:'A close look at a curved counter and its stone finish.',service:'living',duration:'00:26'},
  {file:'work-video-03.mp4',poster:'work-video-03.jpg',title:'Hotel bedroom woodwork',label:'GUEST ROOM · HEADBOARD & BEDSIDE FINISH',description:'A finished guest room with coordinated wall, headboard and bedside details.',service:'bedroom',duration:'00:58'},
  {file:'work-video-04.mp4',poster:'work-video-04.jpg',title:'Arched partition detail',label:'ARCHED PARTITION · FEATURE WALL',description:'An on-site view of a decorative arched partition and feature wall.',service:'tv',duration:'00:19'},
  {file:'work-video-06.mp4',poster:'work-video-06.jpg',title:'Guest bedroom finishing',label:'BEDROOM · CUSTOM INTERIOR DETAILS',description:'A bedroom walkthrough showing wall finishes, storage and furniture details.',service:'bedroom',duration:'00:33'},
];

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const floatActions = document.createElement('div');
floatActions.className = 'float-actions';
floatActions.innerHTML = `<a class="float-button float-whatsapp" href="https://wa.me/919164666608" target="_blank" rel="noreferrer" aria-label="Chat with Tuki Interior on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.5 12.5 0 0 0 5.2 22l-1.7 6.3 6.5-1.7A12.5 12.5 0 1 0 16 3.2Z"/><path d="M12.3 10.2c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.5 1.5-1.5 3.6s1.5 4.1 1.7 4.4c.2.3 2.9 4.6 7.1 6.2 3.5 1.4 4.2 1.1 5 .9.8-.1 2.5-1 2.9-2 .4-1 .4-1.8.3-2-.1-.2-.4-.3-.8-.5l-2.8-1.3c-.4-.2-.7-.3-1 .2-.3.4-1.1 1.3-1.4 1.6-.3.3-.5.3-1 .1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.7-.8.2-.3.3-.4.4-.7.1-.3 0-.5 0-.7l-1.2-3.1Z"/></svg><span>WhatsApp</span></a><a class="float-button float-call" href="tel:+919164666608" aria-label="Call Tuki Interior"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z"/></svg><span>Call</span></a>`;
document.body.append(floatActions);
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !expanded);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    }
  });
  const currentPath = location.pathname.replace(/\/$/, '') || '/';
  nav.querySelectorAll('a').forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';
    if (linkPath === currentPath) link.setAttribute('aria-current', 'page');
  });
}

const gallery = document.querySelector('#gallery');
const lightbox = document.querySelector('#lightbox');
let current = 0;
const currentSection = location.pathname.split('/').pop().replace('.html', '');
const pageService = currentSection === 'kitchen' ? 'kitchen' : currentSection === 'bedroom' ? 'bedroom' : currentSection === 'living-room' ? 'living' : 'living';
function enquiryHref(title, service = pageService) {
  return `/contact.html?project=${encodeURIComponent(title)}&service=${encodeURIComponent(service)}`;
}
document.querySelectorAll('a.service-card').forEach(link => {
  const article = document.createElement('article');
  article.className = 'service-card';
  const detail = document.createElement('a');
  detail.className = 'service-card-main';
  detail.href = link.href;
  detail.innerHTML = link.innerHTML;
  const title = detail.querySelector('h2')?.textContent.replace('↗', '').trim() || 'this interior design';
  const category = link.pathname.includes('kitchen') ? 'kitchen' : link.pathname.includes('bedroom') ? 'bedroom' : 'living';
  const ask = document.createElement('a');
  ask.className = 'project-enquiry';
  ask.href = enquiryHref(title, category);
  ask.innerHTML = '<span>Enquire about this design</span><span aria-hidden="true">↗</span>';
  article.append(detail, ask);
  link.replaceWith(article);
});
document.querySelectorAll('.hero-image img, .feature-image img').forEach(image => {
  const title = image.alt || 'this interior design';
  const ask = document.createElement('a');
  ask.className = 'image-enquiry';
  ask.href = enquiryHref(title);
  ask.innerHTML = 'Enquire about a similar design <span aria-hidden="true">↗</span>';
  image.parentElement.append(ask);
});
document.querySelectorAll('.image-pair img').forEach(image => {
  const wrapper = document.createElement('div');
  wrapper.className = 'related-image';
  image.before(wrapper);
  wrapper.append(image);
  const ask = document.createElement('a');
  ask.className = 'image-enquiry';
  ask.href = enquiryHref(image.alt || 'this interior design');
  ask.innerHTML = 'Enquire about a similar design <span aria-hidden="true">↗</span>';
  wrapper.append(ask);
});
function openImage(index) {
  if (!lightbox) return;
  current = index;
  const project = projects[current];
  lightbox.querySelector('img').src = `/images/${project.file}`;
  lightbox.querySelector('img').alt = project.title;
  lightbox.querySelector('figcaption').textContent = `${project.label} · ${project.title} · ${String(current + 1).padStart(2, '0')} / ${projects.length}`;
  if (!lightbox.open) lightbox.showModal();
}
function stepImage(direction) { openImage((current + direction + projects.length) % projects.length); }

if (gallery) {
  projects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.dataset.category = project.category;
    const imageButton = document.createElement('button');
    imageButton.className = 'project-image';
    imageButton.type = 'button';
    imageButton.setAttribute('aria-label', `View full image: ${project.title}`);
    imageButton.innerHTML = `<img src="/images/${project.file}" alt="${project.title}" loading="lazy" decoding="async"><span class="project-caption">${project.label} <span>· ${String(index + 1).padStart(2, '0')}</span></span>`;
    imageButton.addEventListener('click', () => openImage(index));
    const enquiry = document.createElement('a');
    enquiry.className = 'project-enquiry';
    enquiry.href = enquiryHref(project.title, project.category);
    enquiry.innerHTML = '<span>Enquire about this design</span><span aria-hidden="true">↗</span>';
    card.append(imageButton, enquiry);
    gallery.append(card);
  });
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    const category = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  }));
}

if (lightbox) {
  lightbox.querySelector('.close').addEventListener('click', () => lightbox.close());
  lightbox.querySelector('.prev').addEventListener('click', () => stepImage(-1));
  lightbox.querySelector('.next').addEventListener('click', () => stepImage(1));
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  document.addEventListener('keydown', event => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowLeft') stepImage(-1);
    if (event.key === 'ArrowRight') stepImage(1);
  });
}

function buildProjectVideo(item, index, preload = 'none') {
  const video = document.createElement('video');
  video.controls = true;
  video.playsInline = true;
  video.preload = preload;
  video.poster = `/images/video-posters/${item.poster}`;
  video.setAttribute('aria-label', `${item.title} video with audio`);
  video.innerHTML = `<source src="/videos/${item.file}" type="video/mp4">Your browser does not support MP4 video.`;
  return video;
}

const homeVideoCarousel = document.querySelector('#home-video-carousel');
if (homeVideoCarousel) {
  const stage = document.createElement('div');
  stage.className = 'carousel-stage';
  stage.tabIndex = 0;
  stage.setAttribute('aria-label', 'Use left and right arrow keys to change video');
  const slides = workVideos.map((item, index) => {
    const slide = document.createElement('figure');
    slide.className = 'video-frame carousel-slide';
    slide.hidden = index !== 0;
    const video = buildProjectVideo(item, index, index === 0 ? 'metadata' : 'none');
    const caption = document.createElement('figcaption');
    caption.textContent = `${String(index + 1).padStart(2, '0')} / ${String(workVideos.length).padStart(2, '0')}  ·  ${item.label}  ·  ${item.duration}`;
    slide.append(video, caption);
    stage.append(slide);
    return slide;
  });
  const controls = document.createElement('div');
  controls.className = 'carousel-controls';
  controls.innerHTML = '<button class="carousel-arrow carousel-prev" type="button" aria-label="Previous video">←</button><div class="carousel-dots" role="group" aria-label="Choose project video"></div><span class="carousel-count" aria-live="polite">01 / 05</span><button class="carousel-arrow carousel-next" type="button" aria-label="Next video">→</button>';
  const dots = controls.querySelector('.carousel-dots');
  const dotButtons = workVideos.map((item, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Play ${item.title} video`);
    dot.setAttribute('aria-pressed', String(index === 0));
    dot.addEventListener('click', () => showSlide(index));
    dots.append(dot);
    return dot;
  });
  let activeSlide = 0;
  function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== activeSlide;
      if (slideIndex !== activeSlide) slide.querySelector('video').pause();
    });
    dotButtons.forEach((dot, dotIndex) => dot.setAttribute('aria-pressed', String(dotIndex === activeSlide)));
    controls.querySelector('.carousel-count').textContent = `${String(activeSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  controls.querySelector('.carousel-prev').addEventListener('click', () => showSlide(activeSlide - 1));
  controls.querySelector('.carousel-next').addEventListener('click', () => showSlide(activeSlide + 1));
  stage.addEventListener('keydown', event => {
    if (event.target.closest('video')) return;
    if (event.key === 'ArrowLeft') showSlide(activeSlide - 1);
    if (event.key === 'ArrowRight') showSlide(activeSlide + 1);
  });
  let touchStart = null;
  stage.addEventListener('touchstart', event => { touchStart = event.changedTouches[0].clientX; }, {passive:true});
  stage.addEventListener('touchend', event => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 45) showSlide(activeSlide + (delta < 0 ? 1 : -1));
    touchStart = null;
  }, {passive:true});
  homeVideoCarousel.append(stage, controls);
}

const videoGallery = document.querySelector('#video-gallery-grid');
if (videoGallery) {
  workVideos.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'video-card';
    const figure = document.createElement('figure');
    figure.className = 'video-card-media';
    figure.append(buildProjectVideo(item, index));
    const caption = document.createElement('figcaption');
    caption.innerHTML = `<span>VIDEO ${String(index + 1).padStart(2, '0')} · ${item.label}</span><h3>${item.title}</h3><p>${item.description}</p>`;
    figure.append(caption);
    const enquiry = document.createElement('a');
    enquiry.className = 'project-enquiry';
    enquiry.href = enquiryHref(item.title, item.service);
    enquiry.innerHTML = '<span>Enquire about similar work</span><span aria-hidden="true">↗</span>';
    card.append(figure, enquiry);
    videoGallery.append(card);
  });
}

const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
  const params = new URLSearchParams(location.search);
  const projectName = params.get('project');
  const projectService = params.get('service');
  const serviceOptions = {kitchen:'Modular kitchen',bedroom:'Bedroom / wardrobe',wardrobe:'Bedroom / wardrobe',tv:'TV panel / living room',living:'TV panel / living room'};
  const serviceSelect = enquiryForm.querySelector('[name="service"]');
  if (serviceSelect && serviceOptions[projectService]) serviceSelect.value = serviceOptions[projectService];
  if (projectName) {
    const message = enquiryForm.querySelector('[name="message"]');
    if (message) message.value = `I would like to enquire about a design similar to “${projectName}”. Please contact me to discuss this project.`;
  }
  enquiryForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!enquiryForm.reportValidity()) return;
    const data = new FormData(enquiryForm);
    const message = `Hello Tuki Interior, my name is ${data.get('name')}.\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nMessage: ${data.get('message') || 'I would like to discuss my project.'}`;
    window.open(`https://wa.me/919164666608?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}
