function update() {
    let score = parseFloat(document.getElementById("input").value);
    let grade = ""; // Declare grade with an initial value

    if (score >= 80 && score <= 100) {
        grade = "A";
    } else if (score >= 60 && score <= 79) {
        grade = "B";
    } else if (score >= 40 && score <= 59) {
        grade = "C";
    } else if (score >= 0 && score <= 39) {
        grade = "Fail";
    } else {
        grade = "Invalid Score"; // Handles cases where the input is out of range
    }

    // Ensure the element exists before updating its innerHTML
    let gradeSpan = document.getElementById("grade_span");
    if (gradeSpan) {
        gradeSpan.innerHTML = grade;
    } else {
        console.error("Element with ID 'grade_span' not found.");
    }

    console.log(grade); // Debugging output
}
