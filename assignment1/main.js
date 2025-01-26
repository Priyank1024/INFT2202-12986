// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready!');
});
// Change the "Opportunities" link text to "Volunteer Now"
const opportunitiesLink = document.querySelector('a[href="opportunities.html"]');
if (opportunitiesLink) {
    opportunitiesLink.textContent = "opportunities";}
