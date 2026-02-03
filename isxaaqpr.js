// Array to store student records
let students = [];

document.getElementById("eligibilityForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let attendance = Number(document.getElementById("attendance").value);
    let assignment = Number(document.getElementById("assignment").value);
    let output = document.getElementById("output");

    // Input Validation
    if (name === "") {
        output.textContent = "❌ Student name is required.";
        output.style.color = "red";
        return;
    }

    if (attendance < 0 || attendance > 100 || assignment < 0 || assignment > 100) {
        output.textContent = "❌ Scores must be between 0 and 100.";
        output.style.color = "red";
        return;
    }

    // Eligibility condition
    let eligible = attendance >= 75 && assignment >= 50;

    // Store data in array
    students.push({
        name: name,
        attendance: attendance,
        assignment: assignment,
        eligible: eligible
    });

    // Display result dynamically
    if (eligible) {
        output.textContent = `✅ ${name} is ELIGIBLE for the exam.`;
        output.style.color = "green";
    } else {
        output.textContent = `❌ ${name} is NOT eligible for the exam.`;
        output.style.color = "red";
    }

    // Reset form
    document.getElementById("eligibilityForm").reset();
});