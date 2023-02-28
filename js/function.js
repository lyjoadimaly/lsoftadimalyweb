function readMore(city) {

    let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.card[data-city="${city}"] .more`);
    let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}
function sendEmail(){
    console.log("clicked")
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "detailssender1@gmail.com",
        Password : "BA2D38C48A12A6F94B5CBC36287150CEA542",
        port:2525,
        From: 'detailssender1@gmail.com',
        To : 'contact.lyjo@gmail.com',
        Subject : "New customire details from lsoft web",
        Body : "Name: "+document.getElementById("fname").value+document.getElementById("lname").value
        +"<br>Email: "+document.getElementById("email").value
        +"<br>Mobile: "+document.getElementById("mobile").value
        +"<br>Comment: "+document.getElementById("comment").value
    }).then(
      message => alert("Submit Successfully")
    );
}