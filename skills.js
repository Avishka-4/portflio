
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
    // Use a minimal SVG resembling the official Java logo (blue cup, red steam)
    if (skill.name === 'Java') {
      img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><ellipse cx="24" cy="36" rx="10" ry="4" fill="#5382a1"/><rect x="14" y="24" width="20" height="10" rx="5" fill="#5382a1"/><path d="M24 18 Q22 14 24 10 Q26 14 24 18" stroke="#e76f00" stroke-width="2" fill="none"/></svg>';
    } else {
      img.src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`;
    }
    img.alt = skill.name;
    img.style.width = '70%';
    img.style.height = '70%';
    div.appendChild(img);
    skillsContainer.appendChild(div);
  });
});
