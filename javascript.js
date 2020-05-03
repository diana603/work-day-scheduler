var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

hours.forEach(hour => {
    // created row for time input and save button 
    var tableRow = $('<tr>');
    // created row description for time 
    var time = $('<td>').text(hour < 13 ? hour + "am" : hour - 12 + "pm");
    time.attr("class", "hour");
    // created row description for input
    var inputField = $('<td>');
    var input = $('<input>');
    input.attr("id", "input" + hour);
    input.attr("data-id", hour)
    // created storage of user inpute 
    input.val(sessionStorage.getItem("input" + hour));

    inputField.append(input);
    console.log(moment().isBefore("2020-05-02T20:00:00"

    ));
    // created past present and future colors 
    if (moment().hour() > hour) {
        inputField.attr("class", "past");
    } else if (moment().hour() < hour) {
        inputField.attr("class", "future");
    } else {
        inputField.attr("class", "present");
    }

    // created row descripton for button 
    var saveButton = $('<td>');
    var btn = $('<button>');
    btn.attr("class", "saveBtn")
    btn.attr("id", hour);
    // appended save btn 
    saveButton.append(btn)

    tableRow.append(time, inputField, saveButton);
    $(".calendar").append(tableRow);

});
// created click event for the save button 
$(".saveBtn").on('click', function () {
    currentButton = $(this);
    console.log(currentButton)
    var buttonId = currentButton.attr("id");
    console.log(buttonId);
    var inputElmVal = $("#input" + buttonId).val();
    console.log(inputElmVal);
    sessionStorage.setItem("input" + buttonId, inputElmVal);
})
$('#currentDay').text(moment().format('MMMM Do YYYY'));


