// ===============================
// FITQUEST v1.0
// Main Application
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Automatically set today's date
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("assessmentDate").value = today;

    // Calculate button
    document
        .getElementById("calculateBtn")
        .addEventListener("click", calculateAssessment);

});

function calculateAssessment() {

    // Student information
    const name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("Please enter the student's name.");
        return;
    }

    // Read values
    const situps = Number(document.getElementById("situps").value);
    const sitreach = Number(document.getElementById("sitreach").value);
    const broadjump = Number(document.getElementById("broadjump").value);
    const pullups = Number(document.getElementById("pullups").value);
    const shuttle = Number(document.getElementById("shuttle").value);
    const runMin = Number(document.getElementById("runMin").value);
    const runSec = Number(document.getElementById("runSec").value);

    // Temporary scoring
    // (Official scoring engine comes next)

    let completed = 0;

    if (!isNaN(situps) && situps > 0) completed++;
    if (!isNaN(sitreach) && sitreach > 0) completed++;
    if (!isNaN(broadjump) && broadjump > 0) completed++;
    if (!isNaN(pullups) && pullups > 0) completed++;
    if (!isNaN(shuttle) && shuttle > 0) completed++;
    if (!isNaN(runMin) && !isNaN(runSec)) completed++;

    document.getElementById("totalScore").textContent =
        completed + " / 6 Stations Entered";

    document.getElementById("award").textContent =
        "Calculating...";

}
