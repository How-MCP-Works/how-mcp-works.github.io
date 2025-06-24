// GitHub stars fetcher
async function fetchGitHubStats() {
  try {
    const response = await fetch('https://api.github.com/repos/How-MCP-Works/how-mcp-works.github.io');
    const data = await response.json();
    
    // Add stars count to header
    const headerSource = document.querySelector('.md-header__source');
    if (headerSource && data.stargazers_count !== undefined) {
      const statsSpan = document.createElement('span');
      statsSpan.className = 'github-stats';
      statsSpan.textContent = data.stargazers_count;
      headerSource.appendChild(statsSpan);
    }
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error);
  }
}

// Theme persistence
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-md-color-scheme', savedTheme);
}

// Interactive code runner
function initializeCodeRunners() {
  const codeBlocks = document.querySelectorAll('.language-python, .language-javascript, .language-typescript');
  
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

// Simulated code execution
async function runCode(codeBlock) {
  const code = codeBlock.textContent;
  const language = codeBlock.className.match(/language-(\w+)/)[1];
  
  // Show loading state
  const button = codeBlock.closest('.interactive-example').querySelector('.run-button');
  button.textContent = 'Running...';
  button.disabled = true;
  
  // Simulate execution delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Create output area
  let output = codeBlock.closest('.interactive-example').querySelector('.code-output');
  if (!output) {
    output = document.createElement('div');
    output.className = 'code-output';
    output.style.cssText = 'margin-top: 1rem; padding: 1rem; background: var(--md-code-bg-color); border-radius: 4px; font-family: "Space Mono", monospace; font-size: 0.875rem;';
    codeBlock.closest('.interactive-example').appendChild(output);
  }
  
  // Simulate output based on code content
  if (code.includes('hello') || code.includes('Hello')) {
    output.textContent = '> Hello from MCP!\n> Connection established successfully.';
  } else if (code.includes('list_tools')) {
    output.textContent = '> Available tools:\n  - calculator\n  - file_reader\n  - web_search\n  - database_query';
  } else if (code.includes('execute')) {
    output.textContent = '> Executing tool: calculator\n> Input: {"operation": "add", "a": 5, "b": 3}\n> Result: 8';
  } else {
    output.textContent = '> Code executed successfully!\n> [Simulated output]';
  }
  
  // Reset button
  button.textContent = 'Run ▶';
  button.disabled = false;
}

// Add "Next Steps" to pages dynamically
function addNextSteps() {
  const content = document.querySelector('.md-content__inner');
  if (!content || content.querySelector('.next-steps')) return;
  
  const currentPath = window.location.pathname;
  const nextSteps = getNextSteps(currentPath);
  
  if (nextSteps.length > 0) {
    const nextStepsDiv = document.createElement('div');
    nextStepsDiv.className = 'next-steps';
    nextStepsDiv.innerHTML = `
      <h3>Next Steps</h3>
      <ul>
        ${nextSteps.map(step => `<li>→ <a href="${step.url}">${step.title}</a></li>`).join('')}
      </ul>
    `;
    content.appendChild(nextStepsDiv);
  }
}

function getNextSteps(path) {
  const pathMap = {
    '/introduction/': [
      { title: 'Understand Core Concepts', url: '/concepts/what-is-mcp/' },
      { title: 'Quick Start Guide', url: '/samples/hello-mcp/' }
    ],
    '/concepts/what-is-mcp/': [
      { title: 'Why MCP Matters', url: '/concepts/why-it-matters/' },
      { title: 'How It Works', url: '/concepts/how-it-works/' }
    ],
    '/concepts/how-it-works/': [
      { title: 'Protocol Specification', url: '/spec/overview/' },
      { title: 'Build Your First Server', url: '/samples/hello-mcp/' }
    ],
    '/samples/hello-mcp/': [
      { title: 'Database Connector Tutorial', url: '/samples/database-connector/' },
      { title: 'Server Implementation Guide', url: '/impl/servers/' }
    ]
  };
  
  return pathMap[path] || [];
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  fetchGitHubStats();
  initializeCodeRunners();
  addNextSteps();
  
  // Re-initialize on navigation (for MkDocs instant loading)
  document.addEventListener('DOMContentLoaded', () => {
    initializeCodeRunners();
    addNextSteps();
  });
});

// Handle theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(() => {
    const scheme = document.documentElement.getAttribute('data-md-color-scheme');
    if (scheme) {
      localStorage.setItem('theme', scheme);
    }
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-md-color-scheme']
  });
});