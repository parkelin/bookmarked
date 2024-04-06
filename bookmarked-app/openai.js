const axios = require('axios');

// const apiKey = PUT THE API KEY IN IT WONT WORK WITHOUT IT

axios.post('https://api.openai.com/v1/chat/completions', {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'find the inconsistencies in this text: i am 21 years old and i was born in 2010.' }],
    temperature: 0.7
}, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(response => {
    console.log(response.data);

})
.catch(error => {
    if (error.response && error.response.data) {
        console.error('Error:', error.response.data);
    } else {
        console.error('Error occurred:', error.message);
    }
});
