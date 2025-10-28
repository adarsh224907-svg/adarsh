// Application State
const state = {
  currentPage: 'home',
  mobileMenuOpen: false,
  formData: {
    name: '',
    email: '',
    message: ''
  },
  formErrors: {},
  formSubmitted: false
};

// Navigation Data
const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Contact', id: 'contact' },
  { name: 'Dashboard', id: 'dashboard' }
];

// Services Data
const services = [
  {
    title: 'Responsive Design',
    description: 'Beautiful, mobile-first designs that work on all devices',
    icon: '📱'
  },
  {
    title: 'Fast Performance',
    description: 'Optimized code for lightning-fast load times',
    icon: '⚡'
  },
  {
    title: 'Modern UI',
    description: 'Clean and intuitive user interfaces',
    icon: '🎨'
  },
  {
    title: 'Secure',
    description: 'Built with security best practices',
    icon: '🔒'
  },
  {
    title: 'Scalable',
    description: 'Architecture that grows with your needs',
    icon: '📈'
  },
  {
    title: 'Support',
    description: 'Dedicated support and maintenance',
    icon: '💬'
  }
];

// Dashboard Metrics Data
const dashboardMetrics = [
  {
    label: 'Total Users',
    value: '1,234',
    change: '+12%',
    positive: true
  },
  {
    label: 'Active Projects',
    value: '42',
    change: '+5%',
    positive: true
  },
  {
    label: 'Revenue',
    value: '$15,678',
    change: '+8%',
    positive: true
  },
  {
    label: 'Completion Rate',
    value: '94%',
    change: '-2%',
    positive: false
  }
];

// Page Components
const pages = {
  home: () => `
    <div class="page">
      <section class="hero">
        <div class="hero-content">
          <h1>Build Amazing Web Applications</h1>
          <p>Create modern, responsive, and performant web applications with our cutting-edge technology stack.</p>
          <div class="hero-buttons">
            <a href="#services" class="btn btn-primary" data-page="services">Explore Services</a>
            <a href="#contact" class="btn btn-secondary" data-page="contact">Get In Touch</a>
          </div>
        </div>
      </section>
      
      <section class="section">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="cards-grid">
          <div class="card">
            <span class="card-icon">🚀</span>
            <h3>Fast Development</h3>
            <p>Rapid prototyping and development to bring your ideas to life quickly.</p>
          </div>
          <div class="card">
            <span class="card-icon">💎</span>
            <h3>Quality Code</h3>
            <p>Clean, maintainable code following industry best practices.</p>
          </div>
          <div class="card">
            <span class="card-icon">🌟</span>
            <h3>Great UX</h3>
            <p>User-centered design that delights and engages your audience.</p>
          </div>
        </div>
      </section>
    </div>
  `,

  about: () => `
    <div class="page">
      <section class="section">
        <h2 class="section-title">About Us</h2>
        <div class="about-content">
          <p>
            We are a team of passionate developers and designers dedicated to creating 
            exceptional web experiences. With years of experience in building modern 
            web applications, we understand what it takes to deliver solutions that 
            not only look great but perform exceptionally well.
          </p>
          <p>
            Our mission is to help businesses and individuals bring their digital 
            visions to life through innovative technology and thoughtful design. 
            We believe in the power of the web to transform ideas into reality.
          </p>
          
          <div class="about-features">
            <div class="feature-item">
              <h3>🎯 Our Mission</h3>
              <p>Empowering businesses with cutting-edge web solutions that drive growth and innovation.</p>
            </div>
            <div class="feature-item">
              <h3>👁️ Our Vision</h3>
              <p>To be the leading provider of modern web development solutions worldwide.</p>
            </div>
            <div class="feature-item">
              <h3>💡 Our Values</h3>
              <p>Innovation, quality, collaboration, and customer success are at the core of everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  services: () => `
    <div class="page">
      <section class="section">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">
          We offer a comprehensive suite of services to help you build, launch, 
          and scale your web applications.
        </p>
        <div class="cards-grid">
          ${services.map(service => `
            <div class="card">
              <span class="card-icon">${service.icon}</span>
              <h3>${service.title}</h3>
              <p>${service.description}</p>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `,

  contact: () => `
    <div class="page">
      <section class="section">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Have a project in mind? We'd love to hear from you. Send us a message 
          and we'll respond as soon as possible.
        </p>
        <div class="contact-container">
          ${state.formSubmitted ? `
            <div class="success-message">
              ✓ Thank you for your message! We'll get back to you soon.
            </div>
          ` : ''}
          <form id="contactForm" novalidate>
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                class="form-control ${state.formErrors.name ? 'error' : ''}"
                value="${state.formData.name}"
                placeholder="Your name"
              >
              ${state.formErrors.name ? `<span class="error-message">${state.formErrors.name}</span>` : ''}
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                class="form-control ${state.formErrors.email ? 'error' : ''}"
                value="${state.formData.email}"
                placeholder="your.email@example.com"
              >
              ${state.formErrors.email ? `<span class="error-message">${state.formErrors.email}</span>` : ''}
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                class="form-control ${state.formErrors.message ? 'error' : ''}"
                placeholder="Tell us about your project..."
              >${state.formData.message}</textarea>
              ${state.formErrors.message ? `<span class="error-message">${state.formErrors.message}</span>` : ''}
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  `,

  dashboard: () => `
    <div class="page">
      <section class="section">
        <h2 class="section-title">Dashboard</h2>
        <p class="section-subtitle">
          Monitor your key metrics and performance indicators at a glance.
        </p>
        
        <div class="metrics-grid">
          ${dashboardMetrics.map(metric => `
            <div class="metric-card">
              <div class="metric-label">${metric.label}</div>
              <div class="metric-value">${metric.value}</div>
              <div class="metric-change ${metric.positive ? 'positive' : 'negative'}">
                ${metric.change} from last month
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="dashboard-charts">
          <div class="chart-card">
            <h3>User Growth</h3>
            <div class="chart-placeholder">📊 Chart visualization</div>
          </div>
          <div class="chart-card">
            <h3>Revenue Trends</h3>
            <div class="chart-placeholder">📈 Chart visualization</div>
          </div>
        </div>
      </section>
    </div>
  `
};

// Router
function navigate(page) {
  state.currentPage = page;
  render();
  
  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
  
  // Close mobile menu
  if (state.mobileMenuOpen) {
    toggleMobileMenu();
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render
function render() {
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = pages[state.currentPage]();
  
  // Attach form event listeners if on contact page
  if (state.currentPage === 'contact') {
    attachFormListeners();
  }
}

// Form Validation
function validateForm(formData) {
  const errors = {};
  
  // Validate name
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate message
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
}

// Attach Form Listeners
function attachFormListeners() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
      
      // Validate
      const errors = validateForm(formData);
      
      if (Object.keys(errors).length === 0) {
        // Success
        state.formData = { name: '', email: '', message: '' };
        state.formErrors = {};
        state.formSubmitted = true;
        
        // Reset after 5 seconds
        setTimeout(() => {
          state.formSubmitted = false;
          render();
        }, 5000);
        
        render();
      } else {
        // Show errors
        state.formData = formData;
        state.formErrors = errors;
        state.formSubmitted = false;
        render();
      }
    });
    
    // Clear errors on input
    ['name', 'email', 'message'].forEach(field => {
      const input = document.getElementById(field);
      if (input) {
        input.addEventListener('input', () => {
          if (state.formErrors[field]) {
            delete state.formErrors[field];
            render();
          }
        });
      }
    });
  }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
  state.mobileMenuOpen = !state.mobileMenuOpen;
  const navMenu = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');
  
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
}

// Initialize App
function init() {
  // Set up navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.dataset.page;
      navigate(page);
    });
  });
  
  // Set up mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  navToggle.addEventListener('click', toggleMobileMenu);
  
  // Handle hash navigation
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash && pages[hash]) {
      navigate(hash);
    }
  });
  
  // Initial render
  const initialHash = window.location.hash.slice(1);
  if (initialHash && pages[initialHash]) {
    navigate(initialHash);
  } else {
    render();
  }
  
  // Delegate click events for dynamically created links
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('a[data-page]')) {
      e.preventDefault();
      const page = e.target.dataset.page;
      navigate(page);
    }
  });
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}