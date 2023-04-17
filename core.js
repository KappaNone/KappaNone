function changeTheme() {
    const image = document.querySelector('.container');
    if (image.style.backgroundImage == 'url("Images/BackGround.jpg")') {
        image.style.backgroundImage = 'url("Images/Space.jpg")'
    } else {
        image.style.backgroundImage = 'url("Images/BackGround.jpg")'
    }
}