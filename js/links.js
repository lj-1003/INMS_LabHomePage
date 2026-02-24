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

//Render
function renderLinks(links) {
    student = links.student; //student resources array
    lab = links.lab; //lab resources array
    
    //Test to see if getting data---------------------------
    console.log("Loading links...");
    console.log(links);
    console.log(student);
    console.log(lab);
    //-------------------------------------------------------

    //Render on Page
    const container = document.getElementById("link-btn-grid1");
    container.innerHTML = "";
    student.forEach((student) => {
        const div = document.createElement("div");
        div.className = "waves-effect waves-light btn fhsu-gold black-text";
        div.innerHTML = `
        <a href="${student.url}" 
            target="_blank">${student.title}
        </a>
        `;
        container.appendChild(div);
    });
    }