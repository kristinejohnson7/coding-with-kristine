import haleyTherapy from "../assets/Projects/hktherapy.png";
import haleyArt from "../assets/Projects/hkstudio-final.png";
import nlm from "../assets/Projects/nlm.png";
import nodeCalc from "../assets/Projects/node-calc.png";
import spotify from "../assets/Projects/kristine-radio.png";
import saas from "../assets/Projects/SAAS.png";
import debtCalc from "../assets/Projects/debt-calc.png";
import battleship from "../assets/Projects/battleship.png";
import smackChat from "../assets/Projects/smackChat.png";
import colorGen from "../assets/Projects/color-generator.png";
import studentAPI from "../assets/Projects/studentAPI.png";
import bookstagram from "../assets/Projects/bookstagram.png";
import bookstagramBackend from "../assets/Projects/bookstagramBackend.png";
import lionProDev from "../assets/Projects/lionProDev.png";

export const portfolio = [
  {
    title: "Haley Klein Therapy",
    description:
      "This freelance project was for a local Marriage and Family therapist private practitioner. Her main clientele is trauma-focused therapy but also has a large portion of clients who have general anxiety or life transition changes. Haley wanted a website that had a simple and clean aesthetic, but one that was also welcoming to prospective clients.",
    img: haleyTherapy,
    gitHubLink: "https://github.com/kristinejohnson7/haley-klein-therapy",
    projectLink: "https://www.haleykleintherapy.com/",
    type: "javascript",
  },
  {
    title: "NLM Physical Therapy",
    description:
      "This freelance project was for the owner of a mobile physical therapy practice. The owner wanted a web presence that was professional but also welcoming to patients and not overly “sterile”. I greatly enjoyed creating this website that reflects the owner's skill level and care for her work",
    img: nlm,
    gitHubLink: "https://github.com/kristinejohnson7/nextlevelmovementpt",
    projectLink: "https://nextlevelmovementpt.com/",
    type: "javascript",
  },
  {
    title: "Node Calculator",
    description:
      "The Node Calculator project is a terminal-based app that computes a math calculation based on two number and an operator that are entered by the user. This project was my first jump into JavaScript and helped me to implement and grow in using concise and clean logic. There was an optional bonus for the project which included allowing the user to input the whole math operation (e.g., 6 / 3) rather than each number and operand separately. The bonus portion was the most challenging, but it cemented my knowledge of manipulating and cutting strings into usable pieces.",
    img: nodeCalc,
    gitHubLink: "https://github.com/kristinejohnson7/node-calc",
    type: "node",
  },
  {
    title: "SAAS",
    description:
      "The Software as a Service (SAAS) website project was designed to take my CSS skills to an advanced level. I learned so much CSS through this assignment and really cemented my confidence and high skill level in CSS. This assignment required a deep understanding of positioning to place elements such as the icons at the front of the page and graphics behind images. The most challenging part of the project was the placement of the “Why front” dot container, which required some unique solutions to have each flex component centered.",
    img: saas,
    gitHubLink: "https://github.com/kristinejohnson7/front-deploy",
    projectLink: "https://frontsaas.netlify.app/",
    type: "javascript",
  },
  {
    title: "Spotify API Radio",
    description:
      "This project was my first introduction to using APIs. The project requirements were to load some data from an API and display that content while also having functionalities such as favoriting and alphabetizing. I didn’t realize when I started the project that the Spotify API was private and would require a token. I decided to stick with the Spotify API so I could level up my skills and knowledge and learn the different features a private API would bring (e.g., token’s, methods, etc.). Looking back at this project there are ways I would refactor the code by utilizing classes for a cleaner approach, rather than storing the data in one IFFE function. Overall, I had a lot of fun on this project and learned so much about accessing and displaying data from an API.",
    img: spotify,
    gitHubLink: "https://github.com/kristinejohnson7/radio-api",
    projectLink: "https://radio-api-kristinejohnson7.vercel.app/",
    type: "javascript",
  },
  {
    title: "Debt Calculator",
    description: `The Debt Calculator project was created using React. The calculator also keeps track of monthly payments and over-payments. The app was designed to receive total amount and enter rate and then calculate minimum principal, minimum interest, and minimum monthly payment. The user can enter a payment amount and see the number of payments remaining and total balance left.
    
    I greatly enjoyed working on this project. Creating and utilizing React components felt very intuitive to me. I learned a lot about updating state and when state updates on the DOM. If I were to go back I would likely factor the CSS into modules and a function to handle over-payments.`,
    img: debtCalc,
    gitHubLink: "https://github.com/kristinejohnson7/debt-calc",
    projectLink: "https://debt-calculator-azure.vercel.app/",
    type: "react",
  },
  {
    title: "Color Generator",
    description:
      "The Color Generator project helped me to incorporate several aspects of my JavaScript knowledge in one project. This project uses a library to generate color HEX codes. The hue, brightness, and saturation dials reflect the current color. The most challenging aspect of this project was creating a lock function that keeps the selected color in place when new colors are generated. This was a great project that helped me put several pieces of my JavaScript knowledge all together in one project.",
    img: colorGen,
    gitHubLink: "https://github.com/kristinejohnson7/color-generator",
    projectLink: "https://random-color-generator7.netlify.app/",
    type: "javascript",
  },
  {
    title: "Students API",
    description:
      "This API was built with Node and Express. The requirements were to created student data that included the following properties: id, firstName, lastName, createdOn, updatedOn, grade and classes. All API methods were required to handle successful and failed responses. CRUD operations were created to update a student, add a student, update and delete a class, etc. I added a fun spin on it by making all my students Harry Potter characters.",
    img: studentAPI,
    gitHubLink: "https://github.com/kristinejohnson7/HarryPotterAPI-MONGODB",
    type: "node",
  },
  {
    title: "Haley Klein Art Studio",
    description: `This project was created using ReactJS. The requirements were to build off the previous commerce project but to add in the following additional functionality: cart icon button in the menu that displays quantity of items in cart, a details page for each item, product search by category, and appropriate UI error handling. Most importantly, this project required product data to be fetched from an API.
   
   But I didn't want to stop there-- I wanted to make sure there was a smooth user experience AND clean code. I felt this couldn't be achieved as well without Context API and React Route--so I went above the assignment requirements and taught myself Context API & React Route and integrated them into the project.`,
    img: haleyArt,
    gitHubLink: "https://github.com/kristinejohnson7/hkstudio",
    projectLink: "https://hkstudio.vercel.app/",
    type: "react",
  },
  {
    title: "SmackChat App",
    description: `This project was created using ReactJS. The requirements were to build a chat application similar to slack. The requirements was creating a UI that was able to delete and update messages from the API. Create new users and update user profiles. As well as socket, in real time, features that include displaying a user typing and bolding channel text when a new message is received.

    The project was used with the Devslopes Mac-Chat API. While this project didn't include modifying the API, I found several bugs in the API code and was able to modify the API code to resolve the bugs.`,
    img: smackChat,
    gitHubLink: "https://github.com/kristinejohnson7/smackChat",
    type: "react",
  },
  {
    title: "Battleship",
    description:
      "The Node Battleship project was my first deep dive into JavaScript. This project operates solely in the Node terminal. The project was completed in stages with each part having requirements of increasing difficulty. The final part prints the boardgame in the terminal and allows the user to play a game against the computer. This project taught me a lot about the logic behind JavaScript. A goal of mine during this project was to make functions clean and concise. The most challenging aspect of this project was the requirement of making multidirectional ships without overlapping or falling off the gameboard. I learned so much from this challenge that I even wrote an article about everything I learned.",
    img: battleship,
    type: "node",
    gitHubLink: "https://github.com/kristinejohnson7/node-battleship",
  },
  {
    title: "Bookstagram Frontend",
    description:
      "The Bookstagram project involved creating both a front-end and back-end for an Instagram-like app. As always I had a lot of fun designing the application and wanted to push myself to go above and beyond the project requirements. The project requirements were: the user must be able to create an account, login, the application displays a feed with posts, the user can delete and create posts, the front end must also be connected to AWS S3. In addition to these requirements I added the feature for users to like posts and have a display picture, as well as user information they could update.",
    img: bookstagram,
    gitHubLink: "https://github.com/kristinejohnson7/bookstagram-frontend",
    projectLink: "https://bookstagram-7.vercel.app",
    type: "react",
  },
  {
    title: "Bookstagram Backend",
    description:
      "The Bookstagram project involved creating both a front-end and back-end for an Instagram-like app. The backend was created using Node and Express. There are various CRUD functions enabling several features on the frontend. Images are saved using Multer and AWS S3.",
    img: bookstagramBackend,
    gitHubLink: "https://github.com/kristinejohnson7/bookstagram-backend",
    type: "node",
  },
  {
    title: "Lion Pro Dev",
    description:
      "The Lion Pro Dev project was for a freelance client who wanted to convert their WordPress website into React. This project involved Contentful CMS and React. I created the website design and worked with the client in staged releases for various features of the website. Performance optimization was also performed by using cache, lazyloading, and other optimizations.",
    img: lionProDev,
    gitHubLink: "https://github.com/kristinejohnson7/lion-pro-dev",
    projectLink: "https://lionprodev.com/",
    type: "react",
  },
];
