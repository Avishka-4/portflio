// skills.js – clean production version (with minimal silent retry)

const SKILLS = [
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

const ICON_COLOR = '2d6cdf';
const ICON_BASE = 'https://cdn.simpleicons.org';
// Example final URL: https://cdn.simpleicons.org/python/2d6cdf

function buildIconURL(slug) {
  return `${ICON_BASE}/${slug}/${ICON_COLOR}`;
}

function createSkillElement(skill) {
  const item = document.createElement('div');
  item.className = 'skill-item';
  item.title = skill.name;

  const logo = document.createElement('div');
  logo.className = 'skill-logo';

  const img = document.createElement('img');
  img.alt = skill.name;
  img.decoding = 'async';
  img.loading = 'lazy';
  img.src = buildIconURL(skill.icon);

  // Retry once on error before fallback
  let tried = false;
  img.addEventListener('error', () => {
    if (!tried) {
      tried = true;
      setTimeout(() => { img.src = buildIconURL(skill.icon); }, 300);
      return;
    }
    logo.innerHTML = '';
    const fb = document.createElement('div');
    fb.className = 'skill-fallback';
    fb.textContent = skill.name.replace(/[^A-Za-z+#.]/g,'').slice(0,6);
    logo.appendChild(fb);
  });

  logo.appendChild(img);

  const label = document.createElement('span');
  label.textContent = skill.name;

  item.appendChild(logo);
  item.appendChild(label);
  return item;
}

function renderSkills() {
  const list = document.getElementById('skills-list');
  if (!list) return;
  const frag = document.createDocumentFragment();
  SKILLS.forEach(skill => frag.appendChild(createSkillElement(skill)));
  list.appendChild(frag);
}

document.addEventListener('DOMContentLoaded', renderSkills);
