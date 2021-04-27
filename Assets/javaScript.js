let date = moment();
let dailyPlan = [];

$("#currentDay").text(date.format("dddd, MMMM Do YYYY, H:mm"));

document.addEventListener("DOMContentLoaded", function () {
    let savedDay = localStorage.getItem("planner");
    if (savedDay !== null) { dailyPlan = savedDay }
    console.log(dailyPlan)
})

let timeId = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

function colorBg() {
    for (let i = 0; i < timeId.length; i++) {
        if (timeId[i] == moment().format("H")) {
            document.getElementById("hour" + timeId[i]).setAttribute("style", "background-color: lightgreen")
        }
        else if (timeId[i] < moment().format("H")) {
            document.getElementById("hour" + timeId[i]).setAttribute("style", "background-color: lightblue")
        }
        else {
            document.getElementById("hour" + timeId[i]).setAttribute("style", "background-color: lightgray")
        }
    }

}

// function storeSearch(plan) {
//     dailyPlan.push(plan)
//     console.log(dailyPlan)
//     localStorage.setItem("planner", JSON.stringify(dailyPlan));
//     for (let i = 0; i < dailyPlan.length; i++) {
        
//     }
// }

document.getElementById("saveBtn").addEventListener('Click', storeSearch(plan))

colorBg()