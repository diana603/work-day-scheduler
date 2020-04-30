var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

hours.forEach(element => {
    // created row for time input and save button 
    var tableRow = $('<tr>');
    // created row description for time 
    var time = $('<td>').text(element);
    time.attr("class", "hour");
    // created row description for input
    var inputField = $('<td>');
    var input = $('<input>');
    inputField.append(input);

    // created row descripton for button 
    var saveButton = $('<td>');
    var btn = $('<button>');
    btn.attr("class", "saveBtn")

    saveButton.append(btn)

    tableRow.append(time, inputField, saveButton);
    $(".calendar").append(tableRow);

});

$(".saveBtn").on('click', function () {
    console.log("hello")
})

// event lister click when click on a button how to get the table description before it. how to select the input field to save the different data. could have class like time input button. or jquery.    