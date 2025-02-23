# Hayim Deutsch Portfolio Website

## About

This is my portfolio website built using React and Vite. It showcases my projects, skills, and experience.

## Features

- Fast and optimized with Vite
- Modern React components
- Responsive design
- Easy to maintain and update
- Styled with Material UI

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-portfolio
   ```
3. Create a `myData.json` file in the root directory with the following structure:
   ```json
   {
     "name": "Your Name",
     "email": "your-email@example.com",
     "phone": "your-phone-number",
     "location": "Your Location",
     "links": {
       "linkedin": {
         "label": "linkedin.com/in/your-profile",
         "url": "https://linkedin.com/in/your-profile"
       },
       "github": {
         "label": "github.com/yourusername",
         "url": "https://github.com/yourusername"
       },
       "cv": {
         "label": "Your CV.pdf",
         "url": "/path-to-your-cv.pdf"
       }
     },
     "cv": "/path-to-your-cv.pdf",
     "projects": [
       {
         "title": "Project Title",
         "description": "Project Description",
         "details": ["Detail 1", "Detail 2", "Detail 3"],
         "repoUrl": "https://github.com/yourusername/project-repo"
       }
     ]
   }
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Open your browser and go to `http://localhost:5173/my-portfolio` to see the website in action.

## Deployment

To build the project for production, run:

```bash
npm run build
```
