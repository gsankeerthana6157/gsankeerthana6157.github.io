const works = {
    "task1": { "title": "Expectation Document", "url": "works/task1/index.html" },
    "task2": { "title": "Basic HTML Styling", "url": "works/task2/index.html" },
    "task3": { "title": "CSS Hover", "url": "works/task3/index.html" },
    "task4": { "title": "Welcome to JS", "url": "works/task4/index.html" },
    "task5": { "title": "Calculator With JS", "url": "works/task5/index.html" },
    "task6": { "title": "GitHub Integration", "url": "works/task6/index.html" },
    "task7": { "title": "Console Output", "url": "works/task7/index.html" },
    "task8": { "title": "String Operation", "url": "works/task8/index.html" },
    "task9": { "title": "Conditions", "url": "works/task9/index.html" },
    "task10": { "title": "Call-Stack With Array", "url": "works/task10/index.html" },
    "task11": { "title": "Star with loops", "url": "works/task11/index.html" },
    "task12": { "title": "Series", "url": "works/task12/index.html" },
    "task12-1": { "title": "Stars with colors", "url": "works/task12-1/index.html" },
    "task13": { "title": "Student Info", "url": "works/task13/index.html" },
    "task14A": { "title": "Student Info Object2", "url": "works/task14A/index.html" },
    "task14B": { "title": "Random Number Generator", "url": "works/task14B/index.html" },
    "task14C": { "title": "Vanish", "url": "works/task14C/index.html" },
    "task15": { "title": "Bootstrap", "url": "works/task15/index.html" },
    "task15-1": { "title": "Age Calculator", "url": "works/task15-1/index.html" },
    "task16": { "title": "Dynamic Gallery GitHub Integration", "url": "works/task16/index.html" }


};

const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];
        const projectList = document.getElementById("projectList");
        const displayFrame = document.getElementById("displayFrame");

        Object.keys(works).forEach((key, index) => {
            let btn = document.createElement("button");
            btn.textContent = works[key].title;
            btn.classList.add("project-btn");

            // Assign a different color for each button
            btn.style.backgroundColor = colors[index % colors.length];
            btn.style.color = "#333";

            // Click event to change iframe
            btn.onclick = () => {
                console.log(`Loading: ${works[key].url}`);
                displayFrame.src = works[key].url;
            };

            projectList.appendChild(btn);
        });