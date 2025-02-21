export default {
    name: 'Hayim Deutsch',
    email: 'chayimdeutsch@gmail.com',
    phone: '+972-53-7133082',
    location: "Bet Shemesh, Israel",
    links: {    
      linkedin: {
        label: 'linkedin.com/in/hayim-deutsch',
        url: 'https://linkedin.com/in/hayim-deutsch',
      },
      github: {
        label: 'github.com/hayimdeutsch',
        url: 'https://github.com/hayimdeutsch',
      },
      cv: {
        label: 'Hayim Deutsch CV.pdf',
        url: '/Hayim Deutsch CV.pdf',
      }
    },
    cv: '/Hayim Deutsch CV.pdf',
    projects: [
      {
        title: "Generic IoT Infrastructure",
        description:
          "An infrastructure solution for collecting, storing, and managing data from a wide range of IoT devices.",
        details: [
          "Built with a Java-based gateway server using a custom thread pool, following object-oriented design principles for maintainability and scalability.",
          "A website developed using HTML, CSS, and vanilla JavaScript allows companies to register themselves and their products.", 
          "The website's backend is powered by Apache Tomcat, with JDBC facilitating interaction with a MySQL database that stores administrative information.",
          "An IoT data storage server, built using Java and MongoDB, designed for efficient handling and storage of data from IoT devices.",
        ],
        skills: [
          "Java",
          "Apache Tomcat",
          "MySQL",
          "JDBC",
          "MongoDB",
          "Multi-threading",
          "TCP/UDP",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        repoUrl: "https://github.com/hayimdeutsch/iot_infrastructure",
      },
      {
        title: "Banking Application",
        description:
          "A comprehensive full-stack web application designed to manage bank accounts, transactions, and user authentication.",
        details: [
          "Built with Node.js and Express, connecting to a MongoDB database for for efficient account and transaction management.",
          "The frontend uses React with Material-UI components for a clean, responsive interface",
          "Role-based access control restricts access to admin routes, while JWT protects user-specific routes to ensure secure access. Bcrypt is used for securely hashing user passwords.",
          "Dockerized backend for easy and consistent deployment across different environments.",
        ],  
        skills: ["Node.js", "React", "Express", "MongoDB", "Mongoose", "JWT", "Bcrypt", "Docker", "Swagger"],
        repoUrl: "https://github.com/hayimdeutsch/bank-project",
      },
      {
        title: "Student Follow-Up Manager",
        description:
          "A platform that automates student follow-ups by allowing teachers to send reminders, create customizable questionnaires, and schedule meetings with students.",
        details: [
          "Built using the MERN stack, this app automates follow-up scheduling by sending reminder emails to teachers from a system email at a pre-scheduled time.",  
          "Integrated with Google Calendar and Gmail APIs, the app sends tailored emails from the teacher’s personal Gmail account and schedules meetings on their Google Calendar.",
          "Passport.js handles user authentication, using Google OAuth2 for secure logins.",
          "Hosted on AWS using an EC2 instance, with a custom domain managed via Route 53 and Caddy serving as a reverse proxy for secure HTTPS connections.",
        ],
          skills: [
          "Node.js",
          "React",
          "Express",
          "MongoDB",
          "Passport",
          "Google APIs",
          "AWS",
          "Caddy",
        ],
        repoUrl: "https://github.com/hayimdeutsch/follow_up",
      },
      {
        title: "Watchdog Monitoring System",
        description: 
          "A real-time monitoring system built in C on Linux, designed to automatically restart crashed processes.",
        details: [
          "Developed in C for Linux, the system uses Inter-Process Communication (IPC) to efficiently monitor and manage processes.",
          "Implements synchronization techniques for multithreading, ensuring smooth operation and preventing race conditions.",
          "Spawns necessary processes and threads to track system stability and restart processes if they crash.",
          "The custom scheduler, built on a heap priority queue, manages tasks with microsecond-level precision while preventing resource starvation.",
        ],
        skills: ["C", "Linux", "IPC", "Multithreading", "Synchronization", "Data Structures"],
      },
    ]
}