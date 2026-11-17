

// task 1 
let themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }

});

// task 2

let moreButton = document.getElementById("more-button");
let moreText = document.getElementById("more-text");

moreButton.addEventListener("click", function() {

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        moreButton.textContent = "Show Less";
    } else {
        moreText.style.display = "none";
        moreButton.textContent = "Show More";
    }

});


// task 3 and 4 cadrs+ filter

let projects = [
    {
        title: "Citation Coach",
        description: "An AI-powered platform for checking students' citation skills.",
        category: "Web",
        technologies: "HTML, CSS, JavaScript, AI"
    },

    {
        title: "SoomX Auction System",
        description: "A JavaFX application for managing auctions and bids.",
        category: "Programming",
        technologies: "Java, JavaFX, MySQL"
    }
];




function displayProjects(category) {

    let container = document.getElementById("projects-logic");

    container.innerHTML = "";

    projects.forEach(function(project) {

        if (category === "All" || project.category === category) {

            let card = document.createElement("article");
            card.classList.add("project-card");

            let title = document.createElement("h3");
            title.textContent = project.title;

            let description = document.createElement("p");
            description.textContent = project.description;

            let projectCategory = document.createElement("p");
            projectCategory.textContent = "Category: " + project.category;

            let technologies = document.createElement("p");
            technologies.textContent = "Technologies: " + project.technologies;

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(projectCategory);
            card.appendChild(technologies);

            container.appendChild(card);
        }

    });

}


let allButton = document.getElementById("all-button");
let webButton = document.getElementById("web-button");
let programmingButton = document.getElementById("programming-button");


allButton.addEventListener("click", function() {
    displayProjects("All");
});

webButton.addEventListener("click", function() {
    displayProjects("Web");
});

programmingButton.addEventListener("click", function() {
    displayProjects("Programming");
});


displayProjects("All");


// Task 5

let printButton = document.getElementById("print-button");

printButton.addEventListener("click", function() {
    window.print();
});