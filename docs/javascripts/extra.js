// Professional MCP Documentation JavaScript

// GitHub stars fetcher for header button
async function fetchGitHubStars() {
  try {
    const response = await fetch('https://api.github.com/repos/how-mcp-works/how-mcp-works.github.io');
    const data = await response.json();
    
    const starCount = document.getElementById('github-star-count');
    if (starCount && data.stargazers_count !== undefined) {
      starCount.textContent = data.stargazers_count;
    }
  } catch (error) {
    console.error('Failed to fetch GitHub stars:', error);
    // Fallback to star icon
    const starCount = document.getElementById('github-star-count');
    if (starCount) {
      starCount.textContent = '⭐';
    }
  }
}

// Theme persistence and initialization
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-md-color-scheme', savedTheme === 'dark' ? 'slate' : 'default');
}

// Enhanced copy code button functionality
function initializeCodeCopy() {
  document.querySelectorAll('.highlight').forEach(block => {
    if (block.querySelector('.copy-button')) return;
    
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    
    block.style.position = 'relative';
    block.appendChild(copyButton);
    
    copyButton.addEventListener('click', async () => {
      const code = block.querySelector('pre').textContent;
      try {
        await navigator.clipboard.writeText(code);
        copyButton.textContent = 'Copied!';
        copyButton.style.background = 'var(--mcp-primary-light)';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
          copyButton.style.background = 'var(--mcp-primary)';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code:', err);
        copyButton.textContent = 'Failed';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      }
    });
  });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.md-header')?.offsetHeight || 60;
        const targetPosition = target.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
}

// Responsive navigation toggle for mobile
function initializeMobileNav() {
  // Create mobile menu toggle button
  const navToggle = document.createElement('button');
  navToggle.className = 'md-nav-toggle';
  navToggle.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  `;
  navToggle.style.cssText = `
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1001;
    background: var(--mcp-primary);
    color: white;
    border: none;
    padding: 0.75rem;
    border-radius: var(--mcp-radius);
    cursor: pointer;
    box-shadow: var(--mcp-shadow-lg);
    transition: all 0.2s ease;
  `;
  
  document.body.appendChild(navToggle);
  
  navToggle.addEventListener('click', () => {
    const nav = document.querySelector('.md-nav--primary');
    if (nav) {
      nav.classList.toggle('md-nav--open');
      navToggle.style.background = nav.classList.contains('md-nav--open') 
        ? 'var(--mcp-primary-dark)' 
        : 'var(--mcp-primary)';
    }
  });
  
  // Show/hide toggle based on screen size
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const handleMediaQuery = (e) => {
    navToggle.style.display = e.matches ? 'block' : 'none';
    if (!e.matches) {
      const nav = document.querySelector('.md-nav--primary');
      if (nav) {
        nav.classList.remove('md-nav--open');
      }
    }
  };
  
  mediaQuery.addEventListener('change', handleMediaQuery);
  handleMediaQuery(mediaQuery);
}

// Enhanced search functionality
function initializeSearch() {
  const searchInput = document.querySelector('input[data-md-component="search-query"]');
  if (searchInput) {
    searchInput.setAttribute('placeholder', 'Search documentation...');
    
    // Add search keyboard shortcut (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }
}

// Page scroll progress indicator
function initializeScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--mcp-primary);
    z-index: 1000;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
  });
}

// Back to top button
function initializeBackToTop() {
  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
    </svg>
  `;
  backToTopButton.style.cssText = `
    position: fixed;
    bottom: 6rem;
    right: var(--mcp-space-6);
    background: var(--mcp-bg-secondary);
    border: 1px solid var(--mcp-border);
    color: var(--mcp-text-primary);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  document.body.appendChild(backToTopButton);
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.visibility = 'visible';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.visibility = 'hidden';
    }
  });
}

// Table of contents highlighting
function initializeTocHighlight() {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const tocLinks = document.querySelectorAll('.md-nav__link[href^="#"]');
  
  if (headings.length === 0 || tocLinks.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          // Remove active class from all TOC links
          tocLinks.forEach(link => link.classList.remove('md-nav__link--active'));
          
          // Add active class to current TOC link
          const activeLink = document.querySelector(`.md-nav__link[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add('md-nav__link--active');
          }
        }
      }
    });
  }, {
    rootMargin: '-20% 0% -35% 0%',
    threshold: 0
  });
  
  headings.forEach(heading => {
    if (heading.getAttribute('id')) {
      observer.observe(heading);
    }
  });
}

// Enhanced code block interactions
function initializeCodeEnhancements() {
  document.querySelectorAll('.highlight').forEach(block => {
    // Add language label
    const codeElement = block.querySelector('code[class*="language-"]');
    if (codeElement) {
      const langClass = Array.from(codeElement.classList).find(cls => cls.startsWith('language-'));
      if (langClass) {
        const language = langClass.replace('language-', '');
        const langLabel = document.createElement('div');
        langLabel.className = 'code-language';
        langLabel.textContent = language.toUpperCase();
        langLabel.style.cssText = `
          position: absolute;
          top: var(--mcp-space-2);
          left: var(--mcp-space-3);
          background: var(--mcp-bg-secondary);
          color: var(--mcp-text-muted);
          padding: var(--mcp-space-1) var(--mcp-space-2);
          border-radius: var(--mcp-radius-sm);
          font-size: var(--mcp-text-xs);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        `;
        block.style.position = 'relative';
        block.appendChild(langLabel);
      }
    }
  });
}

// Performance monitoring
function initializePerformanceMonitoring() {
  // Monitor page load performance
  window.addEventListener('load', () => {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      
      if (loadTime > 3000) {
        console.warn('Page load time is slow:', loadTime + 'ms');
      }
    }
  });
  
  // Monitor scroll performance
  let scrolling = false;
  window.addEventListener('scroll', () => {
    if (!scrolling) {
      requestAnimationFrame(() => {
        scrolling = false;
      });
      scrolling = true;
    }
  });
}

// Version display
function initializeVersionDisplay() {
  const versionBadge = document.createElement('div');
  versionBadge.className = 'version-badge';
  versionBadge.textContent = 'v1.0.0';
  versionBadge.title = 'Documentation Version';
  document.body.appendChild(versionBadge);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  fetchGitHubStars();
  initializeCodeCopy();
  initializeSmoothScrolling();
  initializeMobileNav();
  initializeSearch();
  initializeScrollProgress();
  initializeBackToTop();
  initializeTocHighlight();
  initializeCodeEnhancements();
  initializeVersionDisplay();
  initializePerformanceMonitoring();
});

// Handle theme toggle persistence
document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(() => {
    const scheme = document.documentElement.getAttribute('data-md-color-scheme');
    if (scheme) {
      localStorage.setItem('theme', scheme === 'slate' ? 'dark' : 'light');
    }
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-md-color-scheme']
  });
});

// Re-initialize dynamic content on navigation (SPA behavior)
document.addEventListener('DOMContentLoaded', () => {
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      // Re-initialize components that might need refresh
      setTimeout(() => {
        initializeCodeCopy();
        initializeCodeEnhancements();
        initializeTocHighlight();
      }, 100);
    }
  }).observe(document.body, { childList: true, subtree: true });
});

// Add some utility functions for external use
window.mcpDocs = {
  scrollToElement: (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerHeight = document.querySelector('.md-header')?.offsetHeight || 60;
      const targetPosition = element.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },
  
  toggleTheme: () => {
    const currentScheme = document.documentElement.getAttribute('data-md-color-scheme');
    const newScheme = currentScheme === 'slate' ? 'default' : 'slate';
    document.documentElement.setAttribute('data-md-color-scheme', newScheme);
  },
  
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
      return false;
    }
  }
};