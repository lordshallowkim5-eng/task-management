const SUBJECTS_BY_LEVEL = {
  L3: [
    "Introduction to Programming",
    "Web Design Basics",
    "Mathematics",
    "English",
    "Version Control",
    "UI/UX Fundamentals",
    "JavaScript Basics",
    "Project Requirements",
  ],
  L4: [
    "Object-Oriented Programming",
    "Frontend Development",
    "Database Fundamentals",
    "Mathematics",
    "English",
    "Version Control",
    "UI/UX Design",
    "Project Requirements",
  ],
  L5: [
    "Advanced JavaScript",
    "Backend Development",
    "Databases and SQL",
    "API Integration",
    "Software Testing",
    "DevOps Basics",
    "Version Control",
    "Final Project",
  ],
};

const mcq = (text, options, correct) => ({
  type: "mcq",
  text,
  options,
  correct,
});

const essay = (text) => ({
  type: "essay",
  text,
});

const BUILTIN_EXAM_QUESTIONS = {
  "L3|Introduction to Programming": [
    mcq(
      "What does HTML stand for?",
      {
        a: "Hyper Text Markup Language",
        b: "High Transfer Machine Language",
        c: "Hyperlinks Text Management Language",
        d: "Home Tool Markup Language",
      },
      "a"
    ),
    essay("Explain the difference between a variable and a constant."),
  ],
  "L3|Web Design Basics": [
    mcq(
      "Which CSS property changes text color?",
      { a: "font-size", b: "color", c: "background", d: "margin" },
      "b"
    ),
    essay("Describe responsive web design."),
  ],
  "L3|Mathematics": [
    mcq(
      "What is the value of 15% of 200?",
      { a: "20", b: "30", c: "35", d: "40" },
      "b"
    ),
    essay("Explain how percentages are used in everyday calculations."),
  ],
  "L3|English": [
    mcq(
      "Which word is a noun?",
      { a: "quickly", b: "library", c: "run", d: "beautiful" },
      "b"
    ),
    essay("Write a short paragraph describing your daily study routine."),
  ],
  "L3|Version Control": [
    mcq(
      "Which command uploads changes to GitHub?",
      { a: "git push", b: "git delete", c: "git stop", d: "git hide" },
      "a"
    ),
    essay("Explain the importance of version control."),
  ],
  "L3|UI/UX Fundamentals": [
    mcq(
      "What does UI mean?",
      {
        a: "User Interface",
        b: "User Internet",
        c: "Universal Interface",
        d: "Unified Integration",
      },
      "a"
    ),
    essay("Explain the importance of UX in software development."),
  ],
  "L3|JavaScript Basics": [
    mcq(
      "Which keyword declares a variable in JavaScript?",
      { a: "let", b: "style", c: "print", d: "paint" },
      "a"
    ),
    essay("What is the use of JavaScript in web development?"),
  ],
  "L3|Project Requirements": [
    mcq(
      "What is a functional requirement?",
      {
        a: "What the system must do",
        b: "The font used in the UI",
        c: "The server brand name",
        d: "The color of office walls",
      },
      "a"
    ),
    essay("Why is requirement gathering important before coding?"),
  ],
  "L4|Object-Oriented Programming": [
    mcq(
      "Which OOP principle hides internal object details?",
      { a: "Encapsulation", b: "Printing", c: "Copying", d: "Deleting" },
      "a"
    ),
    essay("Explain inheritance with a simple programming example."),
  ],
  "L4|Frontend Development": [
    mcq(
      "Which framework is used for frontend development?",
      { a: "React", b: "MySQL", c: "MongoDB", d: "Nginx only" },
      "a"
    ),
    essay("Explain the role of frontend developers."),
  ],
  "L4|Database Fundamentals": [
    mcq(
      "What is a primary key in a database table?",
      {
        a: "A unique identifier for each row",
        b: "A decorative column name",
        c: "A backup file",
        d: "A CSS selector",
      },
      "a"
    ),
    essay("Explain the difference between a table and a record."),
  ],
  "L4|Mathematics": [
    mcq(
      "What is the slope of the line y = 2x + 3?",
      { a: "2", b: "3", c: "5", d: "1" },
      "a"
    ),
    essay("Describe how algebra helps in solving real-world problems."),
  ],
  "L4|English": [
    mcq(
      "Which sentence is written in passive voice?",
      {
        a: "The report was submitted by the team.",
        b: "The team submits the report.",
        c: "Submit the report now.",
        d: "Reports help learning.",
      },
      "a"
    ),
    essay("Write a formal email requesting an extension for an assignment."),
  ],
  "L4|Version Control": [
    mcq(
      "Which command creates a new branch in Git?",
      { a: "git branch", b: "git color", c: "git sleep", d: "git erase" },
      "a"
    ),
    essay("Explain why branches are useful in team projects."),
  ],
  "L4|UI/UX Design": [
    mcq(
      "What does UX focus on?",
      {
        a: "User experience and usability",
        b: "Server memory only",
        c: "Database indexing",
        d: "Compiler speed only",
      },
      "a"
    ),
    essay("Describe three principles of good interface design."),
  ],
  "L4|Project Requirements": [
    mcq(
      "What document lists project goals and constraints?",
      {
        a: "Requirements specification",
        b: "Keyboard manual",
        c: "Monitor warranty",
        d: "Random notes only",
      },
      "a"
    ),
    essay("Explain the difference between scope and requirements."),
  ],
  "L5|Advanced JavaScript": [
    mcq(
      "What does async/await help developers do?",
      {
        a: "Handle asynchronous operations clearly",
        b: "Change CSS colors automatically",
        c: "Delete databases safely",
        d: "Disable JavaScript completely",
      },
      "a"
    ),
    essay("Explain promises and when to use them."),
  ],
  "L5|Backend Development": [
    mcq(
      "Which language can be used for backend development?",
      { a: "Node.js", b: "CSS", c: "Figma", d: "HTML only" },
      "a"
    ),
    essay("What is the purpose of a server?"),
  ],
  "L5|Databases and SQL": [
    mcq(
      "What does SQL stand for?",
      {
        a: "Structured Query Language",
        b: "Simple Question Language",
        c: "Server Query Logic",
        d: "System Quality Layer",
      },
      "a"
    ),
    essay("Explain the importance of databases."),
  ],
  "L5|API Integration": [
    mcq(
      "What does API stand for?",
      {
        a: "Application Programming Interface",
        b: "Advanced Personal Internet",
        c: "Automatic Program Installer",
        d: "Applied Protocol Index",
      },
      "a"
    ),
    essay("Describe how frontend and backend communicate through an API."),
  ],
  "L5|Software Testing": [
    mcq(
      "What is unit testing?",
      {
        a: "Testing individual components in isolation",
        b: "Testing only the logo",
        c: "Testing internet speed only",
        d: "Testing office furniture",
      },
      "a"
    ),
    essay("Explain the difference between manual and automated testing."),
  ],
  "L5|DevOps Basics": [
    mcq(
      "What is continuous integration (CI)?",
      {
        a: "Frequently merging and testing code changes",
        b: "Stopping all deployments",
        c: "Removing version control",
        d: "Disabling backups",
      },
      "a"
    ),
    essay("Why are deployment pipelines important in modern software teams?"),
  ],
  "L5|Version Control": [
    mcq(
      "What is a pull request used for?",
      {
        a: "Reviewing and merging proposed code changes",
        b: "Deleting the repository",
        c: "Changing monitor brightness",
        d: "Installing fonts",
      },
      "a"
    ),
    essay("Explain how version control improves collaboration."),
  ],
  "L5|Final Project": [
    mcq(
      "What should a final project README include?",
      {
        a: "Setup steps and project overview",
        b: "Only random emojis",
        c: "Personal passwords",
        d: "Deleted file names only",
      },
      "a"
    ),
    essay("Describe how you would plan, build, test, and present a software project."),
  ],
};

const getBuiltinExamQuestions = (level, subject) => {
  if (!level || !subject) return [];
  return BUILTIN_EXAM_QUESTIONS[`${level}|${subject}`] || [];
};

const getSubjectsForLevel = (level) => SUBJECTS_BY_LEVEL[level] || [];
