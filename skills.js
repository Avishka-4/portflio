// Use Simple Icons CDN for accurate logos and add tooltips
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
  { name: 'LaTeX', icon: 'latex' }
];

window.addEventListener('DOMContentLoaded', () => {
  const skillsContainer = document.getElementById('skills-list');
  skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skill-logo';
    div.title = skill.name;
    const img = document.createElement('img');
    img.src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`;
    img.alt = skill.name;
    img.style.width = '70%';
    img.style.height = '70%';
    div.appendChild(img);
    skillsContainer.appendChild(div);
  });
});
