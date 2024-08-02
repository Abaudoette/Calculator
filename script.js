// Grab elements from HTML and link them th JS
var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField");
var form = document.getElementById("formField");

form.addEventListener("submit", function(event) {
    if (!numField1.value || !numField2.value) {
        alert("Please fill in the empty input boxes")
    } else{
        // Convert the strings to number
        var X = parseFloat(numField1.value);
        var Y = parseFloat(numField2.value);

        var result = X / Y;
        var percent = result * 100;

        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }

    
})
