
// Initialize Lucide icons
// @ts-ignore
lucide.createIcons();

// DOM References
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const downloadModal = document.getElementById('download-modal');
const modalTriggers = document.querySelectorAll('.modal-open');
const modalClose = document.getElementById('modal-close');
const modalConfirm = document.getElementById('modal-confirm');
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
const successMsg = document.getElementById('success-msg');
const resetContact = document.getElementById('reset-contact');

// Tab Switching Logic
function switchTab(tabId: string) {
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  const target = document.getElementById(`tab-${tabId}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update active state in nav
  navLinks.forEach(link => {
    if (link.getAttribute('data-tab') === tabId) {
      link.classList.add('active');
      link.classList.remove('text-slate-400');
    } else {
      link.classList.remove('active');
      link.classList.add('text-slate-400');
    }
  });

  // Auto-close mobile menu
  mobileMenu?.classList.remove('active');
}

tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const tabId = trigger.getAttribute('data-tab');
    if (tabId) switchTab(tabId);
  });
});

// Mobile Menu Toggle
menuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('active');
});

// Modal Operations
modalTriggers.forEach(btn => {
  btn.addEventListener('click', () => {
    downloadModal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

const closeModal = () => {
  downloadModal?.classList.remove('active');
  document.body.style.overflow = 'auto';
};

modalClose?.addEventListener('click', closeModal);
downloadModal?.addEventListener('click', (e) => {
  if (e.target === downloadModal) closeModal();
});

modalConfirm?.addEventListener('click', () => {
  closeModal();
  // Redirect to the dedicated App domain
  window.location.href = "https://app.educater.co.za";
});

// Contact Form Handling
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.classList.add('hidden');
  successMsg?.classList.remove('hidden');
});

resetContact?.addEventListener('click', () => {
  successMsg?.classList.add('hidden');
  contactForm?.classList.remove('hidden');
  contactForm?.reset();
});
