import axios from 'axios';

const URL_API = 'https://tgmessageapi.onrender.com/sendMessage';
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message')


document.getElementById('mail-form').addEventListener('submit', async (e) => {
	e.preventDefault();
	try {

		await axios.post(URL_API, {
			name: name.value,
			email: email.value,
			message: message.value
		})

		name.value = "";
		email.value = "";
		message.value = "";
	} catch (error) {

		console.log(error)
	}

})