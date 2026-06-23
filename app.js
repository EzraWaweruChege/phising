alert("JavaScript Loaded");

const form = document.getElementById("studentForm");

console.log(form);

if(form){

    alert("Form Found");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Button clicked");

    });

}
else{

    alert("Form NOT Found");

}
