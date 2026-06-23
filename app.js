
alert("JavaScript Loaded");

document
.getElementById("studentForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Submit button clicked");

});
