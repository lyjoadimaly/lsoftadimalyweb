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