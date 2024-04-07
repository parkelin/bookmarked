const express = require('express');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 3001; // Feel free to use your preferred port

// Middleware to parse JSON bodies
app.use(express.json());

// Instantiate OpenAI with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Make sure to use your actual OpenAI API key here
});
const openai = new OpenAIApi(configuration);

// Define the endpoint
app.post('/api/check-inconsistency', async (req, res) => {
  const { text, profile } = req.body;

  try {
    const prompt = `Given the character profile: ${JSON.stringify(profile)}\n\nIs the following text consistent with the character's profile? "${text}"`;
    
    const response = await openai.createCompletion({
      model: 'text-davinci-003', // Or use the latest available model
      prompt: prompt,
      max_tokens: 100
    });

    // Send the OpenAI response back to the front-end
    res.json({ message: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
