$("#noShow").hide();
$("#joke").append("<p>Q, What do you call a fake noodle? <br/> A. An impasta</p>");


$("#toggleJokes").click(function() {

let question =
prompt ("Do you like the jokes? Type YES or NO so that you can have your say!");
if (question =="YES") {
    alert("Happy Days!");
} else if (question =="NO") {
    $("#user_input").html("This is the worst joke!");
} else {
    alert("Are you sure you have answered the question with a YES or a NO?");
}
  });