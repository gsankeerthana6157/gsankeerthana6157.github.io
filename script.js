const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" }
};

const projectList = document.getElementById("projectList");
const displayFrame = document.getElementById("displayFrame");

// Generate project links dynamically
Object.keys(works).forEach(key => {
    let listItem = document.createElement("li");
    listItem.textContent = works[key].title;

    // Change iframe source on click
    listItem.onclick = () => {
        displayFrame.src = works[key].url;
    };

    projectList.appendChild(listItem);
});

// Load first project by default
window.onload = function () {
    displayFrame.src = works["task1"].url;
};