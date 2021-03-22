let date = moment();
$("#currentDay").text(date.format("dddd, MMMM Do YYYY, H:mm"));



// const hourRows = document.getElementsByClassName("description")[0].id;
// let currentHour = parseInt(moment().format("H"));
// hello = document.querySelectorAll(".description");
// const listedTime = 

// if (currentHour < hourRows) {
//     hourRows.style.backgrounColor="red"
// }

// function calendarBg() {
//     let 
//         hr = (new Date()).getHours(),
//         hello = document.querySelectorAll(".description");
//     if (hr < listedTime) {
//         hello.backgroundColor = "green";
//     }
//     else if (hr === listedTime) {
//         hello.backgroundColor = "red"
//     }
// }

// function colorRed () {
//     document.getElementsByClassName("description").style.color="red"
// }


//if (current hour = hour in id) {change bg color to red}
//if (current hour is less than id) {change bg color to light gray}
//if (current hour is greater than id) {change bg color to green}

// Array.from(hourRows).forEach(row => {
//     let rowIdString = timeNumber,
//         rowTime;
//     if (rowIdString) {
//         rowTime = parseInt(rowIdString);
//     }
//     if (rowTime) {
//         if (currentHour === rowTime) {
//             setColor(hourRows, "red")
//         }
//     }
// }
// )



$(".saveBtn").click(function (e) {
    e.preventDefault();
    let input = document.getElementsByClassName("description").value;
    localStorage.setItem("planner", JSON.stringify(input))
    let userInput = JSON.parse(localStorage.getItem("planner"));
    // input.innerHTML = userInput;
}
)
