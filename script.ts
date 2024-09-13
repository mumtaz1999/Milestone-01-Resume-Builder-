const toggleSkillsButton = document.getElementById('toggleSkills')!;
const skillsSection = document.querySelector('.skills')!;

toggleSkillsButton.addEventListener('click', () => {
    skillsSection.classList.toggle('hidden');
});
