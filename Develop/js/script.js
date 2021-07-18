var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#1");
var hour2 = $("#2");
var hour3 = $("#3");
var hour4 = $("#4");
var hour5 = $("#5");
var time = moment();

//adding the current day to the top of the planner
function openPlanner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    //pull from localstorage
    $(".time-block").each(function () {
        var load = $(this).attr("id");
        var schedule = localStorage.getItem(load);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

//calling time to top of page
openPlanner();

//saving text to localstorage 
$(".saveBtn").on("click", function () {
    //https://api.jquery.com/parent/#parent-selector
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
})




