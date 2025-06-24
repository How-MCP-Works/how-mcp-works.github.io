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

// Theme persistence
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-md-color-scheme', savedTheme === 'dark' ? 'slate' : 'default');
}

// Interactive code runner for code examples
function initializeCodeRunners() {
  const codeBlocks = document.querySelectorAll('.language-python, .language-javascript, .language-typescript, .language-bash');
  
  codeBlocks.forEach(block => {
    if (block.closest('.highlight').querySelector('.run-button')) return;
    
    const wrapper = document.createElement('div');
    wrapper.className = 'interactive-example';
    block.closest('.highlight').parentNode.insertBefore(wrapper, block.closest('.highlight'));
    wrapper.appendChild(block.closest('.highlight'));
    
    const runButton = document.createElement('button');
    runButton.className = 'run-button';
    runButton.textContent = 'Run ▶';
    runButton.onclick = () => runCode(block);
    wrapper.appendChild(runButton);
  });
}

// Simulated code execution for demo purposes
async function runCode(codeBlock) {
  const code = codeBlock.textContent;
  const language = codeBlock.className.match(/language-(\w+)/)?.[1] || 'text';
  
  // Show loading state
  const button = codeBlock.closest('.interactive-example').querySelector('.run-button');
  const originalText = button.textContent;
  button.textContent = 'Running...';
  button.disabled = true;
  
  // Simulate execution delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Create output area
  let output = codeBlock.closest('.interactive-example').querySelector('.code-output');
  if (!output) {
    output = document.createElement('div');
    output.className = 'code-output';
    output.style.cssText = `
      margin-top: 1rem; 
      padding: 1rem; 
      background: #1e1e1e; 
      color: #f8f8f2;
      border-radius: 4px; 
      font-family: "Space Mono", monospace; 
      font-size: 0.85rem;
      border: 1px solid #333;
    `;
    codeBlock.closest('.interactive-example').appendChild(output);
  }
  
  // Generate appropriate output based on code content and language
  let result = '';
  
  if (code.includes('hello') || code.includes('Hello')) {
    result = '> Hello from MCP!\n> Connection established successfully.';
  } else if (code.includes('list_tools')) {
    result = '> Available tools:\n  - calculator\n  - file_reader\n  - web_search\n  - database_query';
  } else if (code.includes('mcp-server') || code.includes('mkdocs')) {
    result = '> Server started successfully\n> Listening on http://localhost:8000\n> Ready to accept connections';
  } else if (code.includes('git') && code.includes('push')) {
    result = '> Enumerating objects: 42, done.\n> Counting objects: 100% (42/42), done.\n> To github.com:how-mcp-works/how-mcp-works.github.io.git\n> main -> main';
  } else if (language === 'bash' || language === 'shell') {
    result = '> Command executed successfully\n> Exit code: 0';
  } else if (language === 'python') {
    result = '> Python 3.11.0\n> Code executed successfully\n> [Simulated output]';
  } else {
    result = '> Code executed successfully!\n> [Simulated output for demonstration]';
  }
  
  output.textContent = result;
  
  // Reset button
  button.textContent = originalText;
  button.disabled = false;
}

// Mobile navigation toggle
function initializeMobileNav() {
  const navToggle = document.createElement('button');
  navToggle.className = 'md-nav-toggle';
  navToggle.innerHTML = '☰';
  navToggle.style.cssText = `
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1001;
    background: var(--md-accent-fg-color);
    color: var(--md-default-bg-color);
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 1.2rem;
    cursor: pointer;
  `;
  
  document.body.appendChild(navToggle);
  
  navToggle.addEventListener('click', () => {
    const nav = document.querySelector('.md-nav--primary');
    if (nav) {
      nav.classList.toggle('md-nav--open');
    }
  });
  
  // Show toggle on mobile
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  const handleMediaQuery = (e) => {
    navToggle.style.display = e.matches ? 'block' : 'none';
  };
  
  mediaQuery.addListener(handleMediaQuery);
  handleMediaQuery(mediaQuery);
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
}

// Copy code button functionality
function initializeCodeCopy() {
  document.querySelectorAll('.highlight').forEach(block => {
    if (block.querySelector('.copy-button')) return;
    
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    copyButton.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: var(--md-accent-fg-color);
      color: var(--md-default-bg-color);
      border: none;
      padding: 0.3rem 0.6rem;
      border-radius: 3px;
      font-size: 0.75rem;
      cursor: pointer;
      font-family: "Space Mono", monospace;
    `;
    
    block.style.position = 'relative';
    block.appendChild(copyButton);
    
    copyButton.addEventListener('click', async () => {
      const code = block.querySelector('pre').textContent;
      try {
        await navigator.clipboard.writeText(code);
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
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

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  fetchGitHubStars();
  initializeCodeRunners();
  initializeMobileNav();
  initializeSmoothScrolling();
  initializeCodeCopy();
  
  // Re-initialize dynamic content on navigation
  document.addEventListener('DOMContentLoaded', () => {
    initializeCodeRunners();
    initializeCodeCopy();
  });
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

// Add version selector (placeholder for future use)
function addVersionSelector() {
  const header = document.querySelector('.md-header__inner');
  if (header && !document.querySelector('.version-selector')) {
    const versionDiv = document.createElement('div');
    versionDiv.className = 'version-selector';
    versionDiv.style.cssText = `
      margin-left: 1rem;
      margin-right: auto;
      font-size: 0.85rem;
      color: var(--md-accent-fg-color);
    `;
    versionDiv.textContent = 'v1.0';
    
    const title = header.querySelector('.md-header__title');
    if (title) {
      title.appendChild(versionDiv);
    }
  }
}

// Initialize version selector
document.addEventListener('DOMContentLoaded', addVersionSelector);