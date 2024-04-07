import axios from 'axios' 

const getInconsistency = async (payload) => {

    // PUT IN API KEY BELOW!!!!!!!!!!!!
    const apiKey = process.env.REACT_APP_OPENAI_KEY;

    const apiMsg = `I will give you a block of narrative input. \
                    If there are no inconsistencies in the input, respond with only the phrase "None Found". \
                    Else, respond with any inconsistencies found in less than 100 words. \
                    Here is the text: ${payload.highlightedText}`;
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: apiMsg}],
            temperature: 0.7
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        })
        console.log("response in openai.js", response.data.choices[0].message.content);
        return response.data.choices[0].message.content;
    }
    catch (error) {
        if (error.response && error.response.data) {
            console.error('Error:', error.response.data);
        } else {
            console.error('Error occurred:', error.message);
        }
    };
}

export default getInconsistency;