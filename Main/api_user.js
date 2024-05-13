console.log("Liza User is Js");
let name=document.getElementById('text');
let email=document.getElementById('email');
let phone=document.getElementById('password');
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(email.value);
    Email.send({
Host: "smtp.elasticemail.com",
Username : `lakshay0723.be23@chitkara.edu.in`,
Password : "571E06BAA0AA875A1A5A3D0791477FB49F45",
To : `liza0725.be23@chitkara.edu.in`,
From : `liza0725.be23@chitkara.edu.in`,
Subject : "Sign UP Information",
Body : `<html>
<img src="https://i0.wp.com/www.iedunote.com/img/52951/why-business-finance-is-import.jpg?fit=1080%2C810&quality=100&ssl=1" style="height:400px">
<h1>Name->${name.value}</h1>
<h2>Email Of Person->${email.value}</h2>
<h2>Phone Number->${phone.value}</h2>
    <br>
Has Login To Your Website</h2></html>`,
}

).then(
message => alert("Mail sent successfully")
);

})