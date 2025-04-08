// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Andy6309";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
    "Hi, I'm Andy Mize — a Software Specialist and Developer based in Butler, KY. I focus on building high-performance, data-driven, and geospatially aware software systems.\n\n" +

    " What I Do:\n" +
    "- Backend/API development using C#, Python, Node.js, and SQL\n" +
    "- Real-time data processing and ERP/MRP system integration\n" +
    "- Scalable infrastructure with Docker, Kubernetes, and Google Cloud\n" +
    "- Frontend dashboard development with React\n" +
    "- Query tuning, automation, and architecture optimization\n\n" +

    " What I’ve Built:\n" +
    "- Tools that automate manufacturing workflows and integrate industrial systems\n" +
    "- Pipelines that ingest, transform, and visualize real-time data (SQL/NoSQL)\n" +
    "- Dashboards that connect CAM/CAD software to meaningful operational insights\n" +
    "- Geospatial tools for mapping, tracking, and spatial intelligence\n\n" +

    " Current Role:\n" +
    "At Prima Power North America, I develop software that bridges industrial hardware with cloud-based analytics. I design and manage automation tools that power real-time operational visibility.\n\n" +

    " Technologies I Work With:\n" +
    "C# | Python | SQL | VB.NET | React | Node.js | Docker | MongoDB | OPC-UA | Grafana | Google Cloud\n" +

    " I'm always exploring new technologies—especially around automation, geospatial data, and cloud-native applications.\n\n" +

    "***Built with React, Bootstrap, Redux, and the GitHub REST API***";


/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
        skill: <Icon icon="teenyicons:c-sharp-solid" className="display-4" />,
    name: "C#",
  },
  {
    id: 2,
      skill: <Icon icon="akar-icons:python-fill" className="display-4" />,
      name: "Python",
  },
  {
    id: 3,
      skill: <Icon icon="hugeicons:sql" className="display-4" />,
      name: "SQL",
  },
  {
    id: 4,
      skill: <Icon icon="ri:nodejs-line" className="display-4" />,
      name: "Node.js",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
      skill: <Icon icon="fluent:code-vb-16-regular" className="display-4" />,
      name: "VB.NET",
  },
  {
    id: 7,
      skill: <Icon icon="teenyicons:mongodb-outline" className="display-4" />,
      name: "MongoDB",
  },
  {
    id: 8,
      skill: <Icon icon="mdi:mapbox" className="display-4" />,
    name: "MapBox",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
    },
    {
        id: 10,
        skill: <Icon icon="simple-icons:maplibre" className="display-4" />,
        name: "MapLibre",
    },
    {
        id: 11,
        skill: <Icon icon="simple-icons:postgresql" className="display-4" />,
        name: "PostgreSQL",
    },
    {
        id: 12,
        skill: <Icon icon="simple-icons:docker" className="display-4" />,
        name: "Docker",
    },
    {
        id: 13,
        skill: <Icon icon="simple-icons:kubernetes" className="display-4" />,
        name: "Kubernetes",
    },
    {
        id: 14,
        skill: <Icon icon="akar-icons:google-fill" className="display-4" />,
        name: "Google Cloud",
    },
    {
        id: 15,
        skill: <Icon icon="simple-icons:graphql" className="display-4" />,
        name: "GraphQL",
    },
];

// Resume link 
export const resume = "https://drive.google.com/file/d/1ZtrY8t5xHpC2OfkSfjE_o4xEJ4jUWNje/view?usp=sharing";


/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["geo-map-app", "Cam3DtoSQL", "post-git"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xyzebnol";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
