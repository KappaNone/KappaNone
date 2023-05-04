btn = document.querySelector('#love').addEventListener('click', changeTheme)

function changeTheme() {
	const image = document.querySelector('.container');
	if (image.style.backgroundImage == 'url("/BackGround.jpg")') {
		image.style.backgroundImage = 'url("/Space.jpg")'
	} else {
		image.style.backgroundImage = 'url("/BackGround.jpg")'
	}
}