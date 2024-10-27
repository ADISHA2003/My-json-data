// Import necessary modules
const express = require('express');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Updated data in JSON format
const data = {
  "Name": "Aditya Sharma",
  
  "Contact": {
    "Email": "adityasharma56697@gmail.com",
    "Linkedin": "https://linkedin.com/in/aditya-sharma-334528296",
    "github": "https://github.com/adisha2003",
    "Location": "Faridabad, Haryana",
    "Phone": "+91 9289665096"
  },
  "Career_objective": "I am eager to join a forward-thinking company where I can apply my skills to drive success through collaboration and innovation. Committed to continuous learning and growth, I aim to contribute value and support the company in achieving its strategic goals, while advancing my own professional development.",
  "Hard_skills": [
    "HTML and CSS",
    "JavaScript",
    "Figma",
    "Node",
    "React",
    "Git"
  ],
  "Soft_skills": [
    "Strong problem-solving and analytical skills",
    "Eagerness to learn new technologies",
    "Decision making",
    "Communication",
    "Multi-tasking"
  ],
  "Education": [
    {
      "Institution": "Maharishi Dayanand University",
      "Degree": "Bachelors in Commerce (Hons.)"
    },
    {
      "Institution": "BVN Sr. Sec. Public School",
      "Class": "X",
      "Percentage": 81
    },
    {
      "Institution": "BVN Sr. Sec. Public School",
      "Class": "XII",
      "Percentage": 86
    }
  ],
  "Experience": {
    "Position": "Frontend Developer Intern",
    "Company": "Realezi, Prop-Tech, Gujarat",
    "Description": "Modified Figma designs to responsive webpages using HTML, CSS, JavaScript, and Figma. Collaborated with UI/UX designers and backend developers.",
    "Duration": "August to October"
  },
  "Certifications": [
    "JavaScript Algorithms and Data Structures (Beta) - Free Code Camp",
    "Accenture - Product Design Job Simulation - Forage",
    "Introduction to Generative AI - Google",
    "AI & ChatGPT for Productivity - Udemy",
    "Certificate in Computer Application - MS Office"
  ]
};

// Define an API endpoint to serve the pretty-printed JSON data
app.get('/api/data', (req, res) => {
  res.setHeader('Content-Type', 'application/json'); // Set content type to JSON
  res.send(JSON.stringify(data, null, 2)); // Pretty print JSON data with 2 spaces for indentation
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/data`);
});
