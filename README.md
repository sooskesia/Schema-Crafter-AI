#  Schema Crafter AI

**Schema Crafter AI** is a web tool that lets you instantly generate [JobPosting schema JSON-LD](https://schema.org/JobPosting) from any job listing URL using OpenAI GPT.

---

## What It Does

- Accepts a job post URL and your email
- Uses OpenAI to analyze the content
- Outputs structured job schema in JSON-LD format
- Easy to copy and paste into your job board or SEO code

---

## Tech Used

- HTML, CSS, JavaScript
- OpenAI GPT (via fetch API)

---

## How to Use

1. Replace `apiKey` in `script.js` with your OpenAI key
2. Open `index.html` in a browser
3. Paste a job URL and your email
4. Click "Generate Schema"  
5. Copy the generated JSON-LD and use it anywhere!

---

## Important Note

This project uses the OpenAI API key directly in frontend JS for demo/testing. **Never expose your API key publicly**. For production, use a secure backend proxy.

---
