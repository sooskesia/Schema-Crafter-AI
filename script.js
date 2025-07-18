// Wait until the form is submitted
document.getElementById('schemaForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent page reload

  // Collect user input
  const jobUrl = document.getElementById('job_url').value;
  const email = document.getElementById('user_email').value;
  const resultDiv = document.getElementById('result');
  const outputPre = document.getElementById('schemaOutput');

  // Reset UI elements
  resultDiv.textContent = 'Generating schema...';
  outputPre.textContent = '';

  // Do NOT expose API key in production!
  const apiKey = 'sk-your-api-key'; // Replace with your OpenAI API key

  // Create prompt for GPT to generate job schema
  const prompt = `Extract job details and generate schema JSON-LD from this job listing page:\n\n${jobUrl}\n\nOnly return the JSON-LD code.`;

  try {
    // Send request to OpenAI API
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that generates job schema JSON-LD.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 600
      })
    });

    const data = await res.json();

    // Display result if successful
    if (data.choices && data.choices[0]) {
      const schema = data.choices[0].message.content;
      resultDiv.textContent = 'Schema generated successfully!';
      outputPre.textContent = schema;
    } else {
      resultDiv.textContent = ' Failed to get schema. Try again.';
    }

  } catch (error) {
    console.error(error);
    resultDiv.textContent = 'Something went wrong. Please check your connection or API key.';
  }
});
