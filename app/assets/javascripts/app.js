
$(function () {
    // When your submit button is clicked
    $("form").submit(function (e) {
        // If it is not checked, prevent the default behavior (your submit)
        if (!$('input[name="question_1"]').is(':checked')) {
            alert("No selection is made on Question 1!")
            e.preventDefault();
        }
    });
});
function OptionSelected() {
      document.getElementById("customSize").style.display = 'none';
      var selected = $('input[name="question_1"]:checked').val();
      if (selected == "4") {
          document.getElementById("customSize").style.display = 'block';
      }
}
$(function () {
    // When your submit button is clicked
    $("form").submit(function (e) {
        // If it is not checked, prevent the default behavior (your submit)
        if (!$('input[name="question_2"]').is(':checked')) {
            alert("No selection is made on Question 2!")
            e.preventDefault();
        }
    });
});
function OptionSelected() {
      document.getElementById("customSize").style.display = 'none';
      var selected = $('input[name="question_2"]:checked').val();
      if (selected == "4") {
          document.getElementById("customSize").style.display = 'block';
      }
}
$(function () {
    // When submit button is clicked
    $("form").submit(function (e) {
        // If it is not checked, prevent the default behavior (your submit)
        if (!$('input[name="question_3"]').is(':checked')) {
            alert("No selection is made on Question 3!")
            e.preventDefault();
        }
    });
});
function OptionSelected() {
      document.getElementById("customSize").style.display = 'none';
      var selected = $('input[name="question_3"]:checked').val();
      if (selected == "4") {
          document.getElementById("customSize").style.display = 'block';
      }
}
$(function () {
  // When submit button is clicked
})
