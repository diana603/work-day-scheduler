var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

hours.forEach(hour => {
    // created row for time input and save button 
    var tableRow = $('<tr>');
    // created row description for time 
    var time = $('<td>').text(hour);
    time.attr("class", "hour");
    // created row description for input
    var inputField = $('<td>');
    var input = $('<input>');
    input.attr("id", "input" + hour);
    input.attr("data-id", hour)

    input.val(sessionStorage.getItem("input" + hour));

    inputField.append(input);

    if (moment().isBefore(hour)) {
        inputField.attr("class", "previous");
    } else if (moment().isAfter(hour)) {
        inputField.attr("class", "future");
    }

    // created row descripton for button 
    var saveButton = $('<td>');
    var btn = $('<button>');
    btn.attr("class", "saveBtn")
    btn.attr("id", hour);

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


// event lister click when click on a button how to get the table description before it. how to select the input field to save the different data. could have class like time input button. or jquery.