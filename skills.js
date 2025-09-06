// Debug-friendly skills rendering

const skills = [
  { name: 'C++', icon: 'cplusplus' },
  { name: 'Python', icon: 'python' },
  { name: 'Django', icon: 'django' },
  { name: 'Java', icon: 'java' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'React', icon: 'react' },
  { name: 'React Native', icon: 'react' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'R', icon: 'r' },
  { name: 'LaTeX', icon: 'latex' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Git', icon: 'git' },
  { name: 'Android', icon: 'android' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Flutter', icon: 'flutter' },
  { name: 'C#', icon: 'csharp' },
  { name: '.NET', icon: 'dotnet' }
];

const ICON_COLOR = '2d6cdf';              // hex without #
const ICON_CDN = 'https://cdn.simpleicons.org'; 
// Example full URL: https://cdn.simpleicons.org/python/2d6cdf

function log(msg) {
  console.log('[skills]', msg);
  const dbg = document.getElementById('skills-debug');
  if (dbg) {
    const line = document.createElement('div');
    line.textContent = msg;
    dbg.appendChild(line);
  }
}

function renderSkills() {
  log('DOMContentLoaded fired.');
  const skillsList = document.getElementById('skills-list');
  if (!skillsList) {
    log('ERROR: #skills-list not found.');
    return;
  }

  skillsList.innerHTML = '';
  const fragment = document.createDocumentFragment();

  skills.forEach(skill => {
    const item = document.createElement('div');
    item.className = 'skill-item';
    item.title = skill.name;

    const logo = document.createElement('div');
    logo.className = 'skill-logo';

    const img = document.createElement('img');
    img.alt = skill.name;
    img.decoding = 'async';
    img.loading = 'lazy';
    img.src = `${ICON_CDN}/${skill.icon}/${ICON_COLOR}`;

    img.addEventListener('load', () => {
      log(`Loaded: ${skill.icon}`);
    });

    img.addEventListener('error', () => {
      log(`FAILED: ${skill.icon} – showing fallback`);
      logo.innerHTML = '';
      const fallback = document.createElement('div');
      fallback.className = 'skill-fallback';
      fallback.textContent = skill.name.replace(/[^A-Za-z+#.]/g,'').slice(0,6);
      logo.appendChild(fallback);
    });

    logo.appendChild(img);

    const label = document.createElement('span');
    label.textContent = skill.name;

    item.appendChild(logo);
    item.appendChild(label);
    fragment.appendChild(item);
  });

  skillsList.appendChild(fragment);
  log('Finished rendering skills.');
}

document.addEventListener('DOMContentLoaded', renderSkills);
