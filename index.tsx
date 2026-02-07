// Initialize Lucide icons
// @ts-ignore
if (typeof window !== 'undefined' && window.lucide) {
    // @ts-ignore
    window.lucide.createIcons();
}

function initUI() {
  console.log("Initializing UI (Vanilla)...");

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

  function switchTab(tabId: string) {
    console.log("Switching to tab:", tabId);
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
    
    const target = document.getElementById(`tab-${tabId}`);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
      if (link.getAttribute('data-tab') === tabId) {
        link.classList.add('active');
        link.classList.remove('text-slate-400');
      } else {
        link.classList.remove('active');
        link.classList.add('text-slate-400');
      }
    });

    mobileMenu?.classList.remove('active');
  }

  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const tabId = trigger.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('active');
  });

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
    window.location.href = "https://app.educater.co.za";
  });

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Replace this URL with your Formspree Endpoint or keep using the random one for testing
    // Get your own free endpoint at https://formspree.io/
    const FORM_ENDPOINT = "https://formspree.io/f/xeelqrel"; 

    const formData = new FormData(contactForm);
    const btn = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
    const btnText = btn.innerText;
    
    try {
        btn.innerText = "Sending...";
        btn.disabled = true;

        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            contactForm.classList.add('hidden');
            successMsg?.classList.remove('hidden');
            contactForm.reset();
        } else {
            alert('Oops! There was a problem submitting your form. Please email us directly.');
        }
    } catch (error) {
        alert('Oops! There was a problem submitting your form. Please email us directly.');
    } finally {
        btn.innerText = btnText;
        btn.disabled = false;
    }
  });

  resetContact?.addEventListener('click', () => {
    successMsg?.classList.add('hidden');
    contactForm?.classList.remove('hidden');
    contactForm?.reset();
  });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
} else {
    initUI();
}
