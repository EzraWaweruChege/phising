document
.getElementById("studentForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    alert("Button clicked");

    try {

        alert("Trying Supabase...");

        // your insert code here

    } catch(err){

        alert("ERROR: " + err.message);

        console.log(err);

    }
});
