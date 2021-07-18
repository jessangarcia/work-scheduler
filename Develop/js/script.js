
var time = moment();

//adding the current day to the top of the planner
function openPlanner() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    //pull from localstorage
    $(".time-block").each(function () {
        var load = $(this).attr("id");
        var schedule = localStorage.getItem(load);

        if (schedule !== null) {
            //https://api.jquery.com/children/#children-selector
            $(this).children(".schedule").val(schedule);
        }
    });
}

//calling time and saved events
openPlanner();

//saving text to localstorage 
$(".saveBtn").on("click", function () {
    //https://api.jquery.com/parent/#parent-selector
    var time = $(this).parent().attr("id");
    //https://api.jquery.com/siblings/#siblings-selector
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
})

//changing the section colors
function dueTimes() {
    hour = time.hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future")
        } 
        else if (currentHour === hour) {
            $(this).addClass("present")
        } 
        else {
            $(this).addClass("past")
        }
    });
}

dueTimes();



