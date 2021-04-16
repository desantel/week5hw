
$(".saveBtn").click(function (e) {
    e.preventDefault();
    let input = document.getElementsByClassName("description").value;
    localStorage.setItem("planner", input);
    let userInput = localStorage.getItem("planner");
})

let date = moment();
$("#currentDay").text(date.format("dddd, MMMM Do YYYY, H:mm"));

let timeId = [8,9,10,11,12,13,14,15,16,17,18];


function colorBg() {
    for (let i = 0; i < timeId.length; i++) {
    if (timeId[i] == moment().format("H")) {
        document.getElementById("hour" + timeId[i]).setAttribute("style", "background-color: lightgreen")}
        else if (timeId[i] < moment().format("H")) {
            document.getElementById("hour" + timeId[i]).setAttribute("style", "background-color: lightblue")}
            else {
                document.getElementById("hour" + timeId[i]).setAttribute("style", "background-color: lightgray")}
    } 

}

colorBg()