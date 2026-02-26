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
            class="btn-size hover waves-effect waves-light btn-large fhsu-gold black-text"
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
    student = links.student; //student resources array
    lab = links.lab; //lab resources array
    grid1 = "link-btn-grid1"
    grid2 = "link-btn-grid2"
    
    //Test to see if getting data---------------------------
    console.log("Loading links...");
    console.log(links);
    console.log(student);
    console.log(lab);
    //-------------------------------------------------------

    //Render on Page
    baseRender(student, grid1);
    baseRender(lab, grid2);
    }