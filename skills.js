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

// Function to render skills on the page
function renderSkills() {
  const skillsList = document.getElementById('skills-list');
  
  // Clear any existing content
  skillsList.innerHTML = '';
  
  // Create and append skill icons
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-logo';
    skillElement.title = skill.name; // Add tooltip
    
    // Create the image element using Simple Icons CDN
    const iconImg = document.createElement('img');
    iconImg.src = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`;
    iconImg.alt = skill.name;
    iconImg.style.width = '30px';
    iconImg.style.height = '30px';
    
    // Append the image to the skill element
    skillElement.appendChild(iconImg);
    
    // Append the skill element to the skills list
    skillsList.appendChild(skillElement);
  });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderSkills);
