export default function handler(req, res) {
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
    "Technical_skills": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "Git",
      "GitHub",
      "Figma",
      "PostgreSQL",
      "Puppeteer",
      "Vercel",
      "Selenium WebDriver (JS)",
      "Mocha",
      "Chai",
      "Postman",
      "AWS Basics",
      "Flask",
      "Express",
      "MySQL",
      "ACID",
      "Normalization",
      "Indexing",
      "Keys",
      "JWT",
      "Chrome DevTools",
      "Google Apps Script"
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
        "Degree": "Bachelor's in Commerce (Hons.)",
        "Duration": "June 2021 - May 2024"
      },
      {
        "Institution": "BVN Sr. Sec. Public School",
        "Class": "XII",
        "Percentage": 86
      },
      {
        "Institution": "BVN Sr. Sec. Public School",
        "Class": "X",
        "Percentage": 81
      }
    ],
    "Experience": {
      "Position": "Frontend Developer Intern",
      "Company": "Realezi, Prop-Tech (Gujarat)",
      "Duration": "August 2024 - October 2024",
      "Description": "Modified Figma designs into responsive webpages. Utilized technologies such as HTML, CSS, JavaScript, and Figma. Collaborated with UI/UX designers and backend developers."
    },
    "Side_projects": [
      {
        "Project": "SmartCompare",
        "Link": "https://smartcompare.vercel.app",
        "Description": "A grocery comparison app built using QuickCompare APIs. Displays products like milk and bread with price, weight, delivery time, and image. Hosted on Vercel and uses Neon PostgreSQL to track PWA installs. Tagline: 'FOR THE SMART ONES'."
      },
      {
        "Project": "Blinkit Product Scraper App",
        "Description": "A web app that scrapes Blinkit product data using Puppeteer based on user-entered queries and location. Built with a frontend for user input and a Puppeteer-powered backend for real-time product search results."
      },
      {
        "Project": "Portfolio Website",
        "Link": "https://custom-web-solutions.vercel.app",
        "Description": "Custom Web Solutions is a web development service focused on creating modern, responsive websites for small businesses."
      },
      {
        "Project": "System Inspector",
        "Link": "https://system-inspector.vercel.app/",
        "Description": "Displays detailed information about a user’s browser, device, system, graphics, network, and features."
      }
    ],
    "Certifications": [
      "JavaScript Algorithms and Data Structures (Beta) - Free Code Camp (2024)",
      "Accenture - Product Design Job Simulation - Forage (2023)",
      "Certificate in Computer Application - MS Office (2021)",
      "AI & ChatGPT for Productivity - Udemy (2023)",
      "Introduction to Generative AI - Google (2024)"
    ],
    "Additional_information": {
      "Bug_Fix": {
        "Project": "Gemini Web Console",
        "Issue": "Fixed bug where pressing Enter submitted empty messages.",
        "URL": "https://github.com/google-gemini/live-api-web-console/issues/37"
      },
      "Feedback_Preferences": "You prefer honest and constructive feedback and want to be corrected immediately if something is wrong rather than always receiving positive reinforcement."
    }
  };

  // Set the Content-Type header to application/json
  res.setHeader('Content-Type', 'application/json');

  // Send the formatted JSON response
  res.send(JSON.stringify(data, null, 2));
}
