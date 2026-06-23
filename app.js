const SUPABASE_URL =
'https://tzygochlibduxubsblzd.supabase.co/rest/v1/';

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

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const course =
document.getElementById("course").value;

const {data,error} =
await client
.from("students")
.insert([
{
name:name,
email:email,
course:course
}
]);

if(error){
alert("Error");
console.log(error);
}
else{
alert("Student Saved");
}
});
