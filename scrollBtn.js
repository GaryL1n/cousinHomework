// 選取元素
const profileBtn = document.querySelector('.profileBtn');
const educationBtn = document.querySelector('.educationBtn');
const skillsBtn = document.querySelector('.skillsBtn');
const interestsBtn = document.querySelector('.interestsBtn');

function goToProfile() {
    const profile = document.querySelector('#profile');
    profile.scrollIntoView({ behavior: 'smooth' });
}
function goToEducation() {
    const education = document.querySelector('#education');
    education.scrollIntoView({ behavior: 'smooth' });
}
function goToSkills() {
    const skills = document.querySelector('#skills');
    skills.scrollIntoView({ behavior: 'smooth' });
}
function goToInterests() {
    const interests = document.querySelector('#interests');
    interests.scrollIntoView({ behavior: 'smooth' });
}

profileBtn.addEventListener('click', goToProfile);
educationBtn.addEventListener('click', goToEducation);
skillsBtn.addEventListener('click', goToSkills);
interestsBtn.addEventListener('click', goToInterests);

const topBtn = document.querySelector('.top-btn');
function goToTop() {
    scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
topBtn.addEventListener('click', goToTop);
