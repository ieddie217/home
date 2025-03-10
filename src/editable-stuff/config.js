// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Eddie",
  middleName: "",
  lastName: "Wang",
  message: " ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ieddie217",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/eddiewaaaanggg",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/eddiewaaang/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eddie-yh-wang/",
    }
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/eddiewang.JPG"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.png"),
  imageSize: 375,
  message:
    "I graduated from the University of Toronto, St. George, in 2020 with a double major in Computer Science and Mathematics. I kickstarted my career by initially working in hardware and integrated circuits, then transitioned to a software app developer role. In the ever-evolving tech industry, staying adaptable and continuously learning new technologies is crucial to growth and success. I’m passionate about embracing change and constantly expanding my skills to stay ahead in this dynamic field.",
  resume: "https://drive.google.com/file/d/1-6A34oobwY6Pyl_NSU6z6b97-vCFbSbK/view?",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Works",
  gitHubUsername: "ieddie217", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Congress", "LINE-", "DURA", "TeamMate"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/eddiewang.JPG"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/eddiewang.JPG"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "PowerApps", value: 95 },
    { name: "PowerAutomate", value: 95 },
    { name: "Dataverse", value: 90 },
    { name: "UI/UX Design", value: 65},
    { name: "Python", value: 75 },
    { name: "C", value:55},
    { name: "SQL", value: 70 },
    { name: "Data Structures", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 75 },
    { name: "HTML/CSS", value: 70 },
    { name: "REST API", value: 90 }, 

  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ieddie217tw@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/TAITRA.png'),
      date: 'March 2023 – Present',
    },
    {
      role: 'Assistant PM/Sales Manager',
      companylogo: require('../assets/img/umec.jpg'),
      date: 'August 2021 – September 2022',
    },
    {
      role: 'Technical Lead',
      companylogo: require('../assets/img/BELIEVE.png'),
      date: 'January 2020 – March 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };