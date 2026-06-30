console.log("FitQuest Loaded");
document.getElementById("startBtn").addEventListener("click", function(){

    const name = document.getElementById("name").value;

    if(name===""){

        alert("Please enter the student's name.");

        return;

    }

    alert("Welcome to FitQuest!\n\nThe NAPFA Assessment module will be added in the next milestone.");

});
