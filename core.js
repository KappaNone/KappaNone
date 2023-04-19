function changeTheme() {
    const image = document.querySelector('.container');
    if (image.style.backgroundImage == 'url("Images/BackGround.jpg")') {
        image.style.backgroundImage = 'url("Images/Space.jpg")'
    } else {
        image.style.backgroundImage = 'url("Images/BackGround.jpg")'
    }
}

const TOKEN = "6167387338:AAERGfrnEzABZ40ui0ir7uzMkJDLi5tN05o";
const CHAT_ID = "-1001761354343";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message')


document.getElementById('mail-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let tg_message = `<b>Сообщение с сата!</b>\n`;
    tg_message += `<b>Отправитель: </b> ${ name.value } \n`;
    tg_message += `<b>Почта отправителя: </b> ${ email.value } \n`;
    tg_message += `<b>Сообщение: </b> ${ message.value } \n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: tg_message
    })
    .then((res) => {
        name.value = "";
        email.value = "";
        message.value = "";
    })
    .catch((err) => {
        console.warn(err)
    })
    .finally(() => {
        console.log('End')
    })
})