function likeButton() {
    let heart = document.querySelector('.heart');
    let likes = document.querySelector('.likes');
    if (heart.src.match("Media/heart.png")) {
        heart.src = "Media/heart_red.png";
        likes.innerHTML = "9,240 likes";
    } else {
        heart.src = "Media/heart.png";
        likes.innerHTML = "9,239 likes";
    }
}