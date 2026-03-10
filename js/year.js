//This keeps copyright year up to date dynamically
const year = new Date().getFullYear();
const copyrightMessage = `© ${year} Institute for New Media Studies`;
document.getElementById("footer-copyright").textContent = copyrightMessage;