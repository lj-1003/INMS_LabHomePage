document.addEventListener("DOMContentLoaded", async () => {
  const links = await getLinks();
  renderLinks(links);
});

//Get from json
async function getLinks() {
    const response = await fetch("../data/links.json");
    const data = await response.json();
    return data;
}

//Render
function renderLinks(links) {

    //Test to see if getting data
    console.log("Loading links...")
    links.forEach((link) => {
    console.log(`   ${link.title}: ${link.url}`);
    })

    //For real
    const container = document.getElementById("link-btn-grid");
    container.innerHTML = "";
    links.forEach((link) => {
        const div = document.createElement("div");
        div.className = "waves-effect waves-light btn fhsu-gold black-text";
        div.innerHTML = `
        <a href="${link.url}" 
            target="_blank">${link.url}
            class="waves-effect waves-light btn fhsu-gold black-text">
        </a>
        `;
        container.appendChild(div);
    });
}