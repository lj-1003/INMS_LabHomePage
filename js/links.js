document.addEventListener("DOMContentLoaded", async () => {
  const links = await getLinks();
  renderLinks(links);
});

//Get from json
async function getLinks() {
    const response = await fetch("../data/data.json");
    const data = await response.json();
    return data;
}

//Template for rendering
function baseRender(category, grid) {
    const container = document.getElementById(grid);
    container.innerHTML = "";
    category.forEach((category) => {
        const div = document.createElement("div");
        //div.className = "waves-effect waves-light btn fhsu-gold black-text";
        div.innerHTML = `
        <a 
            class="btn-size hover btn-large fhsu-gold black-text"
            href="${category.url}"
            target="_blank">
            <img class="image-icon left" src="${category.image}">
        ${category.title}</a>
        `;
        container.appendChild(div);
    });
}

//Renders based on category from JSON
function renderLinks(links) {
    lab = links.lab; //tools resources array
    tools = links.tools; //tools resources array
    student = links.student; //student resources array
    grid1 = "link-btn-grid1"
    grid2 = "link-btn-grid2"
    grid3 = "link-btn-grid3"
    

    //Render on Page
    baseRender(lab, grid1);
    baseRender(tools, grid2);
    baseRender(student, grid3);
    
    
    }