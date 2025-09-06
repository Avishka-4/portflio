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

// Function to generate and display the skills icons
function renderSkills() {
  const skillsContainer = document.getElementById('skills-container');
  
  if (!skillsContainer) {
    console.error('Skills container element not found');
    return;
  }
  
  skills.forEach(skill => {
    // Create skill element
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    
    // Create icon using Simple Icons CDN
    const iconElement = document.createElement('img');
    iconElement.src = `https://cdn.simpleicons.org/${skill.icon}/4078c0`;
    iconElement.alt = `${skill.name} icon`;
    iconElement.title = skill.name; // Add tooltip
    iconElement.className = 'skill-icon';
    
    // Create name element
    const nameElement = document.createElement('span');
    nameElement.textContent = skill.name;
    nameElement.className = 'skill-name';
    
    // Append elements
    skillElement.appendChild(iconElement);
    skillElement.appendChild(nameElement);
    skillsContainer.appendChild(skillElement);
  });
}

// Run the render function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderSkills);
